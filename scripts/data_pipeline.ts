import fetch from 'node-fetch';
import { URL } from 'url';
import * as fs from 'fs';
import { OriginMap, OriginConfig } from '../src/typescript/utils/dataService';

const EMPTY_STATUS_CODE = -1;
const OK = 200;
const PERMANENT_REDIRECT = 301;
const TEMPORARY_REDIRECT = 302;

const HTTP_RESPONSE_TIMEOUT = 1000 * 30;
const ALLOWED_REDIRECTS = 20;

/**
 * A map of category -> services
 * 
 * @export
 * @interface CategoryMap
 */
export interface CategoryMap {
  [category: string]: {
    [serviceName: string]: OriginConfig
  }
}

const LOCAL_SITE_MAP: OriginMap = {
  "https://www.google.com": {
    "name": "Google",
    "tfa": true,
    "sms": true,
    "phone": true,
    "software": true,
    "hardware": true,
    "doc": "https://www.google.com/intl/en-US/landing/2step/features.html"
  }
}

/**
 * Change the data from the format provided by
 * twofactorauth.org into a siteMap that can be
 * used by 2FAN.
 * 
 * @param data 
 */
function categoryMapToOriginMap(data: CategoryMap): OriginMap {
  let siteMap: OriginMap = {};

  for (const [category, sites] of Object.entries(data)) {
    for (const [siteName, config] of Object.entries(sites)) {
      let url = new URL(config.url);
      siteMap[url.origin] = config;
    }
  }

  return siteMap;
}

async function resolveRedirects(url: string, prevStatus: number, redirectCount: number): Promise<string> {
  if (redirectCount > ALLOWED_REDIRECTS) {
    return null;
  }

  redirectCount += 1;

  try {
    console.log('Requesting: %s', url);
    let res = await fetch(url, {
      redirect: 'manual',
      timeout: HTTP_RESPONSE_TIMEOUT
    });
    // console.log('Response headers for: %s', url);
    // console.log(res.headers.raw());

    if (res.status === OK) {
      return url;
    }

    let nextUrl = res.headers.get('Location');

    if (res.status === PERMANENT_REDIRECT) {
      // console.log('Following 301 permanent redirect...');
      return resolveRedirects(nextUrl, res.status, redirectCount);
    }

    if (res.status === TEMPORARY_REDIRECT && isRedirectHttpToHttps(url, nextUrl)) {
      // console.log('Following 302 temporary redirect upgrading HTTP to HTTPS...');
      return resolveRedirects(nextUrl, res.status, redirectCount);
    }

    // Need more complex logic to resolve redirect further.
    // Since this redirect is only partially complete, we return
    // null to maintain the original URL.
    return null;

  } catch (e) {
    console.log(e);
    return null;
  }
}
/**
 * Return true if the current redirect is from
 * HTTP to HTTPS.
 * 
 * @param urlStr The current URL 
 * @param nextUrlStr The nextUrl from the Location header
 */
function isRedirectHttpToHttps(urlStr: string, nextUrlStr: string): boolean {
  const SCHEME_DELIM = '://';
  let [urlScheme, urlRemainder] = urlStr.split(SCHEME_DELIM);
  let [nextUrlScheme, nextUrlRemainder] = nextUrlStr.split(SCHEME_DELIM);

  if (urlScheme === 'http' && nextUrlScheme === 'https' && urlRemainder === nextUrlRemainder) {
    return true;
  }
  return false;
}

async function processUrl(originMap: OriginMap, url: URL): Promise<void> {
  let origin = url.origin;

  // TODO: Split into own function
  // Resolve relative paths in doc URL
  let doc = originMap[origin].doc;
  if (doc && doc.startsWith('/')) {
    doc = 'https://twofactorauth.org' + doc;
    originMap[origin].doc = doc;
  }

  // TODO: Split into own function
  // Remove unused fields from the config
  delete originMap[origin].url;
  delete originMap[origin].img;

  // Resolve URL redirects 
  let resolvedUrl = await resolveRedirects(origin, EMPTY_STATUS_CODE, 0);
  // console.log('resolvedUrl = %s', resolvedUrl);

  if (resolvedUrl) {
    // This might seem unnecessary, but it is here for a reason.
    // 2FAN matches on the origin of the current page. We were
    // running into problems where the resolved URL here had trailing
    // slashes, paths, etc, etc. We only want to store the origin
    // so that when we match on the origin in the extension, everyone
    // is happy.
    let resolvedOrigin = new URL(resolvedUrl).origin;
    if (resolvedOrigin !== origin) {
      console.log('Replacing [%s] with [%s]', origin, resolvedOrigin);
      originMap[resolvedOrigin] = originMap[origin];
      delete originMap[origin];
    }
  }
}

function compareWithoutUrlScheme(a, b) {
  let SCHEME_DELIMITER = '://';
  a = a.split(SCHEME_DELIMITER)[1];
  b = b.split(SCHEME_DELIMITER)[1];
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function alphabetizeKeys(obj: OriginMap): OriginMap {
  let sortedKeys = {};
  Object.keys(obj).sort(compareWithoutUrlScheme).forEach(function (key) {
    sortedKeys[key] = obj[key];
  });
  return sortedKeys;
}

async function writeOutputToFile(siteMap: OriginMap) {
  siteMap = alphabetizeKeys(siteMap);

  fs.writeFileSync(
    __dirname + '/output.json',
    JSON.stringify(siteMap, null, 2),
    { encoding: 'UTF-8' }
  );
  // console.log('%j', siteMap);
}

/**
 * Extend one object with the iterable properties of another object.
 * https://plainjs.com/javascript/utilities/merge-two-javascript-objects-19/
 * 
 * @param defaults The base object to update. Think of 
 *                 this as the "default" settings.
 * @param updates The object to pull updates from. Think
 *                of this as the user defined settings that 
 *                should override the defaults.
 */
export function extend(defaults: { [key: string]: any }, updates: { [key: string]: any }) {
  Object.keys(updates).forEach(function (key) {
    defaults[key] = updates[key];
  });
  return defaults;
}

async function main() {
  let dataUrl = 'https://twofactorauth.org/data.json';

  try {
    let res = await fetch(dataUrl);
    if (res.ok) {
      let categoryMap = await res.json();
      let originMap = categoryMapToOriginMap(categoryMap);

      extend(originMap, LOCAL_SITE_MAP);

      let processes = [];

      for (const origin of Object.keys(originMap)) {
        let url = new URL(origin);
        processes.push(processUrl(originMap, url));
      }

      await Promise.all(processes);

      writeOutputToFile(originMap);
    }
  } catch (e) {
    console.log(e);
  }
}

main();

// async function test() {
//   let testSiteMap = {
//     "https://facebook.com": {
//       "name": "Facebook",
//       "tfa": true,
//       "sms": true,
//       "url": "something",
//       "software": true,
//       "hardware": true,
//       "doc": "https://www.facebook.com/help/148233965247823"
//     }
//   };

//   let origin = 'https://facebook.com';
//   // let resolvedUrl = await resolveRedirects(origin, EMPTY_STATUS_CODE);
//   // console.log('resolvedUrl = %s', resolvedUrl);

//   await processUrl(testSiteMap, origin);

//   console.log('siteMap = %j', testSiteMap);
// }

// test();
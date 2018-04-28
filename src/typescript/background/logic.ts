import { browser } from 'webextension-polyfill-ts';
import { popNotification } from './notifications';
import { loadServiceConfig, SERVICE_CONFIG, shouldShowNotification } from '../utils/dataService';

export async function processUrl(url: URL) {
  // TODO: extract into function
  let site = url.hostname;
  let config = await loadServiceConfig(url);

  if (config === undefined) {
    noData(site);
    return;
  }

  let has2FA = config.tfa;
  if (!has2FA) {
    tfaNotSupported(site);
    return;
  }

  tfaSupported(site, config);
}

function noData(site: string) {
  console.log('No data found for this site: %s', site);
  // Update the browser action button to indicate
  // no data found for this domain. Eventually, allow
  // someone to create an entry for it
}

function tfaNotSupported(site: string) {
  console.log('%s DOES NOT support 2FA!', site);
  // Update the browser action button to indicate
  // that this site does not support 2FA. Allow them
  // to tweet, etc.
}


function tfaSupported(site: string, config: SERVICE_CONFIG) {
  let docsUrl = config.doc;
  let message = '';

  if (docsUrl) {
    console.log('%s DOES support 2FA and DOES have docs! Woo :)', site);
    message = 'Click here for info on how to enable it!';
  } else {
    console.log('%s DOES support 2FA, but DOES NOT have docs! Boo :(', site);
    message = 'Check their website for info on how to enable it.';
  }

  let options = {
    title: site + ' supports 2FA!',
    message: message
  };

  if (shouldShowNotification(site)) {
    popNotification(options, config);
  }
}
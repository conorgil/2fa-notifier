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
  showBrowserActionIconForNo2faSupport();
}

function tfaNotSupported(site: string) {
  console.log('%s DOES NOT support 2FA!', site);
  showBrowserActionIconForNo2faSupport();
}

function tfaSupported(site: string, config: SERVICE_CONFIG) {
  showBrowserActionIconFor2faSupport();
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

async function showBrowserActionIconFor2faSupport() {
  await browser.browserAction.setIcon({
    path: {
      '16': 'icons/yes_2fa.png',
      '32': 'icons/yes_2fa@2x.png',
      '48': 'icons/yes_2fa@3x.png'
    }
  });
  return;
}

async function showBrowserActionIconForNo2faSupport() {
  await browser.browserAction.setIcon({
    path: {
      '16': 'icons/no_2fa.png',
      '32': 'icons/no_2fa@2x.png',
      '48': 'icons/no_2fa@3x.png'
    }
  });
  return;
}
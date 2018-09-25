import { browser } from 'webextension-polyfill-ts';
import { popNotification } from './notifications';
import { loadOriginConfig, OriginConfig } from '../utils/dataService';
import { StorageService } from '../utils/storageService';
import { userAlreadyEnabled2faOnSite } from '../utils';

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

export async function processUrl(url: URL) {
  // TODO: extract into function
  let config = await loadOriginConfig(url);

  if (config === undefined) {
    await noData(url);
    return;
  }

  let has2FA = config.tfa;
  if (!has2FA) {
    await tfaNotSupported(url);
    return;
  }

  await tfaSupported(url, config);
}

async function noData(url: URL) {
  console.log('No data found for this site: %s', url.hostname);
  await showBrowserActionIconForNo2faSupport();
}

async function tfaNotSupported(url: URL) {
  console.log('%s DOES NOT support 2FA!', url.hostname);
  await showBrowserActionIconForNo2faSupport();
}

async function tfaSupported(url: URL, config: OriginConfig) {
  showBrowserActionIconFor2faSupport();
  
  let hostname = url.hostname;
  let docsUrl = config.doc;
  let message = '';

  if (docsUrl) {
    console.log('[tfaSupported] %s DOES support 2FA and DOES have docs! Woo :)', hostname);
    message = 'Click here for info on how to enable it!';
  } else {
    console.log('[tfaSupported] %s DOES support 2FA, but DOES NOT have docs! Boo :(', hostname);
    message = 'Check their website for info on how to enable it.';
  }

  let options = {
    title: hostname + ' supports 2FA!',
    message: message
  };

  if (await shouldShowNotification(url)) {
    popNotification(url, options, config);
  } else {
    console.log('[tfaSupported] Skipping notification for %s', hostname);
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

/**
 * Return true if we should pop a notification for the
 * current site; otherwise, false.
 * 
 * @param url The URL of the site the user is currently visiting.
 */
export async function shouldShowNotification(url: URL) {
  if (await userAlreadyEnabled2faOnSite(url)) {
    return false;
  }

  if (await notificationWasShownRecently(url)) {
    return false;
  }

  return true;
}

/**
 * Return true if a notification for the current origin
 * was already shown within the last 24 hours.
 */
async function notificationWasShownRecently(url: URL) {
  let siteSettings = await StorageService.getOrCreateSiteSettings(url); 
  if (!siteSettings.previousNotificationTimestamp) {
    return false;
  }

  let lastShown = new Date(siteSettings.previousNotificationTimestamp).getTime();
  if (Date.now() - lastShown > DAY_IN_MILLISECONDS) {
    return false;
  }

  console.log('[shouldShowNotification] Notification was already shown for %s at %s', url.hostname, siteSettings.previousNotificationTimestamp);
  return true;
}
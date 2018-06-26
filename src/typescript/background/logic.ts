import { browser } from 'webextension-polyfill-ts';
import { popNotification } from './notifications';
import { loadServiceConfig, SERVICE_CONFIG } from '../utils/dataService';
import { StorageService } from '../utils/storageService';

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

export async function processUrl(url: URL) {
  // TODO: extract into function
  let site = url.hostname;
  let config = await loadServiceConfig(url);

  if (config === undefined) {
    await noData(site);
    return;
  }

  let has2FA = config.tfa;
  if (!has2FA) {
    await tfaNotSupported(site);
    return;
  }

  await tfaSupported(site, config);
}

async function noData(site: string) {
  console.log('No data found for this site: %s', site);
  await showBrowserActionIconForNo2faSupport();
}

async function tfaNotSupported(site: string) {
  console.log('%s DOES NOT support 2FA!', site);
  await showBrowserActionIconForNo2faSupport();
}

async function tfaSupported(site: string, config: SERVICE_CONFIG) {
  showBrowserActionIconFor2faSupport();
  let docsUrl = config.doc;
  let message = '';

  if (docsUrl) {
    console.log('[tfaSupported] %s DOES support 2FA and DOES have docs! Woo :)', site);
    message = 'Click here for info on how to enable it!';
  } else {
    console.log('[tfaSupported] %s DOES support 2FA, but DOES NOT have docs! Boo :(', site);
    message = 'Check their website for info on how to enable it.';
  }

  let options = {
    title: site + ' supports 2FA!',
    message: message
  };

  if (await shouldShowNotification(site)) {
    popNotification(site, options, config);
  } else {
    console.log('[tfaSupported] Skipping notification for %s', site);
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
 * @param site The site the user is currently visiting
 */
export async function shouldShowNotification(site: string) {
  if (await userAlreadyEnabled2faOnSite(site)) {
    return false;
  }

  if (await notificationWasShownRecently(site)) {
    return false;
  }

  return true;
}

/**
 * Returns true if the user has previously indicated that they
 * have already enabled 2FA on the given origin.
 * 
 */
async function userAlreadyEnabled2faOnSite(site: string): Promise<boolean> {
  let originSettings = await StorageService.getOrCreateSiteSettings(site); 
  if (originSettings.is2faEnabled) {
    console.log('[shouldShowNotification] User already enabled 2FA for %s', site);
    return true;
  }
  return false;
}

/**
 * Return true if a notification for the current origin
 * was already shown within the last 24 hours.
 */
async function notificationWasShownRecently(site: string) {
  let siteSettings = await StorageService.getOrCreateSiteSettings(site); 
  if (!siteSettings.previousNotificationTimestamp) {
    return false;
  }

  let lastShown = new Date(siteSettings.previousNotificationTimestamp).getTime();
  if (Date.now() - lastShown > DAY_IN_MILLISECONDS) {
    return false;
  }

  console.log('[shouldShowNotification] Notification was already shown for %s at %s', site, siteSettings.previousNotificationTimestamp);
  return true;
}
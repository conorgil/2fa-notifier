import { browser } from 'webextension-polyfill-ts';
import { OriginConfig } from '../utils/dataService';
import { StorageService } from '../utils/storageService';

type NOTIFICATION_CONTEXT = OriginConfig;

const NOTIFICATION_ID_TO_CONTEXT: { [notificationId: string]: NOTIFICATION_CONTEXT } = {};

export async function popNotification(url: URL, options: { title: string; message: string; }, config: NOTIFICATION_CONTEXT) {
  let notificationId = await browser.notifications.create(
    {
      type: 'basic',
      // TODO: update to use the icon for this service from twofactorauth.org?
      iconUrl: browser.extension.getURL('icons/notification_icon_80.png'),
      title: options.title,
      message: options.message
    }
  );

  NOTIFICATION_ID_TO_CONTEXT[notificationId] = config;
  console.log('notification id = %s', notificationId);

  let settings = await StorageService.getOrCreateSiteSettings(url) || {};
  settings.previousNotificationTimestamp = new Date().toISOString();
  await StorageService.setSiteSettings(url, settings);
}

browser.notifications.onClicked.addListener(function onNotificationClicked(notificationId) {
  console.log('Notification clicked: %s', notificationId);
  let config = getAndClearContext(notificationId);
  
  if (config && config.doc) {
    let docsUrl = config.doc;
    console.log('Load docs from: %s', docsUrl);
    browser.tabs.create({
      url: docsUrl
    });
  } else {
    // no config OR no docs
    console.log('No config OR no docs!');
  }
});

browser.notifications.onClosed.addListener(function onNotificationClosed(notificationId, byUser) {
  console.log('Notification with id %s closed byUser? %s', notificationId, byUser);
  getAndClearContext(notificationId);
});

function getAndClearContext(notificationId: string) : NOTIFICATION_CONTEXT {
  let config = NOTIFICATION_ID_TO_CONTEXT[notificationId];
  delete NOTIFICATION_ID_TO_CONTEXT[notificationId];
  return config;
}
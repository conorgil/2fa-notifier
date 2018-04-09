import { browser } from 'webextension-polyfill-ts';
import { SERVICE_CONFIG } from '../../utils/dataService';

type NOTIFICATION_CONTEXT = SERVICE_CONFIG;

const NOTIFICATION_ID_TO_CONTEXT: { [notificationId: string]: NOTIFICATION_CONTEXT } = {};

export async function popNotification(options: { title: string; message: string; }, config: NOTIFICATION_CONTEXT) {
  let url = new URL(config.url);
  
  let notificationId = await browser.notifications.create(
    {
      type: 'basic',
      // TODO: update to use the icon for this service from twofactorauth.org?
      iconUrl: browser.extension.getURL("icons/2fan_40px.png"),
      title: options.title,
      message: options.message
    }
  );

  NOTIFICATION_ID_TO_CONTEXT[notificationId] = config;
  console.log('notification id = %s', notificationId);
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
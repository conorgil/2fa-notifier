import { browser, Runtime, Tabs } from 'webextension-polyfill-ts';
import { handleRuntimeInstalledEvent } from './eventHandlers';
import { processUrl } from './logic';

// ========== MESSAGE HANDLERS ==========

/**
 * Handle messages from browser.runtime.onMessage().
 * 
 * The content script will send a message to the
 * background script anytime it is loaded into a
 * page. Anytime the background script receives a
 * message, it should grab the current URL from the
 * Tab and send it off for processing.
 * 
 * Yes, there is an API that can determine URL changes
 * from just the background script, but this "just works"
 * and can always be changed later. The goal right now
 * is to get something working as quickly as possible
 * in both Chrome AND Firefox.
 */
async function handleRuntimeMessage(
  msg: any,
  sender:  Runtime.MessageSender
) {
  let tab = sender.tab;
  
  console.log(
    '[tabId = %s][background_script:onMessage][%s] URL = %s',
    tab.id,
    Date.now(),
    tab.url
  );

  let url = new URL(tab.url);
  processUrl(url);
};
browser.runtime.onMessage.addListener(handleRuntimeMessage);

browser.runtime.onInstalled.addListener(handleRuntimeInstalledEvent);
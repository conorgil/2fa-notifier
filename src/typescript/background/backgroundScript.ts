import { browser, Tabs } from 'webextension-polyfill-ts';
import { handleRuntimeInstalledEvent } from './eventHandlers';
import { processUrl } from './logic';

browser.tabs.onUpdated.addListener(processCurrentTab);
browser.tabs.onActivated.addListener(processCurrentTab);

async function processCurrentTab() {
  let tabs = await browser.tabs.query({
    active: true,
    currentWindow: true
  });

  if (tabs && tabs.length) {
    let currentTab = tabs[0];
    let url = new URL(currentTab.url);
    processUrl(url);
  }
}

browser.runtime.onInstalled.addListener(handleRuntimeInstalledEvent);
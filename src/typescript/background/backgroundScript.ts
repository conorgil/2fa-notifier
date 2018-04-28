import { browser } from 'webextension-polyfill-ts';
import { handleRuntimeInstalledEvent } from './eventHandlers';
import { processUrl } from './logic';
import { getCurrentTab } from '../utils';

browser.tabs.onUpdated.addListener(processCurrentTab);
browser.tabs.onActivated.addListener(processCurrentTab);

async function processCurrentTab() {
  let currentTab = await getCurrentTab();

  if (currentTab) {
    let url = new URL(currentTab.url);
    processUrl(url);
  }
}

browser.runtime.onInstalled.addListener(handleRuntimeInstalledEvent);
import { browser, Tabs } from 'webextension-polyfill-ts';
import { handleRuntimeInstalledEvent } from './eventHandlers';
import { processUrl } from './logic';
import { getCurrentTab } from '../utils';

const STATUS_COMPLETE = 'complete';

browser.tabs.onUpdated.addListener(async function (tabId: number, changeInfo: Tabs.OnUpdatedChangeInfoType, tab: Tabs.Tab) {
  let currentTab = await getCurrentTab();
  if (tabId === currentTab.id && changeInfo.status === STATUS_COMPLETE) {
    console.log('[background_script:tabs.onUpdated] tab %d status complete', tabId);
    processTab(currentTab);
  }
});

browser.tabs.onActivated.addListener(async function(activeInfo: Tabs.OnActivatedActiveInfoType) {
  let currentTab = await getCurrentTab();
  console.log('[background_script:tabs.onActivated] tab %d activated', currentTab.id);
  processTab(currentTab);
});

function processTab(tab: Tabs.Tab) {
  let url = new URL(tab.url);
  processUrl(url); 
}

browser.runtime.onInstalled.addListener(handleRuntimeInstalledEvent);
import { browser, Tabs } from "webextension-polyfill-ts";
import { SERVICE_CONFIG, loadServiceConfig } from "./utils/dataService";

export async function getCurrentTab(): Promise<Tabs.Tab> {
  let tabs = await browser.tabs.query({
    active: true,
    currentWindow: true
  });

  if (tabs && tabs.length) {
    return tabs[0];
  }
  return null;
}

export async function getConfigForCurrentTab(): Promise<SERVICE_CONFIG> {
  let currentTab = await getCurrentTab();
  if (!currentTab) {
    return null;
  }

  let currentUrl = currentTab.url;
  let config = await loadServiceConfig(new URL(currentUrl));
  if (!config) {
    return null;
  }

  return config;
}
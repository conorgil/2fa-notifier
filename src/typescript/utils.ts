import { browser, Tabs } from "webextension-polyfill-ts";
import { OriginConfig, loadOriginConfig } from "./utils/dataService";
import { StorageService } from "./utils/storageService";

/**
 * Return the active tab in the current window, or null
 * if it is undefined.
 */
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

/**
 * Return the 2FA configuration data for the origin loaded
 * in the current tab, or null if it is undefined.
 */
export async function getConfigForCurrentTab(): Promise<OriginConfig> {
  let currentTab = await getCurrentTab();
  if (!currentTab) {
    return null;
  }

  let currentUrl = currentTab.url;
  let config = await loadOriginConfig(new URL(currentUrl));
  if (!config) {
    return null;
  }

  return config;
}

/**
 * Look up the current tab and inject the current
 * hostname into the page on the element with the
 * given ID.
 * 
 * @param id The ID of the span where the current site
 *           name should be written.
 */
export async function showCorrectSiteName(id: string) {
  let tab = await getCurrentTab();
  if (!tab) { return; }

  let url = new URL(tab.url);
  let site = url.hostname;
  document.getElementById(id).textContent = site;
}

/**
 * Returns true if the user has previously indicated that they
 * have already enabled 2FA on the given site.
 * 
 * @param url The URL of the current site
 */
export async function userAlreadyEnabled2faOnSite(url: URL): Promise<boolean> {
  let originSettings = await StorageService.getOrCreateSiteSettings(url); 
  if (originSettings.is2faEnabled) {
    console.log('[shouldShowNotification] User already enabled 2FA for %s', url.hostname);
    return true;
  }
  return false;
}

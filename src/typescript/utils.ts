import { browser, Tabs } from "webextension-polyfill-ts";
import { SERVICE_CONFIG, loadServiceConfig } from "./utils/dataService";
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
 * have already enabled 2FA on the given hostname.
 * 
 * @param site The hostname of the current site
 */
// TODO: Change site from string to URL so that callers do not
//       need to guess which string value to pass in.
//       "Is is the hostname? origin? something else?"
export async function userAlreadyEnabled2faOnSite(site: string): Promise<boolean> {
  let originSettings = await StorageService.getOrCreateSiteSettings(site); 
  if (originSettings.is2faEnabled) {
    console.log('[shouldShowNotification] User already enabled 2FA for %s', site);
    return true;
  }
  return false;
}
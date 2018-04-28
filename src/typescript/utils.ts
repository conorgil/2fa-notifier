import { browser, Tabs } from "webextension-polyfill-ts";

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

import { browser } from "webextension-polyfill-ts";

const SITE_SETTINGS = 'SITE_SETTINGS';

export interface SiteSettingsType {
  is2faEnabled?: boolean;
  previousNotificationTimestamp?: string;
}

interface SiteSettingsMapType {
  [hostname: string]: SiteSettingsType;
}

export class StorageService {
  private static async getOrCreateAllSiteSettings(): Promise<SiteSettingsMapType> {
    let results = await browser.storage.local.get(SITE_SETTINGS);
    // console.log('[getOrCreateAllSiteSettings] %O ', results);
    if (!results[SITE_SETTINGS]) {
      return {};
    }
    return results[SITE_SETTINGS];
  }

  private static async setAllSiteSettings(settings: SiteSettingsMapType) {
    // console.log('[setAllSiteSettings] %O ', settings);
    await browser.storage.local.set({ [SITE_SETTINGS]: settings });
  }

  static async getOrCreateSiteSettings(url: URL): Promise<SiteSettingsType> {
    let hostname = url.hostname;
    let allSiteSettings = await this.getOrCreateAllSiteSettings();
    if (!allSiteSettings[hostname]) {
      return {};
    }

    return allSiteSettings[hostname];
  }

  static async setSiteSettings(url: URL, settings: SiteSettingsType) {
    let hostname = url.hostname;
    let allSiteSettings = await this.getOrCreateAllSiteSettings();
    if (!allSiteSettings) {
      return;
    }

    allSiteSettings[hostname] = settings;
    await this.setAllSiteSettings(allSiteSettings);
  }
}
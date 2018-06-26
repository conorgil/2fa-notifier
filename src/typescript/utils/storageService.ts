import { browser } from "webextension-polyfill-ts";
import { getCurrentTab } from "../utils";

const SITE_SETTINGS = 'SITE_SETTINGS';

export interface SiteSettingsType {
  is2faEnabled?: boolean;
  previousNotificationTimestamp?: string;
}

interface SiteSettingsMapType {
  [origin: string]: SiteSettingsType;
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

  static async getOrCreateSiteSettings(site: string): Promise<SiteSettingsType> {
    let allOriginSettings = await this.getOrCreateAllSiteSettings();
    if (!allOriginSettings[site]) {
      return {};
    }

    return allOriginSettings[site];
  }

  static async setSiteSettings(site: string, settings: SiteSettingsType) {
    let allOriginSettings = await this.getOrCreateAllSiteSettings();
    if (!allOriginSettings) {
      return;
    }

    allOriginSettings[site] = settings;
    await this.setAllSiteSettings(allOriginSettings);
  }
}
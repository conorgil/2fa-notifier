import { browser } from 'webextension-polyfill-ts';
import { loadServiceConfig } from '../utils/dataService';

async function main() {
  let tabs = await browser.tabs.query({
    active: true,
    currentWindow: true
  });
  
  if (tabs) {
    let activeTab = tabs[0];
    let url = new URL(activeTab.url);
    console.log('active tab url = %s', url);

    let config = await loadServiceConfig(url);
    if (config && config.tfa) {
      console.log('DOES support 2FA');
      window.location.href = '../browserAction/supports2FA.html';
    }
  }
}

main();
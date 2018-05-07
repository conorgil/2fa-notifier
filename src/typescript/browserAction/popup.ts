import { browser } from 'webextension-polyfill-ts';
import { loadServiceConfig } from '../utils/dataService';
import { getConfigForCurrentTab, showCorrectSiteName } from '../utils';

async function main() {
  let config = await getConfigForCurrentTab();
  if (config && config.tfa) {
    window.location.href = '../browserAction/supports2FA.html';
    return;
  }

  await showCorrectSiteName('siteName');
}

main();
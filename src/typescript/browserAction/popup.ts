import {
  getConfigForCurrentTab,
  userAlreadyEnabled2faOnSite,
  getCurrentTab
} from '../utils';

/**
 * Redirects the current page 
 */
async function redirectPage() {
  let tab = await getCurrentTab();
  let currentUrl = new URL(tab.url);

  let is2faAlreadyEnabled = await userAlreadyEnabled2faOnSite(currentUrl);
  if (is2faAlreadyEnabled) {
    window.location.href = '../browserAction/previouslyEnabled2FA.html';
    return;
  }

  let config = await getConfigForCurrentTab();
  if (config && config.tfa) {
    window.location.href = '../browserAction/supports2FA.html';
    return;
  }

  window.location.href = '../browserAction/doesNotSupport2FA.html';
}

redirectPage();
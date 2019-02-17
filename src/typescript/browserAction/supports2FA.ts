import { getConfigForCurrentTab, getCurrentTab, showCorrectSiteName } from '../utils';
import { StorageService } from '../utils/storageService';

const CLASS_HIDDEN = 'hidden';

document.addEventListener("DOMContentLoaded", onDomContentLoaded);
async function onDomContentLoaded() {
  let more2faInfoButton = document.getElementById('more2faInfoButton');
  more2faInfoButton.addEventListener('click', async function onClickedMore2faInfoButton() {
    more2faInfoButton.classList.toggle(CLASS_HIDDEN);

    let methodsInfo = document.querySelector('.methods');
    methodsInfo.classList.toggle(CLASS_HIDDEN);
  });

  let alreadyEnabledLink = document.getElementById('alreadyEnabled2fa');
  alreadyEnabledLink.addEventListener('click', async function onClickedAlreadyEnabled2fa() {
    let tab = await getCurrentTab();
    let url = new URL(tab.url);
    console.log('User indicated that they already enabled 2FA on %s', url.hostname);
    let settings = await StorageService.getOrCreateSiteSettings(url);
    settings.is2faEnabled = true;
    await StorageService.setSiteSettings(url, settings);

    window.location.href = '../browserAction/confirmation.html';
    return;
  });

  await showCorrect2faMethods();
  await showCorrectSiteName('siteName');
  await setupCorrectDocLink();
}

async function showCorrect2faMethods() {
  let config = await getConfigForCurrentTab();

  if (!config.sms) {
    hideElementById('sms');
  }

  if (!config.phone) {
    hideElementById('phone');
  }

  if (!config.email) {
    hideElementById('email');
  }

  if (!config.software) {
    hideElementById('software');
  }

  if (!config.hardware) {
    hideElementById('hardware');
  }
}

/**
 * Hide an element by adding the 'hide' class to its classList.
 * 
 * @param methodId The id of the element to hide.
 */
function hideElementById(methodId: string) {
  let elToHide = document.getElementById(methodId);
  elToHide.classList.add(CLASS_HIDDEN);
}

/**
 * Show an element by removing the 'hide' class from its classList.
 * 
 * @param methodId The id of the element to show.
 */
function showElementById(methodId: string) {
  let elToShow = document.getElementById(methodId);
  elToShow.classList.remove(CLASS_HIDDEN);
}

async function setupCorrectDocLink() {
  let config = await getConfigForCurrentTab();
  if (!config) {
    return;
  }

  if (config.doc) {
    let el = document.getElementById('cta-btn');
    el.setAttribute('href', config.doc);
    return;
  }

  await showCorrectSiteName('nameOfSiteWith2faAndNoDocs');
  await hideElementById('cta-btn');
  await hideElementById('more2faInfoButton');
  await showElementById('missingDocs');
}
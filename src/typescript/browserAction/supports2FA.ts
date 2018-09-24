import * as $ from 'jquery';
import { getConfigForCurrentTab, getCurrentTab, showCorrectSiteName } from '../utils';
import { StorageService } from '../utils/storageService';

$(async function () {
  let originalWindowHeight = $(document).height();

  $('#more2faInfoButton').click(function () {
    if ($('.methods').css('display') === 'none') {
      $('.methods').toggle();
      //$('html').css('height', originalWindowHeight);
      $('#more2faInfoButton').addClass('methods__info-btn--hide');
      //console.log($('.methods').css('display'));
      //console.log('original window height = ' + originalWindowHeight);
    }
  });

  $('#alreadyEnabled2fa').click(async function () {
    let tab = await getCurrentTab();
    let site = new URL(tab.url).hostname;
    console.log('User indicated that they already enabled 2FA on %s', site);
    let settings = await StorageService.getOrCreateSiteSettings(site);
    settings.is2faEnabled = true;
    await StorageService.setSiteSettings(site, settings);

    window.location.href = '../browserAction/confirmation.html';
    return;
  });

  await showCorrect2faMethods();
  await showCorrectSiteName('siteName');
  await setupCorrectDocLink();
});

async function showCorrect2faMethods() {
  let config = await getConfigForCurrentTab();

  if (!config.sms) {
    hide2faMethod('sms');
  }

  if (!config.phone) {
    hide2faMethod('phone');
  }

  if (!config.email) {
    hide2faMethod('email');
  }

  if (!config.software) {
    hide2faMethod('software');
  }

  if (!config.hardware) {
    hide2faMethod('hardware');
  }
}

function hide2faMethod(method: string) {
  $(`#${method}`).toggle(false);
}

async function setupCorrectDocLink() {
  let config = await getConfigForCurrentTab();
  if (!config) {
    return;
  }

  if (config.doc) {
    $('#cta-btn').attr('href', config.doc);
    return;
  }

  await showCorrectSiteName('nameOfSiteWith2faAndNoDocs');
  $('#cta-btn').toggle(false);
  $('#missingDocs').toggle();
}
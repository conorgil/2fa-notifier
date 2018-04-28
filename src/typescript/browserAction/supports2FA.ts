import * as $ from 'jquery';
import { getCurrentTab } from '../utils';
import { loadServiceConfig } from '../utils/dataService';

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

  await showCorrect2faMethods();
});

async function showCorrect2faMethods() {
  let currentTab = await getCurrentTab();
  if (!currentTab) { return; }

  let currentUrl = currentTab.url;
  let config = await loadServiceConfig(new URL(currentUrl));
  if (!config) { return; }

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
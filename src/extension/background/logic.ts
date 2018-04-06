import { browser } from 'webextension-polyfill-ts';
import { doesSupport2fa } from '../../utils/util';

const DOMAINS = {};

export function processUrl(url: URL) {
  // TODO: extract into function
  let origin = url.origin;
  if (doesSupport2fa(url)) {
    console.log('%s DOES support 2FA!', url.origin);
    browser.notifications.create({
      type: 'basic',
      iconUrl: browser.extension.getURL("icons/tfb38.png"),
      title: url.hostname + ' supports 2FA!',
      message: 'Click this notification to go to the 2FA docs.'
    });
  } else {
    console.log('%s DOES NOT support 2FA!', url.origin);
  }

  // TODO do something with this event
  /**
   * if the user was notified of this domain at some point in the past
   *    do nothing and return
   * 
   * if this domain DOES support 2FA
   *    pop notification
   *    
   */

}
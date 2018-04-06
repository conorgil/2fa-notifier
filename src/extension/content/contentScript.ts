import { browser } from 'webextension-polyfill-ts';

// ========== MAIN ==========
async function main(): Promise<void> {
  // Send message to the background script
  // so that the background script knows
  // that an HTTPS page just loaded and it
  // should do some stuff.
  return await browser.runtime.sendMessage('PAGE_LOADED');
}

main();
import { browser } from 'webextension-polyfill-ts';

/**
 * Handle runtime.onInstalled event
 *  
 * @param details 
 * TODO: update param to type Runtime.OnInstalledDetailsType
 */
export function handleRuntimeInstalledEvent(details: any) {
  console.log(details.reason);

  switch (details.reason) {
    case 'install':
      return handleExtensionInstalledEvent(details);
    case 'update':
      return handleExtensionUpdatedEvent(details);
    case 'browser_update':
    case 'chrome_update':
      return handleBrowserUpdatedEvent(details);
    case 'shared_module_update':
      return handleSharedModuleUpdatedEvent(details);
    default:
      console.log('Unknown runtime.OnInstalledReason: %s', details.reason);
  }
}

function handleExtensionInstalledEvent(details: any) {
  console.log('[background_script:handleExtensionInstalled] Details = %O', details);
}

function handleExtensionUpdatedEvent(details: any) {
  console.log('[background_script:handleExtensionUpdated] Details = %O', details);
}

function handleBrowserUpdatedEvent(details: any) {
  console.log('[background_script:handleBrowserUpdated] Details = %O', details);
}

function handleSharedModuleUpdatedEvent(details: any) {
  console.log('[background_script:handleSharedModuleUpdated] Details = %O', details);
}
import { showCorrectSiteName, getConfigForCurrentTab } from '../utils';

/**
 * Update the anchor tag with the given id
 * to link to the doc URL for the current
 * tab, if it exists.
 * 
 * @param id The id of the anchor tag whose href should
 *           be updated to the doc URL.
 */
// TODO: this should be in utils.ts
async function setupDocLink(id: string) {
  let config = await getConfigForCurrentTab();
  if (!config) {
    return;
  }

  if (config.doc) {
    let a = document.getElementById(id) as HTMLAnchorElement;
    if (a) {
      a.href = config.doc;
    }
    return;
  }
}

async function main() {
  await showCorrectSiteName('siteName');
  await setupDocLink('docLink');
}

main();
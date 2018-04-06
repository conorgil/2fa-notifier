import { TWOFACTORAUTHORG_DATA } from '../utils/data';

export function doesSupport2fa(url: URL): boolean {
  return TWOFACTORAUTHORG_DATA[url.origin] !== undefined;
}
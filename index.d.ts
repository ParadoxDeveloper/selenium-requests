import * as utils from './dist/src/utils/utils';
import { WebDriver } from 'selenium-webdriver';

declare module 'selenium-requests' {
  export let driver: WebDriver;
/**
 * Creates a new chromedriver.
 */
 export function createDriver(): void;
/**
 *
 * @param url [string] - The origin url.
 * @param title [string] - Window title.
 */
export function setOrigin(url: string, title: string): void;
/**
 * Closes the web driver
 */
export function closeDriver(): void;
/**
 * Creates a new request.
 * @param url [string]
 * @param method [requestType]
 * @param headers [object]
 * @param data [string]
 */
export function request(url: string, method: utils.requestType, headers: object, data: string): void;
//# sourceMappingURL=index.d.ts.map
}

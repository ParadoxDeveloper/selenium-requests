import * as utils from './utils/utils';
import { createBuilder } from './utils/driver';
import { WebDriver } from 'selenium-webdriver';

export let driver: WebDriver;

/**
 * Creates a new chromedriver.
 */
export function createDriver() {
  createBuilder().then(r => {
    driver = r;
  })
}

/**
 * 
 * @param url [string] - The origin url.
 * @param title [string] - Window title.
 */

export function setOrigin(url:string, title:string) {
  utils.setOrigin(driver, url, title)
}

/**
 * Closes the web driver
 */
export function closeDriver() {
  utils.closeDriver(driver);
}

/**
 * Creates a new request.
 * @param url [string]
 * @param method [requestType]
 * @param headers [object]
 * @param data [string]
 */

export function request(url: string, method: utils.requestType, headers: object, data: string) {
  utils.request(driver, url, method, headers, data)
}

import { readFileSync } from 'node:fs';
import { WebDriver } from 'selenium-webdriver'

export type requestType = 'post' | 'get'

export function closeDriver(driver: WebDriver) {
  driver.close();
}

export function setOrigin(driver: WebDriver, url?:string, title?:string) {
  driver.executeScript(`history.replaceState(null, arguments[1], arguments[0])`, url, title)
}

export function request(driver: WebDriver, url:string, method:requestType, headers:object, data:string) {
  return driver.executeScript(readFileSync('./request.js').toString(), url, method, headers, data)
}
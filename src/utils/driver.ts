import * as selenium from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export async function createBuilder(userAgent?:string) {
  let opts = new chrome.Options()
    .headless()
    opts.addArguments('--disable-web-security');
    opts.addArguments('--no-sandbox');
  if (userAgent) {
    opts.addArguments(`user-agent=${userAgent}`);
  }
  const driver = await new selenium.Builder().withCapabilities(opts).build();
  return driver;
}
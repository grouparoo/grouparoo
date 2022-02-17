// to debug: PWDEBUG=1 when you run!
// to try it out: run just this file `pnpm jest ./__tests__/integration/happyPath.ts` from inside `ui-enterprise`
// for this POC, I did _not_ integrate with CI.  Details on running with ci at : https://github.com/smooth-code/jest-puppeteer#running-puppeteer-in-ci-environments

import { chromium, Browser, Page } from "playwright";
import { matchers } from "expect-playwright"; //not actually unused! gives us access to playwright matchers

import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-enterprise": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper"; // ? This needs to be imported AFTER the GROUPAROO_INJECTED_PLUGINS
const port = 12345 + (parseInt(process.env.JEST_WORKER_ID) ?? 0);
// const port = parseInt(process.env.PORT);

let browser: Browser;
let page: Page;

describe("integration", () => {
  helper.grouparooTestServerDetached({ port, truncate: true });

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  const firstName = "mario";
  const lastName = "mario";
  const email = "mario@example.com";
  const password = "P@ssw0rd";
  const companyName = "Mario Bros. Plumbing";

  let url = `http://localhost:${port}`;

  test("it renders the home page", async () => {
    await page.goto(url);
    await expect(page).toMatchText(
      "h2",
      "Sync, Segment, and Send your Product Data Everywhere"
    );
  });
  test("it loads navigation", async () => {
    await expect(page).toMatchText("#bottomNavigationMenu", /Hello/);
  });
  test("it can create the first team", async () => {
    await page.goto(`${url}/team/initialize`);
    await page.fill('[name="firstName"]', firstName);
    await page.fill('[name="lastName"]', lastName);
    await page.fill('[name="email"]', email);
    await page.fill('[name="companyName"]', companyName);
    await page.fill('[name="password"]', password);

    await page.click("button[type='submit']");
    await page.waitForNavigation();
  });
  test("I was taken to the setup page after creating the first team", () => {
    expect(page.url()).toMatch(`${url}/setup`);
  });

  test("I can sign out", () => {
    async () => {
      await page.goto(`${url}/session/sign-out`);
      await page.waitForNavigation();
      expect(page.url()).toMatch(`${url}`);
    };
  });

  test("I can sign in", async () => {
    await page.goto(`${url}/session/sign-in`);
    await page.fill('[name="email"]', email);
    await page.fill('[name="password"]', password);
    await page.click("button[type='submit']");
    await page.waitForNavigation();

    await expect(page).toMatchText("h1", "Setup Grouparoo");
  });
  test("it can change account information and see it reflected in the sidebar", async () => {
    await page.goto(`${url}/account`);
    await page.fill("#firstName", "Super Mario");
    await page.click('button[type="submit"]');
    await page.goto(`${url}/dashboard`);
    await expect(page).toMatchText(
      "#navigation-greeting",
      "Hello Super Mario "
    );
  });
});

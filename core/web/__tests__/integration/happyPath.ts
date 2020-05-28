/**
 * @jest-environment jest-environment-webdriver
 */

import * as helper from "../utils/specHelper";
let url;

declare var browser: any;
declare var by: any;
declare var until: any;

const testTimeout = 1000 * 10;

const firstName = "mario";
const lastName = "mario";
const email = "mario@example.com";
const password = "P@ssw0rd";

describe("integration", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60 * 5);

  afterAll(async () => {
    await helper.shutdown();
  });

  test(
    "it renders the home page",
    async () => {
      await browser.get(url);
      const header = await browser.findElement(by.tagName("h1")).getText();
      expect(header).toContain("Grouparoo");
    },
    testTimeout
  );

  test(
    "loads navigation",
    async () => {
      await browser.wait(
        until.elementLocated(by.id("bottomNavigationMenu")),
        1000 * 4
      );
      const menuText = await browser
        .findElement(by.id("bottomNavigationMenu"))
        .getText();
      expect(menuText).toEqual("Hello »");

      const button = await browser.findElement(by.id("bottomNavigationMenu"));
      await button.click();
    },
    testTimeout
  );

  test(
    "it can create the first team",
    async () => {
      await browser.get(`${url}/team/initialize`);
      await browser.findElement(by.name("firstName")).sendKeys(firstName);
      await browser.findElement(by.name("lastName")).sendKeys(lastName);
      await browser.findElement(by.name("email")).sendKeys(email);
      await browser.findElement(by.name("password")).sendKeys(password);

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();
    },
    testTimeout
  );

  test(
    "it can sign in",
    async () => {
      await helper.sleep(1 * 1000);

      const url = await browser.getCurrentUrl();
      expect(url).toMatch(/\/session\/sign-in/);
      await browser.get(url); // we should have been transitioned to the sign in page already, but we need to tell selenium to reload its context

      await browser.findElement(by.name("email")).sendKeys(email);
      await browser.findElement(by.name("password")).sendKeys(password);

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();

      // we should be taken to the welcome page
      await browser.wait(
        until.elementLocated(by.className("jumbotron")),
        1000 * 4
      );

      const header = await browser.findElement(by.tagName("h1")).getText();
      expect(header).toContain("Welcome");
    },
    testTimeout * 2
  );

  test(
    "it can change account information and see it reflected in the sidebar",
    async () => {
      await browser.get(`${url}/account`);
      await browser.findElement(by.id("firstName")).clear();
      await browser.findElement(by.id("firstName")).sendKeys("Super Mario");

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();

      await browser.get(`${url}/dashboard`);
      await helper.sleep(2 * 1000); // sleep to let the navigation load

      const greeting = await browser
        .findElement(by.id("navigation-greeting"))
        .getText();
      expect(greeting).toContain("Hello Super Mario");
    },
    testTimeout
  );
});

/**
 * @jest-environment jest-environment-webdriver
 */

import path from "path";
import { IntegrationSpecHelper, helper } from "@grouparoo/spec-helper";

declare var browser: any;
declare var by: any;
declare var until: any;
let env: { url: string; port: number; subProcess: any };

const projectPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "apps",
  "staging-enterprise"
);

const firstName = "mario";
const lastName = "mario";
const email = "mario@example.com";
const password = "P@ssw0rd";
const companyName = "Mario Bros. Plumbing";

describe("integration", () => {
  beforeAll(async () => {
    env = await IntegrationSpecHelper.prepareForIntegrationTest(
      projectPath,
      true
    );
  }, helper.setupTime);

  afterAll(async () => {
    await IntegrationSpecHelper.shutdown(env.subProcess);
  });

  test(
    "it renders the home page",
    async () => {
      await browser.get(env.url);
      const header = await browser.findElement(by.tagName("h2")).getText();
      expect(header).toContain(
        "Sync, Segment, and Send your Product Data Everywhere"
      );
    },
    helper.mediumTime
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
    helper.mediumTime
  );

  test(
    "it can create the first team",
    async () => {
      await browser.get(`${env.url}/team/initialize`);

      await browser.findElement(by.name("companyName")).sendKeys(companyName);

      await browser.findElement(by.name("firstName")).sendKeys(firstName);
      await browser.findElement(by.name("lastName")).sendKeys(lastName);
      await browser.findElement(by.name("email")).sendKeys(email);
      await browser.findElement(by.name("password")).sendKeys(password);

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();
    },
    helper.mediumTime
  );

  test(
    "I was taken to the setup page after creating the first team",
    async () => {
      await browser.wait(until.elementLocated(by.className("alert")));
      const url = await browser.getCurrentUrl();
      expect(url).toMatch(/\/setup/);
      await browser.get(url);
    },
    helper.mediumTime
  );

  test(
    "I can sign out",
    async () => {
      await browser.get(`${env.url}/session/sign-out`);
      await browser.wait(until.elementLocated(by.tagName("p")));
      const url = await browser.getCurrentUrl();
      expect(url).toMatch(/\//);
      await browser.get(url);
    },
    helper.mediumTime
  );

  test(
    "it can sign in",
    async () => {
      await browser.get(`${env.url}/session/sign-in`);
      await browser.wait(until.elementLocated(by.tagName("p")));

      await browser.findElement(by.name("email")).sendKeys(email);
      await browser.findElement(by.name("password")).sendKeys(password);

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();

      await browser.wait(
        until.elementLocated(by.css("[data-test-id=setupPageProgressBar]")),
        1000 * 4
      );

      const header = await browser
        .findElement(by.tagName("h1"), 4000)
        .getText();
      expect(header).toContain("Setup Grouparoo");
    },
    helper.longTime
  );

  test(
    "it can change account information and see it reflected in the sidebar",
    async () => {
      await browser.get(`${env.url}/account`);
      await browser.findElement(by.id("firstName")).clear();
      await browser.findElement(by.id("firstName")).sendKeys("Super Mario");

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();
      await helper.sleep(1 * 1000);

      await browser.get(`${env.url}/dashboard`);

      const element = await browser.wait(
        until.elementLocated(by.id("navigation-greeting")),
        10000
      );

      const greeting = await element.getText();
      expect(greeting).toContain("Hello Super Mario");
    },
    helper.mediumTime
  );
});

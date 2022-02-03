/**
 * @jest-environment jest-environment-webdriver
 */

import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-enterprise": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";

const port = 12345 + (parseInt(process.env.JEST_WORKER_ID) ?? 0);
declare var browser: any;
declare var by: any;
declare var until: any;
const url = `http://localhost:${port}`;

const firstName = "mario";
const lastName = "mario";
const email = "mario@example.com";
const password = "P@ssw0rd";
const companyName = "Mario Bros. Plumbing";

describe("integration", () => {
  helper.grouparooTestServerDetached({ port, truncate: true });

  test(
    "it renders the home page",
    async () => {
      await browser.get(url);
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
      expect(menuText).toEqual("Hello");

      const button = await browser.findElement(by.id("bottomNavigationMenu"));
      await button.click();
    },
    helper.mediumTime
  );

  test(
    "it can create the first team",
    async () => {
      await browser.get(`${url}/team/initialize`);

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
      await browser.wait(until.elementLocated(by.id("setup")));
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual(`${url}/setup`);
    },
    helper.mediumTime
  );

  test(
    "I can sign out",
    async () => {
      await browser.get(`${url}/session/sign-out`);
      await browser.wait(until.elementLocated(by.tagName("p")));
      await helper.sleep(1000 * 2);
      const currentURL = await browser.getCurrentUrl();
      expect(currentURL).toEqual(`${url}/`);
    },
    helper.mediumTime
  );

  test(
    "it can sign in",
    async () => {
      await browser.get(`${url}/session/sign-in`);
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
      await browser.get(`${url}/account`);
      await browser.wait(until.elementLocated(by.id("firstName")), 1000 * 4);

      await browser.findElement(by.id("firstName")).clear();
      await browser.findElement(by.id("firstName")).sendKeys("Super Mario");

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();
      await helper.sleep(1 * 1000);

      await browser.get(`${url}/dashboard`);

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

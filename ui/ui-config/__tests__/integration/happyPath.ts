/**
 * @jest-environment jest-environment-webdriver
 */

import path from "path";
import os from "os";
import axios from "axios";
import { IntegrationSpecHelper, helper } from "@grouparoo/spec-helper";

const workerId = process.env.JEST_WORKER_ID;
const configDir = `${os.tmpdir()}/test/${workerId}/uiConfig/config`;

declare var browser: any;
declare var by: any;
let env: { url: string; port: number; subProcess: any };
declare var until: any;

const projectPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "apps",
  "staging-community"
);

describe("integration", () => {
  beforeAll(async () => {
    env = await IntegrationSpecHelper.prepareForIntegrationTest(
      projectPath,
      false,
      { GROUPAROO_RUN_MODE: "cli:config", GROUPAROO_CONFIG_DIR: configDir }
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
      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();
    },
    helper.mediumTime
  );
  test(
    "it signs in a ConfigUser",
    async () => {
      await browser.wait(until.elementLocated(by.name("company")));
      await browser.findElement(by.name("company")).sendKeys("demo company");
      await browser
        .findElement(by.name("email"))
        .sendKeys("test@grouparoo.com");

      const button = await browser.findElement(by.className("btn-primary"));
      await button.click();
    },
    helper.mediumTime
  );
  test(
    "it redirects to setup steps after registering",
    async () => {
      await browser.wait(until.elementLocated(by.id("setup")));
      const url = await browser.getCurrentUrl();
      expect(url).toMatch(/\/setup/);
      await browser.get(url);
    },
    helper.mediumTime
  );
  test(
    "visiting '/' after login displays a link to setup steps",
    async () => {
      await browser.get(`${env.url}/`);
      await browser.wait(until.elementLocated(by.className("btn-primary")));
      const button = browser.findElement(by.className("btn-primary"));
      const buttonText = await button.getText();
      expect(buttonText).toEqual("Set Up Grouparoo");

      await button.click();
    },
    helper.mediumTime
  );

  test(
    "it redirects to setup steps after clicking setup button",
    async () => {
      await browser.get(`${env.url}/`);
      await browser.wait(until.elementLocated(by.className("btn-primary")));
      const button = browser.findElement(by.className("btn-primary"));
      await button.click();

      await browser.wait(until.elementLocated(by.id("setup")));
      const url = await browser.getCurrentUrl();
      expect(url).toMatch(/\/setup/);
      await browser.get(url);
    },
    helper.mediumTime
  );
});

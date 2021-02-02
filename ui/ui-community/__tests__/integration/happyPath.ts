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
  "staging-community"
);

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
});

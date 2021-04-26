/**
 * @jest-environment jest-environment-webdriver
 */

import path from "path";
import { IntegrationSpecHelper, helper } from "@grouparoo/spec-helper";

declare var browser: any;
declare var by: any;
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
      const header = await browser.findElement(by.tagName("h1")).getText();
      expect(header).toContain("Grouparoo");
    },
    helper.mediumTime
  );
});

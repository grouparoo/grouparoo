/**
 * @jest-environment jest-environment-webdriver
 */

import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-community": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";

const port = 12345 + (parseInt(process.env.JEST_WORKER_ID) ?? 0);
declare var browser: any;
declare var by: any;
declare var until: any;
const url = `http://localhost:${port}`;

describe("integration", () => {
  helper.grouparooTestServerDetached({ port });

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
    "can render a page with a form",
    async () => {
      await browser.get(url + "/session/sign-in");
      const header = await browser.findElement(by.tagName("h1")).getText();
      expect(header).toContain("Sign In");
    },
    helper.mediumTime
  );
});

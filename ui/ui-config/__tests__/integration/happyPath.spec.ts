import { test, expect } from "@playwright/test";
import { BrowserContext, Page } from "playwright";
import { helper } from "@grouparoo/spec-helper";

import SignInPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/session/sign-in";

import fs from "fs";
import os from "os";

const projectDir = `${os.tmpdir()}/test/${
  process.env.TEST_WORKER_INDEX ?? 1
}/uiConfig/config`;
process.env.GROUPAROO_RUN_MODE = "cli:config";
process.env.GROUPAROO_CONFIG_DIR = `${projectDir}/config`;

let serverProcess;
const port = 30000 + parseInt(process.env.TEST_WORKER_INDEX ?? "0");

test.beforeAll(async () => {
  fs.rmSync(projectDir, { recursive: true, force: true });

  serverProcess = await helper.startGrouparooTestServerDetached({
    port: port,
    truncate: true,
    runMode: "cli:config",
  });
});

test.afterAll(async () => {
  await helper.stopGrouparooTestServerDetached(serverProcess);
});

test.describe("login and initialization flow", () => {
  const email = "mario@example.com";
  const companyName = "Mario Bros. Plumbing";

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context: BrowserContext = await browser.newContext();
    page = await context.newPage();
  });

  test.afterAll(async () => {
    await page.context().close();
  });

  test("it renders the homepage", async () => {
    await page.goto("/");

    await expect(page.locator("h2")).toHaveText(
      "Sync, Segment, and Send your Product Data Everywhere"
    );
    await Promise.all([
      page.locator(".btn-primary").click(),
      page.waitForNavigation({ url: `/session/sign-in` }),
    ]);
  });

  test("it signs in a configUser", async () => {
    const signInPage = new SignInPageObject(page);
    await signInPage.navigate();
    await signInPage.fillAndSubmit({ email, companyName });
    await page.waitForNavigation({ url: "/setup" });
  });

  test("visiting '/' after login displays a link to the setup steps", async () => {
    await page.goto("/");
    await expect(page.locator(".btn-primary")).toHaveText("Set Up Grouparoo");
    await Promise.all([
      page.locator(".btn-primary").click(),
      page.waitForNavigation({ url: `/setup` }),
    ]);
  });
});

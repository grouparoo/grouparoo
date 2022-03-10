import { test, expect } from "@playwright/test";
import { BrowserContext, Page } from "playwright";
import { helper } from "@grouparoo/spec-helper";

import TeamAccountPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/account";
import InitializePageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/team/initialize";
import SignInPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/session/sign-in";

let serverProcess;
const port = 30000 + parseInt(process.env.TEST_WORKER_INDEX ?? "0");

test.beforeAll(async () => {
  serverProcess = await helper.startGrouparooTestServerDetached({
    port,
    truncate: true,
  });
});

test.afterAll(async () => {
  await helper.stopGrouparooTestServerDetached(serverProcess);
});

test.describe("login and initialization flow", () => {
  const firstName = "mario";
  const lastName = "mario";
  const email = "mario@example.com";
  const password = "P@ssw0rd";
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
    await expect(page.locator("#bottomNavigationMenu")).toContainText("Hello");
    await Promise.all([
      page.locator('[data-testid="cta"]').click(),
      page.waitForNavigation({ url: `/team/initialize` }),
    ]);
  });

  test("it can initialize the first team", async () => {
    const teamInitializePage = new InitializePageObject(page);
    await teamInitializePage.navigate();
    await teamInitializePage.fillAndSubmit({
      companyName,
      firstName,
      lastName,
      email,
      password,
    });

    await page.waitForNavigation();
    expect(page.locator("text=Setup")).toBeTruthy();
  });

  test("I can sign out", async () => {
    await page.goto(`/session/sign-out`);
    await page.waitForNavigation({ url: "/" });
  });

  test("I can sign in", async () => {
    const signInPage = new SignInPageObject(page);
    await signInPage.navigate();
    await signInPage.fillAndSubmit({ email, password });
    await page.waitForNavigation({ url: "/setup" });
  });

  test("I can change account information and see it reflected in the sidebar", async () => {
    const updatedName = "Super Mario";
    const accountPage = new TeamAccountPageObject(page);
    await accountPage.navigate();
    await accountPage.fillAndSubmit({ firstName: updatedName });

    await expect(page.locator("#navigation-greeting")).toContainText(
      `Hello ${updatedName} `
    );
  });
});

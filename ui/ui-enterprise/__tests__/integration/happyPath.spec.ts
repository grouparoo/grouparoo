import { test, expect } from "@playwright/test";
import { BrowserContext, Page } from "playwright";
import { helper } from "@grouparoo/spec-helper";

import AccountPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/account";
import InitializePageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/team/initialize";
import SignInPageObject from "@grouparoo/ui-components/__tests__/__pageObjects__/session/sign-in";

let serverProcess;

test.beforeAll(async () => {
  serverProcess = await helper.startGrouparooTestServerDetached({
    port: 3100,
    truncate: true,
  });
  console.log("beforeAll");
});

test.afterAll(async () => {
  await helper.stopGrouparooTestServerDetached(serverProcess);
});

test.describe("login and initialization flow", () => {
  console.log("inside describe");
  const port = 3100;

  const firstName = "mario";
  const lastName = "mario";
  const email = "mario@example.com";
  const password = "P@ssw0rd";
  const companyName = "Mario Bros. Plumbing";

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context: BrowserContext = await browser.newContext({
      baseURL: `http://localhost:${port}`,
    });
    page = await context.newPage();
    console.log("beforeAll inside describe");
  });
  test.afterAll(async ({ browser }) => {
    browser.close();
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
    await teamInitializePage.fill({
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
    await signInPage.fill({ email, password });
    await page.waitForNavigation({ url: "/setup" });
  });
  test("I can change account information and see it reflected in the sidebar", async () => {
    const updatedName = "Super Mario";
    const accountPage = new AccountPageObject(page);
    await accountPage.navigate();
    await accountPage.fill({ firstName: updatedName });

    await expect(page.locator("#navigation-greeting")).toContainText(
      `Hello ${updatedName} `
    );
  });
});

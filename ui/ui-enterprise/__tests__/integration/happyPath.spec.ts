import { test, expect } from "@playwright/test";
import { BrowserContext, Page } from "playwright";
import { helper } from "@grouparoo/spec-helper";

let serverProcess;

test.beforeAll(async () => {
  serverProcess = await helper.startGrouparooTestServerDetached({
    port: 3100,
    truncate: true,
  });
});

test.afterAll(async () => {
  await helper.stopGrouparooTestServerDetached(serverProcess);
});

test.describe("login and initialization flow", () => {
  const port = 3100;
  const url = `http://localhost:${port}`;

  // TODO: update spechelper to play nicely with playwright
  // helper.grouparooTestServerDetached({ port, truncate: true }); TODO: this is set up to use jest.
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
  test.afterAll(async ({ browser }) => {
    browser.close();
  });

  test("it renders the homepage", async () => {
    await page.goto(url);

    await expect(page.locator("h2")).toHaveText(
      "Sync, Segment, and Send your Product Data Everywhere"
    );
    await expect(page.locator("#bottomNavigationMenu")).toContainText("Hello");
    await Promise.all([
      page.waitForNavigation({ url: `${url}/team/initialize` }),
      page.locator('[data-testid="cta"]').click(),
    ]);
    // form loads on button click
    expect(page.locator('input[name="companyName"]')).toBeTruthy();
  });

  test("it can initialize the first team", async () => {
    await page.locator('input[name="companyName"]').fill(companyName);
    await page.locator('input[name="firstName"]').fill(firstName);
    await page.locator('input[name="lastName"]').fill(lastName);
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button:has-text("Submit")').click();
    await page.waitForNavigation();
    expect(page.locator("text=Setup")).toBeTruthy();
  });
  test("I can sign out", async () => {
    await page.goto(`${url}/session/sign-out`);
    await page.waitForNavigation();
    expect(page.url()).toEqual(`${url}/`);
  });
  test("I can sign in", async () => {
    await page.goto(`${url}/session/sign-in/`);
    await page.locator('input[name="email"]').fill(email);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('button:has-text("Sign In")').click();

    await page.waitForNavigation();
    expect(page.url()).toEqual(`${url}/setup`);
  });
  test("I can change account information and see it reflected in the sidebar", async () => {
    await page.goto(`${url}/account`);
    await page.locator("#firstName").fill("Super Mario");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator("#navigation-greeting")).toContainText(
      "Hello Super Mario "
    );
  });
});

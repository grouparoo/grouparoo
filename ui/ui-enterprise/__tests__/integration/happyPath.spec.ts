// import { test, expect, Page } from "@playwright/test";

// test.describe("a user can", () => {
//   test("login and view homepage", async ({ page }) => {
//     await page.goto("http://localhost:3000");
//     await expect(page.locator("h2")).toHaveText(
//       "Sync, Segment, and Send your Product Data Everywhere"
//     );
//   });
// });

import { test, expect, Browser } from "@playwright/test";
import { BrowserContext, Page } from "playwright";

test.describe("login and initialization flow", () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    const context: BrowserContext = await browser.newContext();
    page = await context.newPage();
    await page.goto("http://localhost:3000/");
  });
  test.afterAll(async ({ browser }) => {
    browser.close();
  });

  test("it renders the homepage", async () => {
    await expect(page.locator("h2")).toHaveText(
      "Sync, Segment, and Send your Product Data Everywhere"
    );
    await expect(page.locator("#bottomNavigationMenu")).toContainText("Hello");
    await Promise.all([
      page.waitForNavigation({ url: "http://localhost:3000/team/initialize" }),
      page.locator('[data-testid="cta"]').click(),
    ]);
    // form loads on button click
    expect(page.locator('input[name="companyName"]')).toBeTruthy();
  });

  test("it can initialize the first team", async () => {
    await page.locator('input[name="companyName"]').click();
    await page
      .locator('input[name="companyName"]')
      .fill("Mario Bros. Plumbing");
    await page.locator('input[name="firstName"]').click();
    await page.locator('input[name="firstName"]').fill("mario");
    await page.locator('input[name="firstName"]').press("Tab");
    await page.locator('input[name="lastName"]').fill("mario");
    await page.locator('input[name="firstName"]').dblclick();
    await page.locator('input[name="lastName"]').click({
      clickCount: 3,
    });
    await page.locator('input[name="lastName"]').fill("mario");
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill("mario@example.com");
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill("P@ssw0rd");
    await page.locator('input[name="subscribed"]').uncheck();
    await Promise.all([page.locator('button:has-text("Submit")').click()]);

    //form was submitted, now we are on setup steps
    await expect(page.locator("text=Setup")).toBeTruthy();
  });
  // test("it ")
  // // Click button:has-text("Hello mario")
  // await page.locator('button:has-text("Hello mario")').click();

  // // Click text=Sign Out
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
  //   page.locator("text=Sign Out").click(),
  // ]);

  // // Click [data-testid="cta"]
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'http://localhost:3000/session/sign-in' }*/),
  //   page.locator('[data-testid="cta"]').click(),
  // ]);

  // // Fill [placeholder="Email\ Address"]
  // await page.locator('[placeholder="Email\\ Address"]').fill("mario@example.com");

  // // Press Tab
  // await page.locator('[placeholder="Email\\ Address"]').press("Tab");

  // // Fill [placeholder="Password"]
  // await page.locator('[placeholder="Password"]').fill("P@ssw0rd");

  // // Click text=Email AddressEmail is requiredPasswordA password is requiredSign In >> button
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'http://localhost:3000/setup' }*/),
  //   page
  //     .locator(
  //       "text=Email AddressEmail is requiredPasswordA password is requiredSign In >> button"
  //     )
  //     .click(),
  // ]);

  // // Go to http://localhost:3000/account
  // await page.goto("http://localhost:3000/account");

  // // Double click #firstName
  // await page.locator("#firstName").dblclick();

  // // Fill #firstName
  // await page.locator("#firstName").fill("Super Mario");

  // // Click button:has-text("Update")
  // await page.locator('button:has-text("Update")').click();
});

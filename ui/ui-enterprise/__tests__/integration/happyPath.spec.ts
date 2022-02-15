import { test, expect, Page } from "@playwright/test";

test.describe("a user can", () => {
  test("login and view homepage", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page.locator("h2")).toHaveText(
      "Sync, Segment, and Senb your Product Data Everywhere"
    );
  });
});

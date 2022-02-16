// /**
//  * @jest-environment puppeteer
//  */

import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-enterprise": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";

import "expect-puppeteer";
const firstName = "mario";
const lastName = "mario";
const email = "mario@example.com";
const password = "P@ssw0rd";
const companyName = "Mario Bros. Plumbing";

const port = 3000;
const url = `http://localhost:${port}`;

// describe("Google", () => {
//   beforeAll(async () => {
//     await page.goto("https://google.com");
//   });

//   it('should display "google" text on page', async () => {
//     await expect(page).toMatch("google");
//   });
// });

describe("integration", () => {
  test("it renders the homepage", async () => {
    await page.goto(url);
    await expect(page).toMatch(
      "Sync, Segment, and Send your Product Data Everywhere"
    );
  });
  test("it loads navigation", async () => {
    await expect(page).toMatch("Hello");
    //todo: can we test that the navigation opens/collapses and items are hidden?
    await page.click("#bottomNavigationMenu button");
  });
  test("it can create the first team", async () => {
    await page.goto(`${url}/team/initialize`);
  });
});

// /**
//  * @jest-environment puppeteer
//  */

import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-enterprise": { path: path.join(__dirname, "..", "..") },
});
import { helper } from "@grouparoo/spec-helper";
import { expect as jExpect } from "@jest/globals";

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
    await expect(page).toMatchElement("#bottomNavigationMenu", {
      text: "Hello",
    });
    await page.click("#bottomNavigationMenu button");
  });

  test("it can create the first team", async () => {
    await page.goto(`${url}/team/initialize`);

    await expect(page).toFillForm("#form", {
      firstName,
      lastName,
      companyName,
      email,
      password,
    });
    await expect(page).toClick('button[type="submit"]');
    await page.waitForNavigation();
  });
  test("it takes me to setup after I submit the form", async () => {
    //a little funky to integrate both the jest expects and the puppeteer expects but doable!
    jExpect(page.url()).toEqual(`${url}/setup`);
  });
  test.skip("it can sign out", async () => {
    await expect(page).toClick("button", { text: "Hello mario" });
    page.waitForNavigation();

    await expect(page).toClick("button", { text: "Sign Out" });
  });
});

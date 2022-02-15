// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";

export class PageObject {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly coreConceptsLink: Locator;
  readonly tocList: Locator;
  readonly editTab: Locator;
  readonly newSourceButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.getStartedLink = page.locator('text=Get started');
    // this.coreConceptsLink = page.locator('text=Core concepts');
    // this.tocList = page.locator('article ul > li > a');
    this.editTab = page.locator("text=Edit");

    // Model Details
    this.newSourceButton = page.locator("text=Add new Source");

    // Sample Record

    // Destinations
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.coreConceptsLink).toBeVisible();
  }

  async coreConcepts() {
    await this.getStarted();
    await this.page.click("text=Guides");
    await this.coreConceptsLink.click();
    await expect(
      this.page.locator("h1").locator("text=Core concepts")
    ).toBeVisible();
  }
}

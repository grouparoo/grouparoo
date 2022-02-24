import { Page } from "playwright";

export default class AccountPageObject {
  constructor(readonly page: Page) {}

  async navigate() {
    await this.page.goto("/account");
  }

  async fill({ firstName }: { firstName: string }) {
    await this.page.locator("#firstName").fill(firstName);
    await this.page.locator('button[type="submit"]').click();
  }
}

import { Page } from "playwright";

export default class SignInPageObject {
  constructor(readonly page: Page) {}

  async navigate() {
    await this.page.goto("/session/sign-in");
  }

  async fill({
    email,
    password,
    companyName,
  }: {
    email: string;
    password?: string;
    companyName?: string;
  }) {
    await this.page.locator('input[name="email"]').fill(email);
    if (password) {
      await this.page.locator('input[name="password"]').fill(password);
      await this.page.locator('button:has-text("Sign In")').click();
    }

    if (companyName) {
      await this.page.locator('input[name="company"]').fill(companyName);
      await this.page.locator('button:has-text("Register")').click();
    }
  }
}

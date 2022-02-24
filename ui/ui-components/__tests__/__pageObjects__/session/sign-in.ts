import { Page } from "playwright";

export default class SignInPageObject {
  constructor(readonly page: Page) {}

  async navigate() {
    await this.page.goto("/session/sign-in");
  }

  async fill({ email, password }: { email: string; password: string }) {
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('button:has-text("Sign In")').click();
  }
}

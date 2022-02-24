import { Page } from "playwright";

export default class InitializePageObject {
  constructor(readonly page: Page) {}

  async navigate() {
    await this.page.goto("/team/initialize");
  }

  async fill({
    companyName,
    firstName,
    lastName,
    email,
    password,
  }: {
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    await this.page.locator('input[name="companyName"]').fill(companyName);
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('button:has-text("Submit")').click();
  }
}

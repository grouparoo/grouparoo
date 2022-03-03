import { Page } from "playwright";
import PageObject from "../PageObject";

export default class SignInPageObject extends PageObject {
  constructor(page: Page) {
    super(page, "/session/sign-in");
  }

  async fillAndSubmit({
    email,
    password,
    companyName,
  }: {
    email: string;
    password?: string;
    companyName?: string;
  }) {
    await this.fillTextInputs({ email });

    if (password) {
      await this.fillTextInputs({ password });
      return await this.clickAsyncButton<void>(
        { text: "Sign In" },
        "**/session"
      );
    } else if (companyName) {
      await this.fillTextInputs({ company: companyName });
      return await this.clickAsyncButton<void>(
        { text: "Register" },
        "**/config/user"
      );
    }
  }
}

import { Page } from "playwright";
import PageObject from "./PageObject";

export default class TeamAccountPageObject extends PageObject {
  constructor(page: Page) {
    super(page, "/account");
  }

  async fillAndSubmit({ firstName }: { firstName: string }) {
    await this.fillTextInputs(
      {
        firstName,
      },
      "id"
    );

    return await this.clickAsyncButton<void>({ text: "Update" }, "**/account");
  }
}

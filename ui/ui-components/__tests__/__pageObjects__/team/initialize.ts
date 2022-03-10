import { Page } from "playwright";
import PageObject from "../PageObject";

export default class InitializeTeamPageObject extends PageObject {
  constructor(page: Page) {
    super(page, "/team/initialize");
  }

  async fillAndSubmit(formValuesByName: {
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    await this.fillTextInputs(formValuesByName);
    return await this.clickAsyncButton<void>({ text: "Submit" }, "**/session");
  }
}

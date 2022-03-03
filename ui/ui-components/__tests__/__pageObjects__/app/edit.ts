import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooApp } from "../types";

export default class EditAppPageObject extends PageObject {
  constructor(page: Page, readonly appId: string) {
    super(page, `/app/${appId}/edit`);
  }

  async fillName(name: string) {
    await this.fillTextInputs({ name });
  }

  async clickTestConnection() {
    return await this.clickAsyncButton<void>(
      { text: "Test Connection" },
      `**/app/${this.appId}/test`
    );
  }

  async clickSave() {
    return await this.clickAsyncButton<{ app: GrouparooApp }>(
      { text: "Update" },
      `**/app/${this.appId}`
    );
  }
}

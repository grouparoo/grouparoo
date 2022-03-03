import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooDestination } from "../types";

export default class EditDestinationPage extends PageObject {
  constructor(
    page: Page,
    readonly modelId: string,
    readonly destinationId: string
  ) {
    super(page, `/model/${modelId}/destination/${destinationId}/edit`);
  }

  async clickSave() {
    return await this.clickAsyncButton<{ destination: GrouparooDestination }>(
      { text: "Update" },
      `**/destination/${this.destinationId}`
    );
  }

  async fillName(name: string) {
    return await this.fillTextInputs({ name }, "id");
  }
}

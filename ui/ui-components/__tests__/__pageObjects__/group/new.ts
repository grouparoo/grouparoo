import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooGroup } from "../types";

export default class NewGroupPageObject extends PageObject {
  constructor(page: Page, readonly modelId: string) {
    super(page, `/model/${modelId}/group/new`);
  }

  async fillAndSave({ name }: { name: string }) {
    await this.fillTextInputs({ name });

    return await this.clickAsyncButton<{ group: GrouparooGroup }>(
      { text: "Submit" },
      "**/group"
    );
  }
}

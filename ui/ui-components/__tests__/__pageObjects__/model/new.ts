import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooModel } from "../types";

export default class NewModelPageObject extends PageObject {
  constructor(page: Page) {
    super(page, "/model/new");
  }

  async fillAndSave({ name, type }: { name: string; type?: string }) {
    await this.fillTextInputs({ name });
    await this.selectOptions({ type });

    return await this.clickAsyncButton<{ model: GrouparooModel }>(
      { text: "Submit" },
      "**/model"
    );
  }
}

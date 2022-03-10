import { Page } from "playwright";
import PageObject from "../PageObject";
import { Property } from "../types";

export default class SourceOverviewPageObject extends PageObject {
  constructor(page: Page, readonly modelId: string, readonly sourceId: string) {
    super(page, `/model/${modelId}/source/${sourceId}/overview`);
  }

  async clickAddProperty() {
    return await this.clickAsyncButton<{ property: Property }>(
      { text: "Add Property" },
      "**/property"
    );
  }

  async clickAddMultipleProperties() {
    await this.clickButton({ text: "Add Multiple Properties" });
  }
}

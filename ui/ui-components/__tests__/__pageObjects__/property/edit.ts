import { Page } from "playwright";
import PageObject from "../PageObject";
import { Property } from "../types";

type PropertyType =
  | "boolean"
  | "date"
  | "email"
  | "float"
  | "integer"
  | "phoneNumber"
  | "string"
  | "url";

export default class EditPropertyPageObject extends PageObject {
  constructor(
    page: Page,
    readonly modelId: string,
    readonly sourceId: string,
    readonly propertyId: string
  ) {
    super(
      page,
      `/model/${modelId}/source/${sourceId}/property/${propertyId}/edit`
    );
  }

  async fill({
    key,
    type,
    settings,
  }: {
    key: string;
    type: PropertyType;
    settings?: { unique?: boolean; isArray: boolean };
  }) {
    await this.fillTextInputs({ key }, "id");

    await this.selectOptions(
      {
        type,
      },
      "id"
    );

    if (settings) {
      const { unique = false, isArray = false } = settings;
      await this.setInputChecked("unique", unique, "id");
      await this.setInputChecked("isArray", isArray, "id");
    }
  }

  async clickSave() {
    return await this.clickAsyncButton<{ property: Property }>(
      { text: "Update" },
      `**/property/${this.propertyId}`
    );
  }
}

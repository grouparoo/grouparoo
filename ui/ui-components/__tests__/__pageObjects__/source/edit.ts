import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooSource } from "../types";

const toSourceOptionsInputNames = (valuesByInputName: Record<string, string>) =>
  Object.keys(valuesByInputName).reduce((acc, key) => {
    acc[`source\\.options\\.${key}`] = valuesByInputName[key];
    return acc;
  }, {} as Record<string, string>);

export default class EditSourcePageObject extends PageObject {
  constructor(
    page: Page,
    readonly modelId: string,
    readonly sourceId: string,
    readonly appType: string
  ) {
    super(page, `/model/${modelId}/source/${sourceId}/edit`);
  }

  async clickSave() {
    return await this.clickAsyncButton<{ source: GrouparooSource }>(
      { text: "Update" },
      `**/source/${this.sourceId}`
    );
  }

  async fillName(name: string) {
    return await this.fillTextInputs({ "source\\.name": name });
  }

  async fillSourceOptionsTextInputs(valuesByInputName: Record<string, string>) {
    return await this.fillTextInputs(
      toSourceOptionsInputNames(valuesByInputName)
    );
  }

  async selectSourceOptions(valuesByInputName: Record<string, string>) {
    return await this.selectOptions(
      toSourceOptionsInputNames(valuesByInputName)
    );
  }

  async selectMappingSourceColumn(value: string) {
    return await this.selectOptions({ "mapping\\.sourceColumn": value });
  }
}

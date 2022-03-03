import { Page } from "playwright";
import PageObject, { SelectOptionValue } from "../PageObject";
import { GrouparooDestination } from "../types";

export default class DestinationDataPage extends PageObject {
  constructor(
    page: Page,
    readonly modelId: string,
    readonly destinationId: string
  ) {
    super(page, `/model/${modelId}/destination/${destinationId}/data`);
  }

  async clickSave() {
    return await this.clickAsyncButton<{ destination: GrouparooDestination }>(
      { text: "Save Destination Data" },
      `**/destination/${this.destinationId}`
    );
  }

  async fillName(name: string) {
    return await this.fillTextInputs({ name }, "id");
  }

  async selectCollection(value: SelectOptionValue) {
    await this.selectOptions(
      {
        destination_select_collection: value,
      },
      "id"
    );
  }

  async selectRequiredMappings(valuesByKey: Record<string, SelectOptionValue>) {
    await this.selectOptions(
      Object.keys(valuesByKey).reduce((acc, key) => {
        acc[`destination_select_required_mapping_${key}`] = valuesByKey[key];
        return acc;
      }, {}),
      "id"
    );
  }

  async selectKnownMappings(valuesByKey: Record<string, SelectOptionValue>) {
    await this.selectOptions(
      Object.keys(valuesByKey).reduce((acc, key) => {
        acc[`destination_select_known_mapping_${key}`] = valuesByKey[key];
        return acc;
      }, {}),
      "id"
    );
  }
}

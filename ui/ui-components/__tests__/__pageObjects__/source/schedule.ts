import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooSchedule } from "../types";

export default class SourceSchedulePageObject extends PageObject {
  constructor(page: Page, readonly modelId: string, readonly sourceId: string) {
    super(page, `/model/${modelId}/source/${sourceId}/schedule`);
  }

  async fillRecurringFrequency(minutes: number | string) {
    await this.fillTextInputs(
      {
        recurringFrequencyMinutes: minutes.toString(),
      },
      "id"
    );
  }

  async clickSave() {
    return await this.clickAsyncButton<{ schedule: GrouparooSchedule }>(
      {
        text: "Update",
      },
      `**/schedule/*`
    );
  }
}

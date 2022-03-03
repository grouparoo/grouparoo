import { Page } from "playwright";
import PageObject from "../PageObject";

export default class ModelOverviewPageObject extends PageObject {
  constructor(page: Page, readonly modelId: string) {
    super(page, `/model/${modelId}/overview`);
  }

  async clickCreatePrimarySource() {
    await this.clickButton({ text: "Create Primary Source" });
  }

  async clickAddNewGroup() {
    await this.clickButton({ text: "Add new Group" });
  }

  async clickAddNewDestination() {
    await this.clickButton({ text: "Add new Destination" });
  }

  async clickRunAllSchedules() {
    return await this.clickAsyncButton<void>(
      { text: "Run all Schedules" },
      "**/schedules/run"
    );
  }
}

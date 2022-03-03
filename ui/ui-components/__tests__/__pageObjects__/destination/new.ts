import { Page, errors } from "playwright";
import PageObject from "../PageObject";
import { GrouparooDestination } from "../types";

export default class NewDestinationPageObject extends PageObject {
  constructor(page: Page, readonly modelId: string) {
    super(page, `/model/${modelId}/destination/new`);
  }

  async clickApp({ type, appId }: { type: string; appId: string }) {
    return await this.clickAsyncButton<{ destination: GrouparooDestination }>(
      { id: `applist__${type}_${appId}_card` },
      "**/destination"
    );
  }

  async clickNewApp() {
    try {
      // When there are 0 apps
      // Will go to the /apps page, and then we click Add app
      await this.clickButton({ text: "Add an App" });
      await this.page.waitForNavigation({ url: "/apps" });
      await this.clickButton({ text: "Add App" });
    } catch (error) {
      if (error instanceof errors.TimeoutError) {
        // when there are apps already created:
        await this.click({ id: "applist__new_app_card" });
      } else {
        throw error;
      }
    }
  }
}

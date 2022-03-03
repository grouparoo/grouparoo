import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooApp } from "../types";

export default class NewAppPageObject extends PageObject {
  constructor(page: Page) {
    super(page, `/app/new`);
  }

  async clickApp({ type }: { type: string }) {
    return await this.clickAsyncButton<{ app: GrouparooApp }>(
      { id: `applist__${type}_card` },
      "**/app"
    );
  }

  async clickNewApp() {
    await this.click({ id: "new_app_link" });
  }
}

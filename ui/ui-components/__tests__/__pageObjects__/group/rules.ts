import { Page } from "playwright";
import PageObject from "../PageObject";
import { GrouparooGroup } from "../types";

export default class GroupRulesPageObject extends PageObject {
  constructor(page: Page, readonly modelId: string, readonly groupId: string) {
    super(page, `/model/${modelId}/group/${groupId}/rules`);
  }

  async clickAddRule() {
    await this.clickButton({ text: "Add Rule" });
  }
  async fillRule(
    groupRuleIndex: number,
    {
      property,
      operation,
      match,
    }: {
      property: string;
      operation: string;
      match: string;
    }
  ) {
    await this.selectOptions(
      {
        [`rule_key_${groupRuleIndex}`]: property,
        [`rule_operation_${groupRuleIndex}`]: operation,
      },
      "id"
    );

    await this.page.fill(
      `#rule_operation_group_${groupRuleIndex} input[type="text"]`,
      match
    );
  }

  async clickSave() {
    const response = await this.clickAsyncButton<{ group: GrouparooGroup }>(
      { text: "Save Rules" },
      `**/group/${this.groupId}`
    );

    // Page is force reloaded after save. We have to wait for that, too.
    await this.waitForNavigation();

    return response;
  }
}

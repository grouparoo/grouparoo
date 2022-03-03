import { Page } from "playwright";
import PageObject from "./PageObject";

export default class SampleRecordPageObject extends PageObject {
  constructor(page: Page) {
    super(page, "");
  }

  async clickImportRecord() {
    await this.clickAsyncButton<void>(
      { id: "sample_record__import_record_button" },
      "**/record/**/import"
    );
  }

  async clickExportRecord() {
    await this.clickAsyncButton<void>(
      { id: "sample_record__export_record_button" },
      "**/record/**/export"
    );
  }

  async clickSwitchRandomRecord() {
    await this.clickAsyncButton<void>(
      { id: "sample_record__switch_random_record_button" },
      "**/record/*"
    );
  }

  async clickAddRecord() {
    await this.clickButton({
      id: "sample_record__add_record_button",
    });
  }

  async clickViewRecord() {
    await this.clickButton({ id: "sample_record__view_record_button" });
  }

  async clickViewAllRecords() {
    await this.clickButton({ id: "sample_record__view_all_records_button" });
  }

  getProperties() {
    return this.page.locator("#sample_record__properties > tbody > tr");
  }

  getPropertyName(propertyId: string) {
    return this.page.locator(`#sample_record__property_name_${propertyId}`);
  }

  getPropertyValue(propertyId: string) {
    return this.page.locator(`#sample_record__property_value_${propertyId}`);
  }
}

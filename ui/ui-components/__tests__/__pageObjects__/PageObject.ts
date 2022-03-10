import { Page } from "playwright";
import { expect } from "@playwright/test";

type InputAttributeType = "id" | "name";
export type SelectOptionValue = Parameters<Page["selectOption"]>[1];

export default class PageObject {
  constructor(readonly page: Page, readonly path: string) {}

  async navigate(params: string = "") {
    const path = this.path + params;
    await Promise.all([this.page.goto(path), this.waitForNavigation(params)]);
  }

  async waitForNavigation(params: string = "") {
    return await this.page.waitForNavigation({ url: this.path + params });
  }

  protected inputLocator(key: string, attribute: InputAttributeType = "name") {
    return this.page.locator(`input[${attribute}="${key}"]`);
  }

  async fillTextInputs(
    valuesByInputKey: Record<string, string>,
    attribute?: InputAttributeType
  ) {
    for (const key in valuesByInputKey) {
      await this.inputLocator(key, attribute).fill(valuesByInputKey[key]);
    }
  }

  async setInputChecked(
    key: string,
    checked = true,
    attribute?: InputAttributeType
  ) {
    await this.inputLocator(key, attribute).setChecked(checked);
  }

  async isInputChecked(key: string, attribute?: InputAttributeType) {
    await this.inputLocator(key, attribute).isChecked();
  }

  async selectOptions(
    valuesByKey: Record<string, SelectOptionValue>,
    attribute: InputAttributeType = "name"
  ) {
    for (const key in valuesByKey) {
      await this.page
        .locator(`select[${attribute}="${key}"]`)
        .selectOption(valuesByKey[key]);
    }
  }

  protected async click({ id }: { id: string }) {
    await this.page.locator(`#${id}`).click();
  }

  protected buttonLocator({ text, id }: { text?: string; id?: string }) {
    const selector = id ? `#${id}` : `button:has-text("${text}")`;
    return this.page.locator(selector);
  }

  protected async clickButton(params: { text?: string; id?: string }) {
    await this.buttonLocator(params).click();
  }

  protected async clickAsyncButton<T>(
    buttonParams: { text?: string; id?: string },
    url: string
  ) {
    const [response] = await Promise.all([
      this.waitForValidJsonResponse<T>(url),
      this.clickButton(buttonParams),
    ]);

    return response;
  }

  protected async waitForValidJsonResponse<T>(url: string) {
    const response = await this.page.waitForResponse(url);

    const data = await response.json();

    if (data?.error) {
      console.error(`"${url}" response error:\n`, data.error);
    }

    expect(response.status(), `${url} response status`).toBe(200);

    return data as T;
  }
}

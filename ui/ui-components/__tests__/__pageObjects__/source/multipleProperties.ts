import { Page } from "playwright";
import PageObject from "../PageObject";

export default class SourceMultiplePropertiesPageObject extends PageObject {
  constructor(page: Page, readonly modelId: string, readonly sourceId: string) {
    super(page, `/model/${modelId}/source/${sourceId}/multipleProperties`);
  }
}

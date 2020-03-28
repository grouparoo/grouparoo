import { App, SimpleAppOptions } from "@grouparoo/core";
import Spreadsheet from "./sheet-import/spreadsheet";

const TEST_SHEET_ID = "abc"; // can be anything. not used for test

export async function test(app: App, options: SimpleAppOptions) {
  const sheet = new Spreadsheet(options, TEST_SHEET_ID);
  await sheet.connect();
  return true;
}

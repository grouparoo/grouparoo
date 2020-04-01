import Spreadsheet from "./spreadsheet";
import {
  App,
  Source,
  SimpleAppOptions,
  SimpleSourceOptions,
  plugin,
} from "@grouparoo/core";

// return array of "rows" of the "table"
// [ { id: 1, fname: "John", lname: "Jones" },
//   { id: 2, fname: "Jane", lname: "Smith" } ]
export async function sourcePreview(
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions
) {
  const sheet = new Spreadsheet(appOptions, sourceOptions.sheet_url || "");
  const rows = await sheet.read({ limit: 10, offset: 0 });
  return rows;
}

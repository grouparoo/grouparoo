import Spreadsheet from "./spreadsheet";
import {
  App,
  Source,
  SimpleAppOptions,
  SimpleSourceOptions,
  plugin,
} from "@grouparoo/core";

// TODO: be nice to have signature of what this should return
// pretty sure it's array of objects with header keys
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

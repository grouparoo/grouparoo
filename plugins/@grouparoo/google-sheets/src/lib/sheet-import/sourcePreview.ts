import Spreadsheet from "./spreadsheet";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
}) => {
  const sheet = new Spreadsheet(appOptions, sourceOptions.sheet_url || "");
  const rows = await sheet.read({ limit: 10, offset: 0 });
  return rows;
};

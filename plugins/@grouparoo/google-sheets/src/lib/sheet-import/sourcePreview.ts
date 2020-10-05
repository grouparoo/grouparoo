import Spreadsheet from "./spreadsheet";
import {
  SourcePreviewMethod,
  SourcePreviewMethodResponseRow,
} from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
}) => {
  return sheetPreview({ appOptions, sourceOptions });
};

export async function sheetPreview({
  appOptions,
  sourceOptions,
}): Promise<Array<SourcePreviewMethodResponseRow>> {
  const sheet = new Spreadsheet(appOptions, sourceOptions.sheet_url || "");
  const rows = await sheet.read({ limit: 10, offset: 0 });
  return rows;
}

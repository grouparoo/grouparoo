import { getSampleRows } from "../util";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  connection,
  sourceOptions,
}) => {
  return await getSampleRows(connection, sourceOptions.table);
};

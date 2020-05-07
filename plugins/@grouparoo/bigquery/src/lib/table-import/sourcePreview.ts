import { connect } from "../connect";
import { getSampleRows } from "../util";
import { SourcePreviewMethod } from "@grouparoo/core";

export const sourcePreview: SourcePreviewMethod = async ({
  appOptions,
  sourceOptions,
}) => {
  const client = await connect(appOptions);
  return await getSampleRows(client, sourceOptions.table);
};

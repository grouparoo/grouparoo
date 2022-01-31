import { RecordsPluginMethod } from "@grouparoo/core";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";
import { getRows } from "./shared/getRows";

export const importRecords: RecordsPluginMethod = async ({
  source,
  sourceId,
  sourceOptions,
  sourceMapping,
  sourceOffset,
  run,
  limit,
}) => {
  const localPath = await downloadAndRefreshFile(sourceId, sourceOptions);
  return getRows({
    localPath,
    source,
    sourceMapping,
    run,
    limit,
    sourceOffset: parseInt(String(sourceOffset)),
  });
};

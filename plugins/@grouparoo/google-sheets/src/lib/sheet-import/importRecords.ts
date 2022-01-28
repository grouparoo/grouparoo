import { RecordsPluginMethod } from "@grouparoo/core";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";
import { getRows } from "@grouparoo/csv/dist/lib/shared/getRows";

export const importRecords: RecordsPluginMethod = async ({
  source,
  sourceId,
  appOptions,
  sourceOptions,
  sourceMapping,
  run,
  limit,
  sourceOffset,
}) => {
  const localPath = await downloadAndRefreshFile(
    sourceId,
    appOptions,
    sourceOptions
  );
  return getRows({
    localPath,
    source,
    sourceMapping,
    run,
    limit,
    sourceOffset: parseInt(String(sourceOffset)),
  });
};

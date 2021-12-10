import { RecordsPluginMethod } from "@grouparoo/core";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";
import { parseProfiles } from "@grouparoo/csv/dist/lib/shared/parseProfiles";

export const records: RecordsPluginMethod = async ({
  source,
  sourceId,
  appOptions,
  sourceOptions,
  sourceMapping,
  run,
  limit,
  highWaterMark,
}) => {
  const localPath = await downloadAndRefreshFile(
    sourceId,
    appOptions,
    sourceOptions
  );
  return parseProfiles({
    localPath,
    source,
    sourceMapping,
    run,
    limit,
    highWaterMark,
  });
};

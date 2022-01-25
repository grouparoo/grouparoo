import { RecordsPluginMethod } from "@grouparoo/core";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";
import { parseProfiles } from "./shared/parseProfiles";

export const records: RecordsPluginMethod = async ({
  source,
  sourceId,
  sourceOptions,
  sourceMapping,
  sourceOffset,
  run,
  limit,
}) => {
  const localPath = await downloadAndRefreshFile(sourceId, sourceOptions);
  return parseProfiles({
    localPath,
    source,
    sourceMapping,
    run,
    limit,
    sourceOffset: parseInt(String(sourceOffset)),
  });
};

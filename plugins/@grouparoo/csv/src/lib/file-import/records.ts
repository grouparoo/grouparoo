import { plugin, RecordsPluginMethod } from "@grouparoo/core";
import { parseProfiles } from "../shared/parseProfiles";

export const records: RecordsPluginMethod = async ({
  source,
  sourceOptions,
  sourceMapping,
  run,
  limit,
  highWaterMark,
}) => {
  const fileId = sourceOptions.fileId?.toString();
  const localPath = await plugin.getLocalFilePath(fileId);
  return parseProfiles({
    localPath,
    source,
    sourceMapping,
    run,
    limit,
    highWaterMark,
  });
};

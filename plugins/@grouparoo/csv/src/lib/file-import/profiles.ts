import { plugin, ProfilesPluginMethod } from "@grouparoo/core";
import { parseProfiles } from "../shared/parseProfiles";

export const profiles: ProfilesPluginMethod = async ({
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

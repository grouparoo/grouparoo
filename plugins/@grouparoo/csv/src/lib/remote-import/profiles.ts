import { ProfilesPluginMethod } from "@grouparoo/core";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";
import { parseProfiles } from "../shared/parseProfiles";

export const profiles: ProfilesPluginMethod = async ({
  source,
  sourceId,
  sourceOptions,
  sourceMapping,
  run,
  limit,
  highWaterMark,
}) => {
  const localPath = await downloadAndRefreshFile(sourceId, sourceOptions);
  return parseProfiles({
    localPath,
    source,
    sourceMapping,
    run,
    limit,
    highWaterMark,
  });
};

import { SourceRunPercentCompleteMethod } from "@grouparoo/core";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";
import { runPercentComplete } from "../shared/runPercentComplete";

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
  run,
  sourceId,
  sourceOptions,
}) => {
  const localPath = await downloadAndRefreshFile(sourceId, sourceOptions);
  return runPercentComplete(run, localPath);
};

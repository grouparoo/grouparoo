import { SourceRunPercentCompleteMethod } from "@grouparoo/core";
import { downloadAndRefreshFile } from "./downloadAndRefreshFile";
import { runPercentComplete } from "@grouparoo/csv/dist/lib/shared/runPercentComplete";

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
  run,
  sourceId,
  appOptions,
  sourceOptions,
}) => {
  const localPath = await downloadAndRefreshFile(
    sourceId,
    appOptions,
    sourceOptions
  );
  return runPercentComplete(run, localPath);
};

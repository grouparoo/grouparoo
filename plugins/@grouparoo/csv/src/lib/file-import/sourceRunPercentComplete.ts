import { plugin, SourceRunPercentCompleteMethod } from "@grouparoo/core";
import { runPercentComplete } from "../shared/runPercentComplete";

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
  run,
  sourceOptions,
}) => {
  const fileId = sourceOptions.fileId?.toString();
  const localPath = await plugin.getLocalFilePath(fileId);
  return runPercentComplete(run, localPath);
};

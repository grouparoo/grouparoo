import { createReadStream } from "fs";
import { plugin, SourceRunPercentCompleteMethod } from "@grouparoo/core";

export const sourceRunPercentComplete: SourceRunPercentCompleteMethod = async ({
  run,
  sourceOptions,
}) => {
  const fileId = sourceOptions.fileId?.toString();
  const localPath = await plugin.getLocalFilePath(fileId);

  const total: number = await new Promise((resolve, reject) => {
    let i: number;
    let count = 0;

    // http://stackoverflow.com/questions/12453057/node-js-count-the-number-of-lines-in-a-file
    createReadStream(localPath)
      .once("error", (error) => reject(error))
      .on("data", (chunk) => {
        for (i = 0; i < chunk.length; ++i) if (chunk[i] == 10) count++;
      })
      .on("end", () => resolve(count));
  });

  const percentComplete =
    total > 0 ? Math.floor((run.profilesImported / total) * 100) : 100;

  return percentComplete;
};

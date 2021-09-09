import { Run } from "@grouparoo/core";
import { createReadStream } from "fs";

export async function runPercentComplete(run: Run, localFile: string) {
  const total: number = await new Promise((resolve, reject) => {
    let i: number;
    let count = 0;

    // http://stackoverflow.com/questions/12453057/node-js-count-the-number-of-lines-in-a-file
    createReadStream(localFile)
      .once("error", (error) => reject(error))
      .on("data", (chunk) => {
        for (i = 0; i < chunk.length; ++i) if (chunk[i] == 10) count++;
      })
      .on("end", () => resolve(count));
  });

  const percentComplete =
    total > 0 ? Math.floor((run.recordsImported / total) * 100) : 100;

  return percentComplete;
}

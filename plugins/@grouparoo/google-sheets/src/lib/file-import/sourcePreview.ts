import fs from "fs-extra";
import csvParser from "csv-parser";
import {
  App,
  Source,
  SimpleAppOptions,
  SimpleSourceOptions,
  plugin,
} from "@grouparoo/core";

export async function sourcePreview(
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions
) {
  const response = [];

  if (!sourceOptions.fileGuid) {
    return response;
  }
  const localPath = await plugin.getLocalFilePath(sourceOptions.fileGuid);
  const stream = fs.createReadStream(localPath);
  const parser = stream.pipe(csvParser());

  await new Promise((resolve, reject) => {
    parser.on("readable", () => {
      let row = parser.read();
      while (row) {
        response.push(row);
        row = parser.read();
        if (response.length >= 10) {
          stream.destroy();
          break;
        }
      }

      return resolve();
    });

    parser.on("error", reject);
  });

  return response;
}

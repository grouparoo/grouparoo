import fs from "fs-extra";
import csvParser from "csv-parser";
import { SourcePreviewMethodResponseRow } from "@grouparoo/core";

export async function previewCSV(localPath: string) {
  const response: SourcePreviewMethodResponseRow[] = [];
  const stream = fs.createReadStream(localPath);
  const parser = stream.pipe(csvParser());

  await new Promise((resolve, reject) => {
    parser.on("data", (row) => {
      if (response.length < 10) response.push(row);

      if (response.length >= 10) {
        stream.destroy();
        return resolve(null);
      }
    });

    parser.once("end", () => resolve(null));
    parser.once("close", () => resolve(null));
    parser.once("error", (error) => reject(error));
  });

  return response;
}

import fs from "fs-extra";
import csvParser from "csv-parser";
import { SourcePreviewMethodResponseRow } from "@grouparoo/core";

export async function previewCSV(localPath: string) {
  const response: Array<SourcePreviewMethodResponseRow> = [];
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

      return resolve(null);
    });

    parser.on("error", reject);
  });

  return response;
}

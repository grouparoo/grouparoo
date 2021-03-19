import fs from "fs-extra";
import csvParser from "csv-parser";
import { sleep } from "../shared/sleep";

export async function parseProfileProperties({
  localPath,
  columnName,
  mappedCSVColumn,
  primaryKeysHash,
}: {
  localPath: string;
  columnName: string;
  mappedCSVColumn: string;
  primaryKeysHash: { [pk: string]: string };
}) {
  const data = {};
  const primaryKeys = Object.keys(primaryKeysHash);
  const stream = fs.createReadStream(localPath);
  const parser = stream.pipe(csvParser());

  await new Promise((resolve, reject) => {
    parser.once("readable", async () => {
      let row = parser.read();
      while (row) {
        try {
          if (primaryKeys.includes(row[mappedCSVColumn])) {
            data[primaryKeysHash[row[mappedCSVColumn]]] = row[columnName];
          }
          await sleep(); // we need to ensure this method is async
        } catch (error) {
          return reject(error);
        }
        row = parser.read();
      }

      return resolve(null);
    });

    parser.on("error", reject);
  });

  return data;
}

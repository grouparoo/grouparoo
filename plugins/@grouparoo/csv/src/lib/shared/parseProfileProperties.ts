import fs from "fs-extra";
import csvParser from "csv-parser";

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
  const data: { [key: string]: any } = {};
  const primaryKeys = Object.keys(primaryKeysHash);
  const stream = fs.createReadStream(localPath);
  const parser = stream.pipe(csvParser());

  await new Promise((resolve, reject) => {
    parser.on("data", (row) => {
      if (primaryKeys.includes(row[mappedCSVColumn])) {
        data[primaryKeysHash[row[mappedCSVColumn]]] = [row[columnName]];
      }
    });

    parser.once("end", () => resolve(null));
    parser.once("close", () => resolve(null));
    parser.once("error", (error) => reject(error));
  });

  return data;
}

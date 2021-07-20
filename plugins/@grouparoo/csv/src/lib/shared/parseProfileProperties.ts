import fs from "fs-extra";
import csvParser from "csv-parser";

export async function parseProfileProperties({
  localPath,
  columnNameHash,
  mappedCSVColumn,
  primaryKeysHash,
}: {
  localPath: string;
  columnNameHash: { [columnName: string]: string };
  mappedCSVColumn: string;
  primaryKeysHash: { [pk: string]: string };
}) {
  const data: { [profileId: string]: { [key: string]: any } } = {};
  const columnNames = Object.keys(columnNameHash);
  const stream = fs.createReadStream(localPath);
  const parser = stream.pipe(csvParser());

  await new Promise((resolve, reject) => {
    // All columns in the row are returned as strings
    parser.on("data", (row: { [key: string]: string }) => {
      const profileId = primaryKeysHash[row[mappedCSVColumn]];
      if (!profileId) return;

      data[profileId] = {};
      for (const columnName in row) {
        if (columnNames.includes(columnName)) {
          data[profileId][columnNameHash[columnName]] = [row[columnName]];
        }
      }
    });

    parser.once("end", () => resolve(null));
    parser.once("close", () => resolve(null));
    parser.once("error", (error) => reject(error));
  });

  return data;
}

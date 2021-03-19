import fs from "fs-extra";
import csvParser from "csv-parser";
import {
  plugin,
  Source,
  SourceMapping,
  Run,
  HighWaterMark,
} from "@grouparoo/core";
import { sleep } from "../shared/sleep";

export async function parseProfiles({
  localPath,
  source,
  sourceMapping,
  run,
  limit,
  highWaterMark,
}: {
  localPath: string;
  source: Source;
  sourceMapping: SourceMapping;
  run: Run;
  limit: number;
  highWaterMark: HighWaterMark;
}) {
  // unlike a normal source in which we could fetch Profile Properties as needed, we need to be sure we get them all in one go
  let combinedMapping = Object.assign({}, sourceMapping);
  const properties = await source.$get("properties");
  for (const i in properties) {
    const property = properties[i];
    const propertyOptions = await property.getOptions();
    const propertyMapping = {};
    if (propertyOptions.column) {
      propertyMapping[propertyOptions.column?.toString()] = property.key;
      combinedMapping = Object.assign(combinedMapping, propertyMapping);
    }
  }

  const stream = fs.createReadStream(localPath);
  const parser = stream.pipe(csvParser());

  // TODO: Is there a way to scan by row numbers and start/stop the stream as needed?
  //       Scanning the whole file each time seems silly.
  let importsCount = 0;
  let rowId = -1;
  const offset = highWaterMark?.row
    ? parseInt(highWaterMark?.row.toString())
    : 0;

  await new Promise((resolve, reject) => {
    parser.once("readable", async () => {
      let row = parser.read();
      while (row) {
        rowId++;
        try {
          const inRange = rowId >= offset && rowId < offset + limit;
          if (inRange) {
            await plugin.createImport(combinedMapping, run, row);
            importsCount++;
          } else {
            await sleep(); // we need to ensure this method is async
          }
        } catch (error) {
          return reject(error);
        }
        row = parser.read();
      }

      return resolve(null);
    });

    parser.on("error", reject);
  });

  return {
    importsCount,
    highWaterMark: { row: offset + importsCount },
    sourceOffset: null,
  };
}

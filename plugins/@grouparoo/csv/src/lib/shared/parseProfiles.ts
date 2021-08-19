import fs from "fs-extra";
import csvParser from "csv-parser";
import {
  plugin,
  Source,
  SourceMapping,
  Run,
  HighWaterMark,
} from "@grouparoo/core";

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
  let rowId = -1;
  const validRows: Record<string, any>[] = [];
  const offset = highWaterMark?.row
    ? parseInt(highWaterMark?.row.toString())
    : 0;

  await new Promise((resolve, reject) => {
    parser.on("data", (row) => {
      rowId++;
      const inRange = rowId >= offset && rowId < offset + limit;
      if (inRange) validRows.push(row);
      if (rowId > offset + limit) {
        stream.destroy();
        return resolve(null);
      }
    });

    parser.once("end", () => resolve(null));
    parser.once("close", () => resolve(null));
    parser.once("error", (error) => reject(error));
  });

  await plugin.createImports(combinedMapping, run, validRows);

  return {
    importsCount: validRows.length,
    highWaterMark: { row: (offset + validRows.length).toString() },
    sourceOffset: 0,
  };
}

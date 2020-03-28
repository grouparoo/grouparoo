import fs from "fs-extra";
import csvParser from "csv-parser";
import {
  plugin,
  Schedule,
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
  SourceMapping,
  Run,
} from "@grouparoo/core";

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1);
  });
}

export async function profiles(
  schedule: Schedule,
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions,
  sourceMapping: SourceMapping,
  run: Run,
  limit: number,
  filter: { [key: string]: any },
  highWaterMark: number
) {
  let combinedMapping = sourceMapping;
  const profilePropertyRules = await source.$get("profilePropertyRules");
  for (const i in profilePropertyRules) {
    const rule = profilePropertyRules[i];
    const ruleOptions = await rule.getOptions();
    const ruleMapping = {};
    if (ruleOptions.column) {
      ruleMapping[ruleOptions.column] = rule.key;
      combinedMapping = Object.assign(combinedMapping, ruleMapping);
    }
  }

  const localPath = await plugin.getLocalFilePath(sourceOptions.fileGuid);
  const stream = fs.createReadStream(localPath);
  const parser = stream.pipe(csvParser());

  // TODO: Is there a way to scan by row numbers and start/stop the stream as needed?
  //       Scanning the whole file each time seems silly.
  let importsCount = 0;
  let rowId = -1;
  const offset = highWaterMark || 0;

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
            // we need to ensure this method is async
            await sleep();
          }
        } catch (error) {
          return reject(error);
        }
        row = parser.read();
      }

      return resolve();
    });

    parser.on("error", reject);
  });

  const nextHighWaterMark = limit + offset;
  return { importsCount, nextHighWaterMark };
}

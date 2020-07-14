import fs from "fs-extra";
import csvParser from "csv-parser";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";

async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1);
  });
}

export const profiles: ProfilesPluginMethod = async ({
  source,
  sourceOptions,
  sourceMapping,
  run,
  limit,
  sourceOffset,
}) => {
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
  const offset = sourceOffset ? parseInt(sourceOffset.toString()) : 0;

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
  return {
    importsCount,
    highWaterMark: {},
    sourceOffset: offset + importsCount,
  };
};

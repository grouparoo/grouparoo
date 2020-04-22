import { ExportProfilePluginMethod } from "@grouparoo/core";
import * as fs from "fs";
import * as path from "path";
import { config, log } from "actionhero";

export const exportProfile: ExportProfilePluginMethod = async ({
  profile,
  appOptions,
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) => {
  const filePath = path.join(config.general.paths.log[0], appOptions.filename);

  const line =
    JSON.stringify({
      time: new Date(),
      guid: profile.guid,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    }) + "\r\n";

  if (appOptions.stdout?.toString() === "true") {
    log(
      `[ logger destination ] ${newProfileProperties["primary id"]} --->  ${line}`
    );
  }

  await new Promise((resolve, reject) => {
    fs.appendFile(filePath, line, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });

  return true;
};

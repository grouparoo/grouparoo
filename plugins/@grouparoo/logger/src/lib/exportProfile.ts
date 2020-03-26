import { Profile, App, Destination, SimpleAppOptions } from "@grouparoo/core";
import * as fs from "fs";
import * as path from "path";
import { config, log } from "actionhero";

export async function exportProfile(
  destination: Destination,
  app: App,
  options: SimpleAppOptions,
  profile: Profile,
  oldProfileProperties: { [key: string]: any },
  newProfileProperties: { [key: string]: any },
  oldGroups: Array<string>,
  newGroups: Array<string>,
  toDelete: boolean
) {
  const filePath = path.join(config.general.paths.log[0], options.filename);

  const line =
    JSON.stringify({
      time: new Date(),
      profile,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    }) + "\r\n";

  if (options.stdout?.toString() === "true") {
    log(`[ logger destination ] ${line}`);
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
}

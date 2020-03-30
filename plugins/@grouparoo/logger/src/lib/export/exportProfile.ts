import {
  Profile,
  App,
  Destination,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import * as fs from "fs";
import * as path from "path";
import { config, log } from "actionhero";

export async function exportProfile(
  app: App,
  appOptions: SimpleAppOptions,
  destination: Destination,
  destinationOptions: SimpleDestinationOptions,
  profile: Profile,
  oldProfileProperties: { [key: string]: any },
  newProfileProperties: { [key: string]: any },
  oldGroups: Array<string>,
  newGroups: Array<string>,
  toDelete: boolean
) {
  const filePath = path.join(config.general.paths.log[0], appOptions.filename);

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

  if (appOptions.stdout?.toString() === "true") {
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

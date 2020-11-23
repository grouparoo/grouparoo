import { ExportProfilesPluginMethod } from "@grouparoo/core";
import * as fs from "fs";
import * as path from "path";
import { config, log } from "actionhero";

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appOptions,
  exports,
}) => {
  const filePath = path.join(config.general.paths.log[0], appOptions.filename);
  let lines = [];

  exports.map((_export) => {
    const {
      profile,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    } = _export;

    const line = JSON.stringify({
      time: new Date(),
      guid: profile.guid,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    });

    lines.push(line);
  });

  if (appOptions.stdout?.toString() === "true") {
    log(
      `exporting ${lines.length} profiles:\r\n` +
        lines.map((line) => ` ----> ${line}`).join("\r\n"),
      "notice"
    );
  }

  await new Promise((resolve, reject) => {
    fs.appendFile(filePath, lines.join("\r\n"), (error) => {
      if (error) return reject(error);
      return resolve(null);
    });
  });

  return { success: true };
};

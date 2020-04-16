import { TestPluginMethod } from "@grouparoo/core";
import * as fs from "fs";
import * as path from "path";
import { config } from "actionhero";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const filePath = path.join(config.general.paths.log[0], appOptions.filename);
  const now = new Date();
  try {
    // touch the file
    fs.utimesSync(filePath, now, now);
  } catch (err) {
    // create the file
    fs.closeSync(fs.openSync(filePath, "w"));
  }

  return true;
};

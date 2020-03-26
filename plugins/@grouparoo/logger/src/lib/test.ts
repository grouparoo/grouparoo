import { App, SimpleAppOptions } from "@grouparoo/core";
import * as fs from "fs";
import * as path from "path";
import { config } from "actionhero";

export async function test(app: App, options: SimpleAppOptions) {
  const filePath = path.join(config.general.paths.log[0], options.filename);
  const now = new Date();
  try {
    // touch the file
    fs.utimesSync(filePath, now, now);
  } catch (err) {
    // create the file
    fs.closeSync(fs.openSync(filePath, "w"));
  }

  return true;
}

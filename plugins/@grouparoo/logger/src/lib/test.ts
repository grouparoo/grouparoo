import { TestPluginMethod } from "@grouparoo/core";
import fs from "fs";
import { getFilePath } from "./utils/getFilePath";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const filePath = getFilePath(appOptions.filename?.toString());

  const now = new Date();
  try {
    // touch the file
    fs.utimesSync(filePath, now, now);
  } catch (err) {
    // create the file
    fs.closeSync(fs.openSync(filePath, "w"));
  }

  return {
    success: true,
    message: `Access to ${filePath} confirmed`,
  };
};

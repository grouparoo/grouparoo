import { ConnectPluginAppMethod } from "@grouparoo/core";
import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const formattedOptions: any = Object.assign({}, appOptions);

  if (!fs.existsSync(formattedOptions.file)) return null;

  return new sqlite3.Database(formattedOptions.file);
};

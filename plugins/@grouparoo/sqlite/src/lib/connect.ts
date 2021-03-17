import { ConnectPluginAppMethod } from "@grouparoo/core";
import fs from "fs";
import path from "path";
import { SQLite } from "./sqlite";
import { getParentPath } from "@grouparoo/core/dist/utils/pluginDetails";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const formattedOptions: any = Object.assign({}, appOptions);

  let dbPath = formattedOptions.file;

  if (!path.isAbsolute(dbPath)) dbPath = path.join(getParentPath(), dbPath);

  // Don't allow connections unless the file already exists. This avoids
  // in-memory storage and creating the file during instantiation.
  if (!fs.existsSync(dbPath) || fs.lstatSync(dbPath).isDirectory()) return null;

  const connection = new SQLite({ database: dbPath });
  await connection.asyncConnect();

  return connection;
};

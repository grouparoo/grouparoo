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
  if (dbPath === ":memory:") {
    throw new Error(`The SQLite plugin does not support in-memory database.`);
  }
  if (!fs.existsSync(dbPath) || fs.lstatSync(dbPath).isDirectory()) {
    throw new Error(`Could not find SQLite database: ${dbPath}`);
  }

  const connection = new SQLite({ database: dbPath });
  await connection.asyncConnect();

  return connection;
};

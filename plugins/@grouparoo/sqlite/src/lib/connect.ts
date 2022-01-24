import { ConnectPluginAppMethod } from "@grouparoo/core";
import { getParentPath } from "@grouparoo/core/dist/modules/pluginDetails";
import fs from "fs";
import path from "path";
import { SQLite } from "./sqlite";

export const connect: ConnectPluginAppMethod<SQLite> = async ({
  appOptions,
}) => {
  const formattedOptions: any = Object.assign({}, appOptions);

  let dbPath = formattedOptions.file;

  // Don't allow running with memory only.
  if (dbPath === ":memory:") {
    throw new Error(`The SQLite plugin does not support in-memory database.`);
  }

  if (!path.isAbsolute(dbPath)) dbPath = path.join(getParentPath(), dbPath);

  // Don't allow connections unless the file already exists. This avoids
  // creating the file during instantiation.
  if (!fs.existsSync(dbPath) || fs.lstatSync(dbPath).isDirectory()) {
    throw new Error(`Could not find SQLite database: ${dbPath}`);
  }

  const connection = new SQLite({ database: dbPath });
  await connection.asyncConnect();

  return connection;
};

import { ConnectPluginAppMethod } from "@grouparoo/core";
import fs from "fs";
import { SQLite } from "./sqlite";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const formattedOptions: any = Object.assign({}, appOptions);

  const dbPath = formattedOptions.file;

  // Don't allow connections unless the file already exists. This avoids
  // in-memory storage and creating the file during instantiation.
  if (!fs.existsSync(dbPath) || fs.lstatSync(dbPath).isDirectory()) return null;

  const connection = new SQLite({ database: dbPath });
  await connection.asyncConnect();

  return connection;
};

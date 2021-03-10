import { ConnectPluginAppMethod } from "@grouparoo/core";
import { MongoClient } from "mongodb";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const uri = appOptions.uri?.toString();
  const database = appOptions.database?.toString();
  const client = await new MongoClient(uri).connect();
  const db = client.db(database);
  return { client, db };
};

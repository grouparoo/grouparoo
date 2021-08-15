import { ConnectPluginAppMethod } from "@grouparoo/core";
import { MongoClient } from "mongodb";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const uri = appOptions.uri?.toString();
  return await new MongoClient(uri).connect();
};

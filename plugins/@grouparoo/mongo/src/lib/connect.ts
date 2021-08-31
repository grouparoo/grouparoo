import { ConnectPluginAppMethod } from "@grouparoo/core";
import { log } from "actionhero";
import { MongoClient } from "mongodb";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const uri = appOptions.uri?.toString();
  const client = await new MongoClient(uri, {
    monitorCommands: process.env.GROUPAROO_LOG_LEVEL === "debug",
  }).connect();
  client.on("commandStarted", (event) =>
    log(`[ mongo ] ${JSON.stringify(event)}`, "debug")
  );
  return client;
};

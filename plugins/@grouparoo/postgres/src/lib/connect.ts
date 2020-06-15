import { Client } from "pg";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const client = new Client(appOptions);
  await client.connect();
  return client;
};

import { Client } from "pg";
import format from "pg-format";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const client = new Client(appOptions);
  await client.connect();

  if (appOptions.schema) {
    await client.query(format(`SET search_path TO %L;`, appOptions.schema));
  }

  return client;
};

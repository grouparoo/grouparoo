import { Client } from "pg";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  console.log({ appOptions });
  const client = new Client(appOptions);
  await client.connect();

  if (appOptions.schema) {
    await client.query(`SET search_path TO '${appOptions.schema}';`);
  }

  return client;
};

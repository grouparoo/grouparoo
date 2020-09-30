import { Snowflake } from "snowflake-promise";
import { ConnectPluginAppMethod } from "@grouparoo/core";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  let { account, username, password, warehouse, database, schema } = appOptions;
  schema = schema || "PUBLIC";

  const client = new Snowflake({
    account,
    username,
    password,
    database,
    schema,
    warehouse,
  });

  client["schemaName"] = schema;

  await client.connect();
  return client;
};

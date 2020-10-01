import { Snowflake } from "snowflake-promise";
import SnowflakeLogger from "snowflake-sdk/lib/logger";
import SnowflakeUtil from "snowflake-sdk/lib/util";
import { ConnectPluginAppMethod } from "@grouparoo/core";
import { log } from "actionhero";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  let { account, username, password, warehouse, database, schema } = appOptions;
  schema = schema || "PUBLIC";

  const logger = SnowflakeLogger.getInstance();
  SnowflakeLogger.setInstance(logToActionhero(logger));

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

function logMessage(level) {
  return function (...messageAndArgs) {
    const message = SnowflakeUtil.format(...messageAndArgs);
    log(message, level);
  };
}
function logToActionhero(orig) {
  orig.error = logMessage("error");
  orig.warn = logMessage("warning");
  orig.info = logMessage("info");
  orig.debug = logMessage("debug");
  orig.trace = logMessage("debug");
  return orig;
}

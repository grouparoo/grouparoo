import { ConnectPluginAppMethod } from "@grouparoo/core";
import { log } from "actionhero";
import { Snowflake } from "snowflake-promise";
import SnowflakeLogger from "snowflake-sdk/lib/logger";
import SnowflakeUtil from "snowflake-sdk/lib/util";

export const connect: ConnectPluginAppMethod = async ({ appOptions }) => {
  const account = appOptions.account?.toString();
  const username = appOptions.username?.toString();
  const password = appOptions.password?.toString();
  const warehouse = appOptions.warehouse?.toString();
  const database = appOptions.database?.toString();
  const schema = appOptions.schema?.toString() || "PUBLIC";

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

  const executeShim: typeof client.execute = client.execute.bind(client);
  (client as any).execute = (
    sqlText: Parameters<typeof client.execute>[0],
    binds?: Parameters<typeof client.execute>[1]
  ) => {
    log(`[ snowflake ] ${sqlText}`, "debug", binds);
    return executeShim(sqlText, binds);
  };

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

import { DisconnectPluginAppMethod } from "@grouparoo/core";
import { MySQLConnection } from "./connect";

export const disconnect: DisconnectPluginAppMethod<MySQLConnection> = async ({
  connection,
}) => {
  await connection.asyncEnd();
};

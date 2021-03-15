import { DisconnectPluginAppMethod } from "@grouparoo/core";

export const disconnect: DisconnectPluginAppMethod = async ({ connection }) => {
  return await connection.asyncDisconnect();
};

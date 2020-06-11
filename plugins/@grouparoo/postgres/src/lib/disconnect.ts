import { DisconnectPluginAppMethod } from "@grouparoo/core";

export const disconnect: DisconnectPluginAppMethod = async ({ connection }) => {
  await connection.end();
};

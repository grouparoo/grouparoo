import { TestPluginMethod } from "@grouparoo/core";
import { IClient } from "./client/interfaces/iClient";

export const appTest: TestPluginMethod<IClient> = async ({ connection }) => {
  return connection.health();
};

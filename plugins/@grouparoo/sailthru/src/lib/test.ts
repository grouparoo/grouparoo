import { TestPluginMethod } from "@grouparoo/core";
import Sailthru from "./client";

export const test: TestPluginMethod = async ({ appOptions }) => {
  try {
    const client = new Sailthru(appOptions);
    await client.getLists();
    return true;
  } catch (err) {
    return false;
  }
};

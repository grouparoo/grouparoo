import { TestPluginMethod } from "@grouparoo/core";
import Sailthru from "./client";

export const test: TestPluginMethod = async ({ appOptions }) => {
  try {
    const client = new Sailthru(appOptions);
    const lists = await client.getLists();
    const success = lists ? true : false;
    const message = success ? `Found ${lists.length} Sailthru lists` : null;

    return { success, message };
  } catch (error) {
    // the Sailthru error objects are just JSON?...
    if (!error.message) {
      throw new Error(JSON.stringify(error));
    } else {
      throw error;
    }
  }
};

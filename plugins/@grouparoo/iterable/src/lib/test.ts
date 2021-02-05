import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const response = await client.lists.get();
  const success = !!response.lists;
  const message = success
    ? `Found ${response.lists.length} lists.`
    : "Error getting lists";
  return { success, message };
};

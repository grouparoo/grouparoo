import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const lists = await client.getLists();
  const success = !!lists;
  const message = success
    ? `Found ${lists.length} lists.`
    : "Error getting lists";
  return { success, message };
};

import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const lists = await client.getLists();
  const success = !!lists;
  const message = success ? `${lists.lengh} Hubspot lists available.` : null;

  return { success, message };
};

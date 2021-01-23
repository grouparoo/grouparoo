import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const success = await client.lists.get();
  const message = success ? 'Connected to Iterable api.' : null;
  return { success, message };
};

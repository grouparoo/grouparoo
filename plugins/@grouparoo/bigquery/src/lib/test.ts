import { connect } from "./connect";
import { TestPluginMethod } from "@grouparoo/core";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  await client.getDatasets();
  return true;
};

import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const { lists } = await client.get("/lists");

  if (lists) {
    return true;
  } else {
    return false;
  }
};

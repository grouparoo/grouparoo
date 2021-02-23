import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  await client.cio.trackAnonymous({
    name: "grouparoo_test_connection",
  });

  return {
    success: true,
    message: "Connected.",
  };
};

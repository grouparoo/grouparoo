import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appId, appOptions }) => {
  const client = await connect(appId, appOptions);

  try {
    const user = await client.getCurrentUser();
    return {
      success: true,
      message: `Logged in as ${user.name} at ${user.company_name}.`,
    };
  } catch (err) {
    throw err.errorMessage || err;
  }
};

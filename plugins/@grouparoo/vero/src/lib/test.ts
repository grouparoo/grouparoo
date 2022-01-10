import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  try {
    await client.changeUserId(1, 1);
    return {
      success: true,
      message: `Logged in.`,
    };
  } catch (err) {
    throw err.errorMessage || err;
  }
};

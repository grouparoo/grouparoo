import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const KlaviyoClient = await connect(appOptions);

  try {
    await KlaviyoClient.lists.getLists();

    return {
      success: true,
      message: `Logged in.`,
    };
  } catch (err) {
    throw err.errorMessage ?? err;
  }
};

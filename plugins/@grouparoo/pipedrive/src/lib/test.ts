import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  try {
    const user = await client.UsersController.getCurrentUserData();
    return {
      success: true,
      message: `Logged in as ${user.data.name} at ${user.data.company_name}.`,
    };
  } catch (err) {
    throw err.errorMessage || err;
  }
};

import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  try {
    const user = await client.contacts.getAll();
    return {
      success: true,
      message: `Logged in as ${user.name} at ${user}.`,
    };
  } catch (err) {
    throw err.errorMessage || err;
  }
};

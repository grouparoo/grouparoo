import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  try {
    const client = await connect(appOptions);
    const response = await client.lead.describe();
    const success = response.success ? true : false;
    return { success };
  } catch (error) {
    return { success: false, error: error.error_description };
  }
};

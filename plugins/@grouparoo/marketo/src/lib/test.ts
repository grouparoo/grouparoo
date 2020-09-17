import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  try {
    const client = await connect(appOptions);
    const response = await client.stats.usage();
    const success = response.success ? true : false;
    const message = ` Seeing stats as ${
      response?.result[0]?.users[0]?.userId || "Marketo user"
    }`;
    return { success, message };
  } catch (error) {
    return {
      success: false,
      error: error.error_description,
    };
  }
};

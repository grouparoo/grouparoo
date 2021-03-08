import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  try {
    const prospects = await client.queryProspects();
    const { display_name } = await client.conn.identity();

    return {
      success: true,
      message: `Logged in as ${display_name}. ${prospects.length} ${
        prospects.length >= 200 ? "(or more) " : ""
      }prospects found.`,
    };
  } catch (err) {
    if (err.response?.status >= 400) {
      throw new Error(err.response.data.err);
    }

    throw err;
  }
};

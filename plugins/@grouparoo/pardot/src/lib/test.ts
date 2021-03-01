import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  try {
    const prospects = await client.getProspects();
    const { organizationName, userFullName } = client.userInfo || {};

    return {
      success: true,
      message: `Connected to ${organizationName} as ${userFullName}. ${prospects.total_results} prospects found.`,
    };
  } catch (err) {
    if (err.response?.status >= 400) {
      throw new Error(err.response.data.err);
    }

    throw err;
  }
};

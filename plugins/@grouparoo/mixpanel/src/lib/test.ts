import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);
  const result = await client.query.profile.getSavedCohorts();
  const success = result.length >= 0;
  const message = success
    ? `Connected to account ${appOptions.username}`
    : null;

  return { success, message };
};

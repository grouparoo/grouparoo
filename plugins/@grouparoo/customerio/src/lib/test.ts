import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  await client.trackAnonymous("123", {
    name: "grouparoo_test_connection",
  });

  let message = "Connected.";
  const response = await client.getCampaigns();
  if (response["campaigns"]) {
    message += ` Found ${response["campaigns"].length} campaigns.`;
  }

  return {
    success: true,
    message,
  };
};

import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  const deviceRes = await client.viewDevices();
  const deviceCount = deviceRes.body.total_count;

  return {
    success: true,
    message: `Found ${deviceCount} devices.`,
  };
};

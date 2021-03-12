import { TestPluginMethod } from "@grouparoo/core";
import { connect } from "./connect";

export const test: TestPluginMethod = async ({ appOptions }) => {
  const client = await connect(appOptions);

  const user = await client.UsersController.getCurrentUserData();
  console.log(user);

  return {
    success: true,
    message: "Connected.",
  };
};

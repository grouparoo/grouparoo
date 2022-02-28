import { TestPluginMethod } from "@grouparoo/core";
import { FreshdeskClient } from "./client";

export const test: TestPluginMethod<FreshdeskClient> = async ({
  connection,
  appOptions,
}) => {
  // Check domain name
  const regex = /^https:\/\/.*\.freshdesk\.com\/$/;
  if (!regex.test(appOptions.domainName?.toString())) {
    return {
      success: false,
      message:
        "Domain name should follow the pattern https://domain.freshdesk.com/",
    };
  }

  // Check authority
  try {
    await connection.getAllContacts();
    return {
      success: true,
      message: `Logged in successfully on ${connection.domainName}`,
    };
  } catch (err) {
    throw err.message ?? err;
  }
};

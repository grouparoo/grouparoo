import { SimpleAppOptions } from "@grouparoo/core";
import jsforce from "jsforce";

export async function connect(appOptions: SimpleAppOptions) {
  const { username, password, securityToken } = appOptions;
  var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com'
  });
  const fullPassword =
    (password || "").toString() + (securityToken || "").toString();
  await conn.login(username, fullPassword);
  return conn;
}

import { SimpleAppOptions } from "@grouparoo/core";
import PardotClient from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  const client = new PardotClient({
    businessUnitId: appOptions.businessUnitId,
    // you can change loginUrl and pardotUrl to connect to sandbox or prerelease env.
    // loginUrl: "https://test.salesforce.com"
    pardotUrl: "https://pi.demo.pardot.com",
  });

  await client.login(
    appOptions.username,
    appOptions.password,
    appOptions.securityToken
  );

  return client;
}

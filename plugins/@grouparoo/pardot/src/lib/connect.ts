import { SimpleAppOptions } from "@grouparoo/core";
import PardotClient from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  const client = new PardotClient({
    businessUnitId: appOptions.businessUnitId,
    loginUrl: appOptions.salesforceDomain,
    pardotUrl: appOptions.pardotDomain,
  });

  await client.login(
    appOptions.username,
    appOptions.password,
    appOptions.securityToken
  );

  return client;
}

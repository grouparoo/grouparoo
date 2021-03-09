import { SimpleAppOptions } from "@grouparoo/core";
import PardotClient from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  const client = new PardotClient({
    businessUnitId: appOptions.businessUnitId?.toString(),
    loginUrl: appOptions.salesforceDomain?.toString(),
    pardotUrl: appOptions.pardotDomain?.toString(),
  });

  await client.login(
    appOptions.username?.toString(),
    appOptions.password?.toString(),
    appOptions.securityToken?.toString()
  );

  return client;
}

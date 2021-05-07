import { SimpleAppOptions } from "@grouparoo/core";
import { CustormerioClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new CustormerioClient(
    appOptions.siteId,
    appOptions.apiKey,
    appOptions.appApiKey
  );
}

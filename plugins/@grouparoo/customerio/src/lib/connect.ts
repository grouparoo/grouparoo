import { SimpleAppOptions } from "@grouparoo/core";
import { CustomerioClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new CustomerioClient(
    appOptions.siteId,
    appOptions.apiKey,
    appOptions.appApiKey
  );
}

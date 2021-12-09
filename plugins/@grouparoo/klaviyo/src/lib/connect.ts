import { SimpleAppOptions } from "@grouparoo/core";
import { KlaviyoClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new KlaviyoClient({
    privateToken: appOptions.privateToken?.toString(),
    publicToken: appOptions.publicToken?.toString(),
  });
}

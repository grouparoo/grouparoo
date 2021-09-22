import { SimpleAppOptions } from "@grouparoo/core";
import { BrazeClient } from "./client/client";

export async function connect(appOptions: SimpleAppOptions) {
  return new BrazeClient(
    appOptions.apiKey as string,
    appOptions.restEndpoint as string
  );
}

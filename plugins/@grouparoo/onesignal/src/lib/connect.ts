import { SimpleAppOptions } from "@grouparoo/core";
import { Client } from "onesignal-node";

export async function connect(appOptions: SimpleAppOptions) {
  return new Client(
    appOptions.appId?.toString(),
    appOptions.apiKey?.toString()
  );
}

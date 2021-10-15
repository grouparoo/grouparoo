import { SimpleAppOptions } from "@grouparoo/core";
import { HubspotClient } from "./client/client";

export async function connect(appOptions: SimpleAppOptions) {
  return new HubspotClient(appOptions);
}

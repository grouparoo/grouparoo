import { SimpleAppOptions } from "@grouparoo/core";
import HubspotClient from "hubspot-api";

export async function connect(appOptions: SimpleAppOptions) {
  return new HubspotClient(appOptions);
}

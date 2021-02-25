import { SimpleAppOptions } from "@grouparoo/core";
import CIO from "customerio-node";

export async function connect(appOptions: SimpleAppOptions) {
  return new CIO(appOptions.siteId, appOptions.apiKey);
}

import { SimpleAppOptions } from "@grouparoo/core";
import Mixpanel from "mixpanel";

export async function connect(appOptions: SimpleAppOptions) {
  return Mixpanel.init(appOptions.apiKey, {
    protocol: "https",
  });
}

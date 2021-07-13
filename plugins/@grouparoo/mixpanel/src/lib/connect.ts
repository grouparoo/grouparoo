import { SimpleAppOptions } from "@grouparoo/core";
import Mixpanel from "mixpanel";

export async function connect(appOptions: SimpleAppOptions) {
  return Mixpanel.init(appOptions.apiKey as string, {
    protocol: "https",
    test: true,
    debug: true,
    verbose: true,
  });
}

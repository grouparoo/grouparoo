import { SimpleAppOptions } from "@grouparoo/core";
import { VeroClient } from "./client";

export async function connect(appOptions: SimpleAppOptions) {
  return new VeroClient(appOptions.authToken?.toString());
}

import { SimpleAppOptions } from "@grouparoo/core";
import { ApiHelper } from "./apiHelper";

export async function connect(appOptions: SimpleAppOptions) {
  return new ApiHelper(appOptions.apiKey);
}

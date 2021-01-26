import { SimpleAppOptions } from "@grouparoo/core";
import IterableApi from "node-iterable-api";

export async function connect(appOptions: SimpleAppOptions) {
  return IterableApi.create(appOptions.apiKey);
}

import { SimpleAppOptions } from "@grouparoo/core";

export async function connect(appOptions: SimpleAppOptions) {
  return require('node-iterable-api').create(appOptions.apiKey);
}

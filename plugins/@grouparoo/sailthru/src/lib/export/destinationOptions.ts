import { App, SimpleAppOptions } from "@grouparoo/core";

export async function destinationOptions(
  app: App,
  appOptions: SimpleAppOptions
) {
  // no options to set.
  // TODO: make this optional in the plugin definition?
  return {};
}

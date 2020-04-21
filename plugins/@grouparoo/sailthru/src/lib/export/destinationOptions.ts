import { DestinationOptionsMethod } from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async () => {
  // no options to set.
  // TODO: make this optional in the plugin definition?
  return {};
};

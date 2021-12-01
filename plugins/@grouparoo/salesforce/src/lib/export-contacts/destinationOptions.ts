import { getDestinationOptions } from "./options";
import { DestinationOptionsMethod } from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  appId,
  appOptions,
  destinationOptions,
}) => {
  return getDestinationOptions({
    appId,
    appOptions,
    destinationOptions,
  });
};

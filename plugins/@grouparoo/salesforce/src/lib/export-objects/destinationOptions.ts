import { getDestinationOptions } from "../export/options";
import { DestinationOptionsMethod } from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  return getDestinationOptions({
    appOptions,
    destinationOptions,
    which: {
      profile: true,
      group: true,
      membership: true,
    },
  });
};

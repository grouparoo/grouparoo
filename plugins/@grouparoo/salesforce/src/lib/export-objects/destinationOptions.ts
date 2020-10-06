import { getDestinationOptions } from "../export/options";
import { DestinationOptionsMethod } from "@grouparoo/core";

export const destinationOptions: DestinationOptionsMethod = async ({
  appGuid,
  appOptions,
  destinationOptions,
}) => {
  return getDestinationOptions({
    appGuid,
    appOptions,
    destinationOptions,
    which: {
      profile: true,
      reference: true,
      group: true,
      membership: true,
    },
  });
};

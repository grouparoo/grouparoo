import { getDestinationOptions } from "../export/options";
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
    which: {
      record: true,
      reference: true,
      group: true,
      membership: true,
    },
  });
};

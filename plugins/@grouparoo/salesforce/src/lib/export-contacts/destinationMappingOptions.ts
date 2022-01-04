import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { destinationModel } from "./model";

import { getDestinationMappingOptions } from "../export/mapping";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appId, appOptions, destination, destinationOptions }) => {
    return getDestinationMappingOptions({
      appId,
      appOptions,
      destination,
      model: destinationModel(destinationOptions),
    });
  };

import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { destinationModel } from "./model";

import { getDestinationMappingOptions } from "../export/mapping";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appGuid,
  appOptions,
  destinationOptions,
}) => {
  return getDestinationMappingOptions({
    appGuid,
    appOptions,
    model: destinationModel(destinationOptions),
  });
};

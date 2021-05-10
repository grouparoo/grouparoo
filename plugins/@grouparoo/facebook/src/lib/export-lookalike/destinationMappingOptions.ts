import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { destinationModel } from "./model";

import { getDestinationMappingOptions } from "../export/mapping";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ destinationOptions }) => {
    return getDestinationMappingOptions({
      model: destinationModel(destinationOptions),
    });
  };

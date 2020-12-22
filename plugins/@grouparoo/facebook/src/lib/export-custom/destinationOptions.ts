import { DestinationOptionsMethod } from "@grouparoo/core";
import { getFieldList } from "../export/fields";

export const destinationOptions: DestinationOptionsMethod = async () => {
  return getFieldList("CUSTOM");
};

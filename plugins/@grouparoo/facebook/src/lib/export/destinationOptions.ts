import { DestinationOptionsMethod } from "@grouparoo/core";
import { getFieldList } from "./options";

export const destinationOptions: DestinationOptionsMethod = async () => {
  return getFieldList();
};

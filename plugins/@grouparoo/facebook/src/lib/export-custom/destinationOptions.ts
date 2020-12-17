import { DestinationOptionsMethod } from "@grouparoo/core";
import { getFieldList } from "../export/fields";
import { destinationModel } from "./model";

export const destinationOptions: DestinationOptionsMethod = async ({
  destinationOptions,
}) => {
  return getFieldList(destinationModel(destinationOptions));
};

import { getSalesforceModel, SalesforceModel } from "../export/model";
import { SimpleDestinationOptions } from "@grouparoo/core";

export function destinationModel(
  destinationOptions: SimpleDestinationOptions
): SalesforceModel {
  return getSalesforceModel(destinationOptions, {
    recordObject: "Account",
    recordMatchField: destinationOptions.primaryKey as string,
  });
}

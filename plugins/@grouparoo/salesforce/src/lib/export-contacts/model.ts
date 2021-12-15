import { getSalesforceModel, SalesforceModel } from "../export/model";
import { SimpleDestinationOptions } from "@grouparoo/core";

export function destinationModel(
  destinationOptions: SimpleDestinationOptions
): SalesforceModel {
  const mapping: { [key: string]: string } = {};
  if (destinationOptions.primaryKey) {
    Object.assign(mapping, {
      recordObject: "Contact",
      recordMatchField: destinationOptions.primaryKey as string,
    });
  }
  if (destinationOptions.accountKey) {
    Object.assign(mapping, {
      recordReferenceField: "AccountId",
      recordReferenceObject: "Account",
      recordReferenceMatchField: destinationOptions.accountKey as string,
    });
  }
  return getSalesforceModel(destinationOptions, mapping);
}

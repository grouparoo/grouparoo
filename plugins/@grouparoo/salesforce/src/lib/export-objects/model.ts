import { getSalesforceModel, SalesforceModel } from "../export/model";
import { SimpleDestinationOptions } from "@grouparoo/core";
import { BatchSyncMode } from "@grouparoo/app-templates/dist/destination/batch/types";

export function destinationModel(
  destinationOptions: SimpleDestinationOptions
): SalesforceModel {
  return getSalesforceModel(destinationOptions, {
    syncMode: BatchSyncMode.Sync,
  });
}

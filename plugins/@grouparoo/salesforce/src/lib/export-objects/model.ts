import {
  getSalesforceModel,
  SALES_FORCE_DESTINATIONS,
  SalesforceModel,
} from "../export/model";
import { SimpleDestinationOptions } from "@grouparoo/core";

export function destinationModel(
  destinationOptions: SimpleDestinationOptions
): SalesforceModel {
  return getSalesforceModel(
    destinationOptions,
    SALES_FORCE_DESTINATIONS.object
  );
}

import { exportSalesforceBatch, SalesforceModel } from "../salesforceExporter";
import { buildBatchExports, BatchExport } from "./../batchHelper";
import {
  ExportProfilesPluginMethod,
  ErrorWithProfileGuid,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";

export interface MyBatchMethod {
  (argument: {
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
    exports: BatchExport[];
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}

export const exportBatch: MyBatchMethod = async ({
  appOptions,
  destinationOptions,
  exports,
}) => {
  const objectType = destinationOptions.profileObject;
  const fkType = destinationOptions.profileFieldMatch;
  const model: SalesforceModel = { objectType, fkType };
  return exportSalesforceBatch({
    appOptions,
    destinationOptions,
    exports,
    model,
  });
};

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appOptions,
  destinationOptions,
  exports,
}) => {
  const batchExports = buildBatchExports(exports);
  return exportBatch({
    appOptions,
    destinationOptions,
    exports: batchExports,
  });
};

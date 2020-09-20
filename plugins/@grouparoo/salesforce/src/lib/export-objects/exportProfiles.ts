import { exportSalesforceBatch } from "../export/salesforceExporter";
import { buildBatchExports, BatchExport } from "./../batchHelper";
import { destinationModel } from "./model";
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
  return exportSalesforceBatch({
    appOptions,
    exports,
    model: destinationModel(destinationOptions),
  });
};

const myBatchMethod = exportBatch;
export const exportProfiles: ExportProfilesPluginMethod = async ({
  appOptions,
  destinationOptions,
  exports,
}) => {
  const batchExports = buildBatchExports(exports);
  return myBatchMethod({
    appOptions,
    destinationOptions,
    exports: batchExports,
  });
};

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

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appOptions,
  destinationOptions,
  exports: profilesToExport,
}) => {
  const batchExports = buildBatchExports(profilesToExport);
  return exportBatch({
    appOptions,
    destinationOptions,
    exports: batchExports,
  });
};

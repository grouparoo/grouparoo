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
    appGuid: string;
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
  appGuid,
  appOptions,
  destinationOptions,
  exports,
}) => {
  return exportSalesforceBatch({
    appGuid,
    appOptions,
    exports,
    model: destinationModel(destinationOptions),
  });
};

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appGuid,
  appOptions,
  destinationOptions,
  exports: profilesToExport,
}) => {
  const batchExports = buildBatchExports(profilesToExport);
  return exportBatch({
    appGuid,
    appOptions,
    destinationOptions,
    exports: batchExports,
  });
};

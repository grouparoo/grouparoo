import {
  buildBatchExports,
  BatchExport,
} from "@grouparoo/app-templates/dist/destination/batch";
import { exportSalesforceBatch } from "../export/salesforceExporter";
import { destinationModel } from "./model";
import {
  ExportProfilesPluginMethod,
  ErrorWithProfileId,
  SimpleAppOptions,
  SimpleDestinationOptions,
  DestinationSyncOperations,
} from "@grouparoo/core";

export interface MyBatchMethod {
  (argument: {
    appId: string;
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
    syncOperations: DestinationSyncOperations;
    exports: BatchExport[];
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileId[];
  }>;
}

export const exportBatch: MyBatchMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  syncOperations,
  exports,
}) => {
  return exportSalesforceBatch({
    appId,
    appOptions,
    exports,
    syncOperations,
    model: destinationModel(destinationOptions),
  });
};

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  syncOperations,
  exports: profilesToExport,
}) => {
  const batchExports = buildBatchExports(profilesToExport);
  return exportBatch({
    appId,
    appOptions,
    destinationOptions,
    syncOperations,
    exports: batchExports,
  });
};

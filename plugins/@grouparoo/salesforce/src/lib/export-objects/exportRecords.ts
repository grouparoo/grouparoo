import {
  buildBatchExports,
  BatchExport,
} from "@grouparoo/app-templates/dist/destination/batch";
import { exportSalesforceBatch } from "../export/salesforceExporter";
import { destinationModel } from "./model";
import {
  ExportRecordsPluginMethod,
  ErrorWithRecordId,
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
    errors?: ErrorWithRecordId[];
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
    destinationOptions,
    exports,
    syncOperations,
    model: destinationModel(destinationOptions),
  });
};

export const exportRecords: ExportRecordsPluginMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  syncOperations,
  exports: recordsToExport,
}) => {
  const batchExports = buildBatchExports(recordsToExport);
  return exportBatch({
    appId,
    appOptions,
    destinationOptions,
    syncOperations,
    exports: batchExports,
  });
};

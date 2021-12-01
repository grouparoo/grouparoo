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
  exports.map((currentExport) => {
    if (
      !destinationOptions.groupObject ||
      !destinationOptions.groupNameField ||
      !destinationOptions.membershipObject ||
      !destinationOptions.membershipRecordField ||
      !destinationOptions.membershipGroupField
    ) {
      currentExport.oldGroups = [];
      currentExport.newGroups = [];
    }
  });

  return exportSalesforceBatch({
    appId,
    appOptions,
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

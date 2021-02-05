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
} from "@grouparoo/core";

export interface MyBatchMethod {
  (argument: {
    appId: string;
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
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
  exports,
}) => {
  return exportSalesforceBatch({
    appId,
    appOptions,
    exports,
    model: destinationModel(destinationOptions),
  });
};

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  exports: profilesToExport,
}) => {
  const batchExports = buildBatchExports(profilesToExport);
  return exportBatch({
    appId,
    appOptions,
    destinationOptions,
    exports: batchExports,
  });
};

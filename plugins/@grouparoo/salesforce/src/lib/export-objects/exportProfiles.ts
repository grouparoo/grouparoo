import {
  exportSalesforceBatch,
  SalesforceModel,
} from "../export/salesforceExporter";
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
  const {
    profileObject,
    profileMatchField,
    groupObject,
    groupNameField,
    membershipObject,
    membershipProfileField,
    membershipGroupField,
  } = destinationOptions;

  const model: SalesforceModel = {
    profileObject,
    profileMatchField,
    groupObject,
    groupNameField,
    membershipObject,
    membershipProfileField,
    membershipGroupField,
  };
  return exportSalesforceBatch({
    appOptions,
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

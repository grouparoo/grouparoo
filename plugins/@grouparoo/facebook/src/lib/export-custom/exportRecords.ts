import { exportFacebookRecords } from "../export/facebookExporter";
import { destinationModel } from "./model";
import { ExportRecordsPluginMethod } from "@grouparoo/core";

export { setTestFunction } from "../export/facebookExporter";

export const exportRecords: ExportRecordsPluginMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  syncOperations,
  exports: recordsToExport,
}) => {
  return exportFacebookRecords({
    appId,
    appOptions,
    syncOperations,
    model: destinationModel(destinationOptions),
    exports: recordsToExport,
  });
};

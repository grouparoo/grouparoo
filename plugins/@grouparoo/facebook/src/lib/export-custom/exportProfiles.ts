import { exportFacebookProfiles } from "../export/facebookExporter";
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
  return exportFacebookProfiles({
    appId,
    appOptions,
    syncOperations,
    model: destinationModel(destinationOptions),
    exports: recordsToExport,
  });
};

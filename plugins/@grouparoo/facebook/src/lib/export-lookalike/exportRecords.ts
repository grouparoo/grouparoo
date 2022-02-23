import { exportFacebookRecords } from "../export/facebookExporter";
import { destinationModel } from "./model";
import { ExportRecordsPluginMethod } from "@grouparoo/core";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

export { setTestFunction } from "../export/facebookExporter";

export const exportRecords: ExportRecordsPluginMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  exports: recordsToExport,
}) => {
  return exportFacebookRecords({
    appId,
    appOptions,
    syncOperations: DestinationSyncModeData.upsert.operations,
    model: destinationModel(destinationOptions),
    exports: recordsToExport,
  });
};

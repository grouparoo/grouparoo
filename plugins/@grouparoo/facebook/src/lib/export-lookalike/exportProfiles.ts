import { exportFacebookProfiles } from "../export/facebookExporter";
import { destinationModel } from "./model";
import { ExportProfilesPluginMethod } from "@grouparoo/core";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

export { setTestFunction } from "../export/facebookExporter";

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  exports: profilesToExport,
}) => {
  return exportFacebookProfiles({
    appId,
    appOptions,
    syncOperations: DestinationSyncModeData.additive.operations,
    model: destinationModel(destinationOptions),
    exports: profilesToExport,
  });
};

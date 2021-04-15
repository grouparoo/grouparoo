import { exportFacebookProfiles } from "../export/facebookExporter";
import { destinationModel } from "./model";
import { ExportProfilesPluginMethod } from "@grouparoo/core";

export { setTestFunction } from "../export/facebookExporter";

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appId,
  appOptions,
  destinationOptions,
  syncOperations,
  exports: profilesToExport,
}) => {
  return exportFacebookProfiles({
    appId,
    appOptions,
    syncOperations,
    model: destinationModel(destinationOptions),
    exports: profilesToExport,
  });
};

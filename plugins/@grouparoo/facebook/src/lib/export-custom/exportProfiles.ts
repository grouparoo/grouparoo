import { exportFacebookProfiles } from "../export/facebookExporter";
import { destinationModel } from "./model";
import { ExportProfilesPluginMethod } from "@grouparoo/core";

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
    model: destinationModel(destinationOptions),
    exports: profilesToExport,
  });
};

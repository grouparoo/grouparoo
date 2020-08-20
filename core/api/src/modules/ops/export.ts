import {
  ExportProfileProperties,
  ExportProfilePropertiesWithType,
} from "../../models/Export";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { ProfilePropertyOps } from "../../modules/ops/profileProperty";

export namespace ExportOps {
  /**
   * Given an export with stringified old/new profile properties, this method will re-'inflate' them, ie turning date strings back to date objects.
   * To be used in the getter, this method cannot be async.
   */
  export function deserializeExportProfileProperties(
    serializedStringifiedProperties: string
  ): ExportProfileProperties {
    const response = {};
    const serializedProperties: ExportProfilePropertiesWithType = serializedStringifiedProperties
      ? JSON.parse(serializedStringifiedProperties)
      : {};

    for (const key in serializedProperties) {
      const type = serializedProperties[key].type;
      const rawValue = serializedProperties[key].rawValue;

      if (!type || !rawValue) {
        // legacy formatting
        response[key] = serializedProperties[key];
      } else {
        // current formatting
        const rawValue = serializedProperties[key].rawValue;
        if (Array.isArray(rawValue)) {
          response[key] = rawValue.map((rv) =>
            ProfilePropertyOps.getValue(rv, type)
          );
        } else {
          response[key] = ProfilePropertyOps.getValue(rawValue, type);
        }
      }
    }

    return response;
  }
}

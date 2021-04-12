import { exportProfiles } from "./exportProfiles";
import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";
import { PluginConnection } from "@grouparoo/core";
import { supportedSyncModes } from "../../initializers/plugin";

export function buildConnection(): PluginConnection {
  return {
    name: "facebook-audiences-custom",
    direction: "export",
    description: "Export to Facebook Custom Audiences",
    app: "facebook",
    syncModes: supportedSyncModes,
    options: [
      {
        key: "primaryKey",
        displayName: "Primary Key",
        required: true,
        description: "Which field should uniquely identify Facebook users?",
      },
    ],
    methods: {
      exportProfiles,
      destinationOptions,
      destinationMappingOptions,
      exportArrayProperties,
    },
  };
}

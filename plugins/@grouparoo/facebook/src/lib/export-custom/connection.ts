import { exportProfiles } from "./exportProfiles";
import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";
import { PluginConnection } from "@grouparoo/core";

export function buildConnection(): PluginConnection {
  return {
    name: "facebook-audiences-custom",
    direction: "export",
    description: "Export to Facebook Custom Audiences",
    app: "facebook",
    options: [
      {
        key: "primaryKey",
        displayName: "Primary Key",
        required: true,
        description: "Which field should uniquely identify Facebook users?",
      },
      {
        key: "syncMode",
        displayName: "Sync Mode",
        required: true,
        description:
          "How should Grouparoo update Facebook audiences? Users can often not be deleted from small audiences.",
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

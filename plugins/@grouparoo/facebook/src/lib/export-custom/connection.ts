import { exportRecords } from "./exportRecords";
import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";
import { DestinationSyncMode, PluginConnection } from "@grouparoo/core";

export const supportedSyncModes: DestinationSyncMode[] = ["sync", "upsert"];

export function buildConnection(): PluginConnection {
  return {
    name: "facebook-export-audiences-custom",
    displayName: "Facebook Export Custom Audiences",
    direction: "export",
    description: "Export to Facebook Custom Audiences",
    apps: ["facebook"],
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
      exportRecords,
      destinationOptions,
      destinationMappingOptions,
      exportArrayProperties,
    },
  };
}

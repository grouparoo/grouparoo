import { PluginConnection, DestinationSyncMode } from "@grouparoo/core/dist";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";

export const objectsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

export const objectsDestinationConnection: PluginConnection = {
  name: "airtable-export-records",
  displayName: "Airtable Export Records",
  direction: "export",
  description: "Export Records as Airtable Custom Records.",
  apps: ["airtable"],
  syncModes: objectsSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "table",
      displayName: "Table Name",
      required: true,
      description: "Which object in Airtable represents a Grouparoo record?",
    },
    {
      key: "primaryKey",
      displayName: "Primary Key",
      required: true,
      description:
        "Which field in the Table uniquely represents the Grouparoo records?",
    },
  ],
  methods: {
    exportRecords,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

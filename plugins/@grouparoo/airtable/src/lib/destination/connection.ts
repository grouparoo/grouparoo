import { PluginConnection, DestinationSyncMode } from "@grouparoo/core/dist";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";

export const supportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "upsert",
  "update",
];

export const destinationConnection: PluginConnection = {
  name: "airtable-export-records",
  displayName: "Airtable Export Records",
  direction: "export",
  description: "Export Records as Airtable Records in a Table",
  apps: ["airtable"],
  syncModes: supportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "table",
      displayName: "Table Name",
      required: true,
      description:
        "Which Table in Airtable has rows that represent a Grouparoo record?",
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

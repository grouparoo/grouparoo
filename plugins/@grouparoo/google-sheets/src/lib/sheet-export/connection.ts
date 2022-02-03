import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";

export const supportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

export const destinationConnection: PluginConnection = {
  name: "google-sheet-export",
  displayName: "Google Sheets Export",
  direction: "export",
  description: "Export Records to Google Sheets Spreadsheets.",
  apps: ["google-sheets"],
  syncModes: supportedSyncModes,
  options: [
    {
      key: "sheet_url",
      displayName: "Google Sheet URL",
      required: true,
      description: "The url of the Google Sheet, with the gid (tab) included.",
    },
    {
      key: "primaryKey",
      displayName: "Primary Key",
      required: true,
      description: "Which Column is used to match Grouparoo records?",
    },
    {
      key: "groupsColumn",
      displayName: "Groups Column",
      required: false,
      description:
        "Which column in the sheet is used for the names of the Grouparoo groups?",
    },
  ],
  methods: {
    exportRecords,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

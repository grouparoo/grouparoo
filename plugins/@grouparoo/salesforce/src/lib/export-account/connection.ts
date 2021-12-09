import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "../export/exportArrayProperties";
import { getDestinationMappingOptions } from "../export/mapping";

export const accountsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

export const accountsDestinationConnection: PluginConnection = {
  name: "salesforce-export-accounts",
  displayName: "Salesforce Export Accounts",
  direction: "export",
  description: "Export Records to Salesforce Accounts.",
  apps: ["salesforce"],
  syncModes: accountsSupportedSyncModes,
  options: [
    {
      key: "primaryKey",
      displayName: "Primary Key",
      required: true,
      description: "Which Account field is used to match Grouparoo records?",
    },
  ],
  methods: {
    exportRecords,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

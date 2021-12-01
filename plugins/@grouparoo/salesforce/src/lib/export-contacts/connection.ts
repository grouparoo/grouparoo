import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "../export/exportArrayProperties";

export const contactsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

export const contactsDestinationConnection: PluginConnection = {
  name: "salesforce-export-contact",
  displayName: "Salesforce Export Contacts",
  direction: "export",
  description: "Export Records to Salesforce Contacts.",
  apps: ["salesforce"],
  syncModes: contactsSupportedSyncModes,
  options: [
    {
      key: "primaryKey",
      displayName: "Primary Key",
      required: true,
      description: "Which Contact field is used to match Grouparoo records?",
    },
    {
      key: "accountKey",
      displayName: "Account Key",
      required: false,
      description: "What Account field is used to match Grouparoo records?",
    },
  ],
  methods: {
    exportRecords,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

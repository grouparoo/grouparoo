import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecord } from "./exportRecord";

import { getDestinationOptions } from "../shared/connectionOptions";
import { getDestinationMappingOptions } from "../shared/destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const emailSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "upsert",
  "update",
];

export const emailDestinationConnection: PluginConnection = {
  name: "mailchimp-export-contacts",
  displayName: "Mailchimp Export Contacts",
  direction: "export",
  description: "Export Records to a Mailchimp list with MergeVars and Tags.",
  apps: ["mailchimp", "mailchimp-oauth"],
  syncModes: emailSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "listId",
      required: true,
      description: "Mailchimp list id",
    },
  ],
  methods: {
    destinationOptions: getDestinationOptions(["listId"]),
    destinationMappingOptions: getDestinationMappingOptions("email"),
    exportRecord,
    exportArrayProperties,
  },
};

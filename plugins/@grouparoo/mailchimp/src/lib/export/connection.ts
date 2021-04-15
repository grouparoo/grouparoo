import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportProfile } from "./exportProfile";

import { getDestinationOptions } from "../shared/connectionOptions";
import { getDestinationMappingOptions } from "../shared/destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const emailSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

export const emailDestinationConnection: PluginConnection = {
  name: "mailchimp-export",
  direction: "export",
  description: "Export Profiles to a Mailchimp list with MergeVars and Tags.",
  app: "mailchimp",
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
    exportProfile,
    exportArrayProperties,
  },
};

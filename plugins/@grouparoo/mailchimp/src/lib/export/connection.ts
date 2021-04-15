import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportProfile } from "./exportProfile";

import { getDestinationOptions } from "../shared/connectionOptions";
import { getDestinationMappingOptions } from "../shared/destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const supportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

const connection: PluginConnection = {
  name: "mailchimp-export",
  direction: "export",
  description: "Export Profiles to a Mailchimp list with MergeVars and Tags.",
  app: "mailchimp",
  syncModes: supportedSyncModes,
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

export default connection;

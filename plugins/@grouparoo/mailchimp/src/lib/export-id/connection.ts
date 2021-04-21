import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportProfile } from "./exportProfile";

import { getDestinationOptions } from "../shared/connectionOptions";
import { getDestinationMappingOptions } from "../shared/destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const idSupportedSyncModes: DestinationSyncMode[] = ["enrich"];

export const idDestinationConnection: PluginConnection = {
  name: "mailchimp-export-id",
  direction: "export",
  description:
    "Updates existing contacts in a Mailchimp list based on a known Mailchimp ID.",
  app: "mailchimp",
  syncModes: idSupportedSyncModes,
  defaultSyncMode: "enrich",
  options: [
    {
      key: "listId",
      required: true,
      description: "Mailchimp list id",
    },
  ],
  methods: {
    destinationOptions: getDestinationOptions(["listId"]),
    destinationMappingOptions: getDestinationMappingOptions("id"),
    exportProfile,
    exportArrayProperties,
  },
};

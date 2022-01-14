import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecord } from "./exportRecord";

import { getDestinationOptions } from "../shared/connectionOptions";
import { getDestinationMappingOptions } from "../shared/destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const idSupportedSyncModes: DestinationSyncMode[] = ["enrich"];

export const idDestinationConnection: PluginConnection = {
  name: "mailchimp-export-contacts-by-id",
  displayName: "Mailchimp Export Contacts by id",
  direction: "export",
  description:
    "Updates existing contacts in a Mailchimp list based on a known Mailchimp ID.",
  apps: ["mailchimp", "mailchimp-oauth"],
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
    exportRecord,
    exportArrayProperties,
  },
};

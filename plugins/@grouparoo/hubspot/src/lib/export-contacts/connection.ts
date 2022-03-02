import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecord } from "./exportRecord";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const contactsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "upsert",
  "update",
];

export const contactsDestinationConnection: PluginConnection = {
  name: "hubspot-export-contacts",
  displayName: "HubSpot Export Contacts",
  direction: "export",
  description:
    "Export Records as HubSpot Contacts and add them to Contact Lists.",
  apps: ["hubspot", "hubspot-oauth"],
  syncModes: contactsSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "companyKey",
      displayName: "Company Key",
      required: false,
      description:
        "Links a Contact to a company by something other than the HubSpot default (email domain).",
    },
  ],
  methods: {
    exportRecord,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

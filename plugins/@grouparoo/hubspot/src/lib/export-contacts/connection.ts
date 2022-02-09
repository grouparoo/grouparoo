import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecord } from "./exportRecord";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const contactsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

export const contactsDestinationConnection: PluginConnection = {
  name: "hubspot-export-contacts",
  displayName: "Hubspot Export Contacts",
  direction: "export",
  description:
    "Export Records as Hubspot Contacts and add them to Contact Lists.",
  apps: ["hubspot"],
  syncModes: contactsSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "companyKey",
      displayName: "Company Key",
      required: false,
      description:
        "Links a Contact to a company by something other than the Hubspot default (email domain).",
    },
  ],
  methods: {
    exportRecord,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

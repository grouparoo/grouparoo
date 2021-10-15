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
  description: "Export Records to Hubspot and add them to Contact Lists.",
  app: "hubspot",
  syncModes: contactsSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [],
  methods: {
    exportRecord,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

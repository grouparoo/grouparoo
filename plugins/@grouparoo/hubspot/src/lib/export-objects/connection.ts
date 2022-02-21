import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const objectsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "additive",
  "enrich",
];

export const objectsDestinationConnection: PluginConnection = {
  name: "hubspot-export-objects",
  displayName: "Hubspot Export Objects",
  direction: "export",
  description:
    "Export Records as Hubspot Custom Objects or Hubspot standard objects.",
  apps: ["hubspot", "hubspot-oauth"],
  syncModes: objectsSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "schemaId",
      displayName: "Schema",
      required: true,
      description: "Which object in Hubspot represents a Grouparoo record?",
    },
    {
      key: "primaryKey",
      displayName: "Primary Key",
      required: true,
      description:
        "Which field in the Schema uniquely represents the Grouparoo records?",
    },
  ],
  methods: {
    exportRecords,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

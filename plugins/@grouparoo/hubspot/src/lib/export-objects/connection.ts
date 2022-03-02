import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "../shared/exportArrayProperties";

export const objectsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "upsert",
  "update",
];

export const objectsDestinationConnection: PluginConnection = {
  name: "hubspot-export-objects",
  displayName: "HubSpot Export Objects",
  direction: "export",
  description:
    "Export Records as HubSpot Custom Objects or Hubspot standard objects.",
  apps: ["hubspot", "hubspot-oauth"],
  syncModes: objectsSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "schemaId",
      displayName: "Schema",
      required: true,
      description: "Which object in HubSpot represents a Grouparoo record?",
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

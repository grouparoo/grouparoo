import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecord } from "./exportRecord";

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
    "Export Records to Hubspot Custom Objects and associate them with Hubspot standard objects or others custom objects.",
  app: "hubspot",
  syncModes: objectsSupportedSyncModes,
  defaultSyncMode: "sync",
  options: [
    {
      key: "recordObject",
      displayName: "Record Object",
      required: true,
      description: "Which object in Hubspot represents a Grouparoo record?",
    },
    {
      key: "recordMatchField",
      displayName: "Record Match Field",
      required: true,
      description:
        "Which field in the record Object is used to match Grouparoo records?",
    },
    {
      key: "groupObject",
      displayName: "Group Object",
      required: true,
      description: "Which object in Hubspot represents a Grouparoo group?",
    },
    {
      key: "groupNameField",
      displayName: "Group Name Field",
      required: true,
      description:
        "Which field in the group Object is used for the name of a Grouparoo group?",
    },
  ],
  methods: {
    exportRecord,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
};

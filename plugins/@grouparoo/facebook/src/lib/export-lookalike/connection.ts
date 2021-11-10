import { exportRecords } from "./exportRecords";
import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";
import { PluginConnection } from "@grouparoo/core";

// Note: This is currently not being used.
export function buildConnection(): PluginConnection {
  return {
    name: "facebook-export-audiences-lookalike",
    displayName: "Facebook Export Audiences Lookalike",
    direction: "export",
    description: "Adds users to Facebook Lookalike Audiences.",
    apps: ["facebook"],
    options: [
      {
        key: "primaryKey",
        displayName: "Primary Key",
        required: true,
        description: "Which field should uniquely identify Facebook users?",
      },
    ],
    methods: {
      exportRecords,
      destinationOptions,
      destinationMappingOptions,
      exportArrayProperties,
    },
  };
}

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "./exportArrayProperties";
import { exportRecords } from "./exportRecords";
import { PluginConnection } from "@grouparoo/core";

export const destinationConnection: PluginConnection = {
  name: "snowflake-export-records",
  displayName: "Snowflake Export Record",
  direction: "export",
  description:
    "Export Records to a Snowflake table.  Groups will be exported to a secondary table linked by a foreign key.",
  apps: ["snowflake", "snowflake-keypair"],
  syncModes: ["sync", "additive", "enrich"],
  defaultSyncMode: "sync",
  options: [
    {
      key: "table",
      displayName: "Table",
      required: true,
      description: "The table to write records to.",
    },
    {
      key: "primaryKey",
      displayName: "Primary Key",
      required: true,
      description: "The primaryKey of table.",
    },
    {
      key: "groupsTable",
      displayName: "Groups Table",
      required: false,
      description: "The table to write groups to.",
    },
    {
      key: "groupForeignKey",
      displayName: "Group Foreign Key",
      required: false,
      description:
        "The foreign key that the groups table uses to reference table.",
    },
    {
      key: "groupColumnName",
      displayName: "Group Column Name",
      required: false,
      description: "The column name for where to store the group names.",
    },
  ],
  methods: {
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
    exportRecords,
  },
};

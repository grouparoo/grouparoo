import { PluginConnection } from "@grouparoo/app-templates/dist/source/table";

import { destinationOptions } from "@grouparoo/mysql/dist/lib/export/destinationOptions";
import { destinationMappingOptions } from "@grouparoo/mysql/dist/lib/export/destinationMappingOptions";
import { exportArrayProperties } from "@grouparoo/mysql/dist/lib/export/exportArrayProperties";

import { exportRecord } from "./exportRecord";

export const getConnection = (): PluginConnection => ({
  name: "clickhouse-export-records",
  displayName: "ClickHouse Export Record",
  direction: "export",
  description:
    "Export Records to a ClickHouse table.  Groups will be exported to a secondary table linked by a foreign key.",
  app: "clickhouse",
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
      required: true,
      description: "The table to write groups to.",
    },
    {
      key: "groupForeignKey",
      displayName: "Groups Foreign Key",
      required: true,
      description:
        "The foreign key that the groups table uses to reference table.",
    },
    {
      key: "groupColumnName",
      displayName: "Groups Column Name",
      required: true,
      description: "The column name for where to store the group names.",
    },
  ],
  methods: {
    exportRecord,
    destinationOptions,
    destinationMappingOptions,
    exportArrayProperties,
  },
});

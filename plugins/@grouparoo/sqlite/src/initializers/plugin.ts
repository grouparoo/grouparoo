import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { appQuery } from "../lib/appQuery";
import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { exportRecord } from "../lib/export/exportRecord";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";
import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    const syncModes: DestinationSyncMode[] = ["sync", "upsert", "update"];
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/sqlite/sqlite.png",
      apps: [
        {
          name: "sqlite",
          displayName: "SQLite",
          options: [
            {
              key: "file",
              displayName: "File",
              required: false,
              description: "Absolute path to the SQLite database file.",
              placeholder: "/path/to/file.sqlite",
            },
          ],
          methods: { test, connect, disconnect, appQuery },
        },
      ],
      connections: [
        getTableConnection(),
        getQueryConnection(),
        {
          name: "sqlite-export-records",
          displayName: "SQLite Export Record",
          direction: "export",
          description:
            "Export Records to a SQLite table. Groups will be exported to a secondary table linked by a foreign key.",
          apps: ["sqlite"],
          syncModes,
          defaultSyncMode,
          options: [
            {
              key: "table",
              displayName: "Table",
              required: true,
              description: "The table used to export records.",
            },
            {
              key: "primaryKey",
              displayName: "Primary Key",
              required: true,
              description: "The primary key of table.",
            },
            {
              key: "groupsTable",
              displayName: "Groups Table",
              required: true,
              description: "The table used to export groups.",
            },
            {
              key: "groupForeignKey",
              displayName: "Group Foreign Key",
              required: true,
              description:
                "The foreign key that the groups table uses to reference the records table.",
            },
            {
              key: "groupColumnName",
              displayName: "Group Column Name",
              required: true,
              description: "The column name used to store group names.",
            },
          ],
          methods: {
            exportRecord,
            destinationOptions,
            destinationMappingOptions,
            exportArrayProperties,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

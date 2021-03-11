import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import path from "path";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
// import { exportProfile } from "../lib/export/exportProfile";
// import { exportArrayProperties } from "../lib/export/exportArrayProperties";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";

// import { destinationOptions } from "../lib/export/destinationOptions";
// import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";

import { getTables } from "../lib/table-import/getTables";
import { getColumns } from "../lib/table-import/getColumns";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
// import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";
import {
  TableSourceTemplate,
  TablePropertyTemplate,
} from "@grouparoo/app-templates/dist/source/table";
import {
  QuerySourceTemplate,
  QueryPropertyTemplate,
} from "@grouparoo/app-templates/dist/source/query";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/sqlite/sqlite.svg",
      templates: [
        new AppTemplate("sqlite", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("sqlite", { getTables, getColumns }),
        new TablePropertyTemplate("sqlite"),
        new QuerySourceTemplate("sqlite"),
        new QueryPropertyTemplate("sqlite"),
        // new DestinationTemplate("sqlite", [
        //   path.join(templateRoot, "destination", "*.template"),
        // ]),
      ],
      apps: [
        {
          name: "sqlite",
          options: [
            {
              key: "file",
              displayName: "File",
              required: false,
              description: "Path to the SQLite database file.",
              placeholder: "/path/to/file.sqlite",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        getTableConnection(),
        getQueryConnection(),
        // {
        //   name: "postgres-export",
        //   direction: "export",
        //   description:
        //     "Export Profiles to a Postgres table.  Groups will be exported to a secondary table linked by a foreign key.",
        //   app: "postgres",
        //   options: [
        //     {
        //       key: "table",
        //       displayName: "Table",
        //       required: true,
        //       description: "The table to write profiles to.",
        //     },
        //     {
        //       key: "primaryKey",
        //       displayName: "Primary Key",
        //       required: true,
        //       description: "The primaryKey of table.",
        //     },
        //     {
        //       key: "groupsTable",
        //       displayName: "Groups Table",
        //       required: true,
        //       description: "The table to write groups to.",
        //     },
        //     {
        //       key: "groupForeignKey",
        //       displayName: "Group Foreign Key",
        //       required: true,
        //       description:
        //         "The foreign key that the groups table uses to reference table.",
        //     },
        //     {
        //       key: "groupColumnName",
        //       displayName: "Group Column Name",
        //       required: true,
        //       description:
        //         "The column name for where to store the group names.",
        //     },
        //   ],
        //   methods: {
        //     exportProfile,
        //     destinationOptions,
        //     destinationMappingOptions,
        //     exportArrayProperties,
        //   },
        // },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

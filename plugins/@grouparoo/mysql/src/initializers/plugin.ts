import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import path from "path";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { exportRecord } from "./../lib/export/exportRecord";
import { exportArrayProperties } from "./../lib/export/exportArrayProperties";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";

import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";

import { getTables } from "../lib/table-import/getTables";
import { getColumns } from "../lib/table-import/getColumns";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";
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
      icon: "/public/@grouparoo/mysql/mysql.png",
      templates: [
        new AppTemplate("mysql", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("mysql", { getTables, getColumns }),
        new TablePropertyTemplate("mysql"),
        new QuerySourceTemplate("mysql"),
        new QueryPropertyTemplate("mysql"),
        new DestinationTemplate("mysql", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "mysql",
          options: [
            {
              key: "host",
              displayName: "Host",
              required: false,
              description: "The MySQL host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              displayName: "Port",
              required: false,
              description: "The MySQL port.",
              defaultValue: 3306,
            },
            {
              key: "database",
              displayName: "Database",
              required: true,
              description: "The MySQL database.",
            },
            {
              key: "user",
              displayName: "User",
              required: false,
              description: "The MySQL user.",
            },
            {
              key: "password",
              type: "password",
              displayName: "Password",
              required: false,
              description: "The MySQL user's password.",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        getTableConnection(),
        getQueryConnection(),
        {
          name: "mysql-export",
          direction: "export",
          description:
            "Export Profiles to a MySQL table.  Groups will be exported to a secondary table linked by a foreign key.",
          app: "mysql",
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
              displayName: "Groups Forigen Key",
              required: true,
              description:
                "The foreign key that the groups table uses to reference table.",
            },
            {
              key: "groupColumnName",
              displayName: "Groups Column Name",
              required: true,
              description:
                "The column name for where to store the group names.",
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

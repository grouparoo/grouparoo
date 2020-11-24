import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { exportProfile } from "./../lib/export/exportProfile";
import { exportArrayProperties } from "./../lib/export/exportArrayProperties";

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
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/mysql/mysql.png",
      apps: [
        {
          name: "mysql",
          options: [
            {
              key: "host",
              required: false,
              description: "The MySQL host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              required: false,
              description: "The MySQL port.",
              placeholder: "3306",
            },
            {
              key: "database",
              required: true,
              description: "The MySQL database.",
            },
            { key: "user", required: false, description: "The MySQL user." },
            {
              key: "password",
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
              description: "The table to write profiles to.",
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
            exportProfile,
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

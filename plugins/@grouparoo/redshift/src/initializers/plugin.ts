import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "@grouparoo/postgres/dist/lib/test";
import { connect } from "@grouparoo/postgres/dist/lib/connect";
import { disconnect } from "@grouparoo/postgres/dist/lib/disconnect";
import { exportProfile } from "@grouparoo/postgres/dist/lib/export/exportProfile";
import { exportArrayProperties } from "@grouparoo/postgres/dist/lib/export/exportArrayProperties";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";

import { destinationOptions } from "@grouparoo/postgres/dist/lib/export/destinationOptions";
import { destinationMappingOptions } from "@grouparoo/postgres/dist/lib/export/destinationMappingOptions";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/redshift/redshift.svg",
      apps: [
        {
          name: "redshift",
          options: [
            {
              key: "host",
              displayName: "Host",
              required: false,
              description: "The Redshift host.",
            },
            {
              key: "port",
              displayName: "Port",
              required: false,
              description: "The Redshift port.",
            },
            {
              key: "database",
              displayName: "Database",
              required: true,
              description: "The Redshift database.",
            },
            {
              key: "schema",
              displayName: "Schema",
              required: false,
              description: "The Redshift schema (default: public).",
            },
            {
              key: "user",
              displayName: "User",
              required: false,
              description: "The Redshift user.",
            },
            {
              key: "password",
              displayName: "Password",
              required: false,
              description: "The Redshift user's password.",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        getTableConnection(),
        getQueryConnection(),
        {
          name: "redshift-export",
          direction: "export",
          description:
            "Export Profiles to a Redshift table.  Groups will be exported to a secondary table linked by a foreign key.",
          app: "redshift",
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
              displayName: "Group Foreign Key",
              required: true,
              description:
                "The foreign key that the groups table uses to reference table.",
            },
            {
              key: "groupColumnName",
              displayName: "Group Column Name",
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

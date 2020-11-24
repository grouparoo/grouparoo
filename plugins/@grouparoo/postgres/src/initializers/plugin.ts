import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { exportProfile } from "../lib/export/exportProfile";
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
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/postgres/postgres.svg",
      apps: [
        {
          name: "postgres",
          options: [
            {
              key: "host",
              required: false,
              description: "The Postgres host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              required: false,
              description: "The Postgres port.",
              placeholder: "5432",
            },
            {
              key: "database",
              required: true,
              description: "The Postgres database.",
            },
            {
              key: "schema",
              required: false,
              description: "The Postgres schema (default: public).",
              placeholder: "public",
            },
            { key: "user", required: false, description: "The Postgres user." },
            {
              key: "password",
              required: false,
              description: "The Postgres user's password.",
            },
            {
              key: "ssl",
              required: false,
              description:
                "Require the use of a SSL connection (default: false).  If you need custom SSL certificates paste in their values below.",
            },
            {
              key: "ssl_cert",
              required: false,
              description: "The ssl certificate.",
            },
            {
              key: "ssl_key",
              required: false,
              description: "The ssl certificate's key.",
            },
            {
              key: "ssl_ca",
              required: false,
              description: "The ssl certificate authority.",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        getTableConnection(),
        getQueryConnection(),
        {
          name: "postgres-export",
          direction: "export",
          description:
            "Export Profiles to a Postgres table.  Groups will be exported to a secondary table linked by a foreign key.",
          app: "postgres",
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

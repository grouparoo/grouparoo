import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import path from "path";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { exportProfile } from "../lib/export/exportProfile";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";

import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";
import {
  TableSourceTemplate,
  TableScheduleTemplate,
  TablePropertyTemplate,
} from "@grouparoo/app-templates/dist/source/table";
import {
  QuerySourceTemplate,
  QueryScheduleTemplate,
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
      icon: "/public/@grouparoo/postgres/postgres.svg",
      templates: [
        new AppTemplate("postgres", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("postgres"),
        new TableScheduleTemplate("postgres"),
        new TablePropertyTemplate("postgres"),
        new QuerySourceTemplate("postgres"),
        new QueryScheduleTemplate("postgres"),
        new QueryPropertyTemplate("postgres"),
        new DestinationTemplate("postgres", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "postgres",
          options: [
            {
              key: "host",
              displayName: "Host",
              required: false,
              description: "The Postgres host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              displayName: "Port",
              required: false,
              description: "The Postgres port.",
              placeholder: "5432",
            },
            {
              key: "database",
              displayName: "Database",
              required: true,
              description: "The Postgres database.",
            },
            {
              key: "schema",
              displayName: "Schema",
              required: false,
              description: "The Postgres schema (default: public).",
              placeholder: "public",
            },
            {
              key: "user",
              displayName: "User",
              required: false,
              description: "The Postgres user.",
            },
            {
              key: "password",
              displayName: "Password",
              required: false,
              description: "The Postgres user's password.",
            },
            {
              key: "ssl",
              displayName: "SSL",
              required: false,
              description:
                "Require the use of a SSL connection (default: false).  If you need custom SSL certificates paste in their values below.",
            },
            {
              key: "ssl_cert",
              displayName: "SSL Certificate",
              required: false,
              description: "The ssl certificate.",
            },
            {
              key: "ssl_key",
              displayName: "SSL Key",
              required: false,
              description: "The ssl certificate's key.",
            },
            {
              key: "ssl_ca",
              displayName: "SSL Certificate Authority",
              required: false,
              description: "The ssl certificate authority (CA).",
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

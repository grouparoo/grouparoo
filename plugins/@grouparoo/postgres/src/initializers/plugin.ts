import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import path from "path";

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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/postgres/postgres.png",
      templates: [
        new AppTemplate("postgres", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("postgres", { getTables, getColumns }),
        new TablePropertyTemplate("postgres"),
        new QuerySourceTemplate("postgres"),
        new QueryPropertyTemplate("postgres"),
        new DestinationTemplate(
          "postgres",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "postgres",
          displayName: "Postgres",
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
              defaultValue: 5432,
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
              defaultValue: "public",
            },
            {
              key: "user",
              displayName: "User",
              required: false,
              description: "The Postgres user.",
            },
            {
              key: "password",
              type: "password",
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
          methods: { test, connect, disconnect, appQuery },
        },
      ],
      connections: [
        getTableConnection(),
        getQueryConnection(),
        {
          name: "postgres-export-records",
          displayName: "Postgres Export Record",
          direction: "export",
          description:
            "Export Records to a Postgres table.  Groups will be exported to a secondary table linked by a foreign key.",
          apps: ["postgres"],
          syncModes,
          defaultSyncMode,
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

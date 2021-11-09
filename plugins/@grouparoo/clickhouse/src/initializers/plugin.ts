import path from "path";

import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import {
  TableSourceTemplate,
  TablePropertyTemplate,
} from "@grouparoo/app-templates/dist/source/table";
import {
  QuerySourceTemplate,
  QueryPropertyTemplate,
} from "@grouparoo/app-templates/dist/source/query";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";
import { connect } from "@grouparoo/mysql/dist/lib/connect";
import { disconnect } from "@grouparoo/mysql/dist/lib/disconnect";
import { getTables } from "@grouparoo/mysql/dist/lib/table-import/getTables";
import { getColumns } from "@grouparoo/mysql/dist/lib/table-import/getColumns";
import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";
import { getConnection as getExportConnection } from "../lib/export/connection";
import { test } from "@grouparoo/mysql/dist/lib/test";

const packageJSON = require("./../../package.json");
const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

export class Plugins extends Initializer {
  name = packageJSON.name;

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/clickhouse/clickhouse.png",
      templates: [
        new AppTemplate("clickhouse", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("clickhouse", { getTables, getColumns }),
        new TablePropertyTemplate("clickhouse"),
        new QuerySourceTemplate("clickhouse"),
        new QueryPropertyTemplate("clickhouse"),
        new DestinationTemplate("clickhouse", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "clickhouse",
          displayName: "ClickHouse",
          options: [
            {
              key: "host",
              displayName: "Host",
              required: false,
              description: "The ClickHouse host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              displayName: "Port",
              required: false,
              description: "The ClickHouse MySQL interface port.",
              defaultValue: 9004,
            },
            {
              key: "database",
              displayName: "Database",
              required: true,
              description: "The ClickHouse database.",
              defaultValue: "default",
            },
            {
              key: "user",
              displayName: "User",
              required: false,
              description: "The ClickHouse user.",
              defaultValue: "default",
            },
            {
              key: "password",
              type: "password",
              displayName: "Password",
              required: false,
              description: "The ClickHouse user's password.",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        getTableConnection(),
        getQueryConnection(),
        getExportConnection(),
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import { disconnect } from "@grouparoo/mysql/dist/lib/disconnect";
import { connect } from "../lib/connect";
import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";
import { getConnection as getExportConnection } from "../lib/export/connection";
import { test } from "@grouparoo/mysql/dist/lib/test";
import { appQuery } from "@grouparoo/mysql/dist/lib/appQuery";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  name = packageJSON.name;

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/clickhouse/clickhouse.png",
      apps: [
        {
          name: "clickhouse",
          displayName: "ClickHouse",
          options: [
            {
              key: "host",
              displayName: "Host",
              required: false,
              description: "The ClickHouse HTTP host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              displayName: "Port",
              required: false,
              description: "The ClickHouse HTTP interface port.",
              defaultValue: 8123,
            },
            {
              key: "database",
              displayName: "Database",
              required: true,
              description: "The ClickHouse database.",
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
          methods: { test, connect, disconnect, appQuery },
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

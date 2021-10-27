import path from "path";

import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { connect } from "@grouparoo/mysql/dist/lib/connect";
import { disconnect } from "@grouparoo/mysql/dist/lib/disconnect";
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
            },
            {
              key: "user",
              displayName: "User",
              required: false,
              description: "The ClickHouse user.",
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
      connections: [],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

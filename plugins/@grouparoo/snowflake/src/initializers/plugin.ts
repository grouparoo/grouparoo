import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { test } from "./../lib/test";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/snowflake/snowflake.png",
      apps: [
        {
          name: "snowflake",
          options: [
            {
              key: "account",
              required: true,
              description:
                "The full name of the account (provided by Snowflake). It is the subdomain you use to access Snowflake.",
              placeholder: "e.g. xyz12345.us-east-1 or xy12345.us-east-2.aws",
            },
            {
              key: "username",
              required: true,
              description: "Snowflake user login name to connect with.",
              placeholder: "e.g. JDOE",
            },
            {
              key: "password",
              required: true,
              description: "Password for the given username.",
            },
            {
              key: "warehouse",
              required: true,
              description: "The Snowflake warehouse to use.",
              placeholder: "e.g. COMPUTE_WH",
            },
            {
              key: "database",
              required: true,
              description: "The Snowflake database to use.",
            },
            {
              key: "schema",
              required: false,
              description: "The Snowflake schema (default: PUBLIC)",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [getTableConnection(), getQueryConnection()],
    });
  }
}

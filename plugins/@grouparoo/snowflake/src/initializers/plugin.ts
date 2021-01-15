import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { test } from "./../lib/test";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
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
      icon: "/public/@grouparoo/snowflake/snowflake.png",
      templates: [
        new AppTemplate("snowflake", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("snowflake"),
        new TableScheduleTemplate("snowflake"),
        new TablePropertyTemplate("snowflake"),
        new QuerySourceTemplate("snowflake"),
        new QueryScheduleTemplate("snowflake"),
        new QueryPropertyTemplate("snowflake"),
      ],
      apps: [
        {
          name: "snowflake",
          options: [
            {
              key: "account",
              displayName: "Account",
              required: true,
              description:
                "The full name of the account (provided by Snowflake). It is the subdomain you use to access Snowflake.",
              placeholder: "e.g. xyz12345.us-east-1 or xy12345.us-east-2.aws",
            },
            {
              key: "username",
              displayName: "User Name",
              required: true,
              description: "Snowflake user login name to connect with.",
              placeholder: "e.g. JOHN_DOE",
            },
            {
              key: "password",
              displayName: "Password",
              required: true,
              description: "Password for the given username.",
            },
            {
              key: "warehouse",
              displayName: "Warehouse",
              required: true,
              description: "The Snowflake warehouse to use.",
              placeholder: "e.g. COMPUTE_WH",
            },
            {
              key: "database",
              displayName: "Database",
              required: true,
              description: "The Snowflake database to use.",
            },
            {
              key: "schema",
              displayName: "Schema",
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

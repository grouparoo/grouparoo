import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { appQuery } from "../lib/appQuery";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { test } from "./../lib/test";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";

import { getTables } from "../lib/table-import/getTables";
import { getColumns } from "../lib/table-import/getColumns";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import {
  TableSourceTemplate,
  TablePropertyTemplate,
} from "@grouparoo/app-templates/dist/source/table";
import {
  QuerySourceTemplate,
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
        new TableSourceTemplate("snowflake", { getTables, getColumns }),
        new TablePropertyTemplate("snowflake"),
        new QuerySourceTemplate("snowflake"),
        new QueryPropertyTemplate("snowflake"),
      ],
      apps: [
        {
          name: "snowflake",
          displayName: "Snowflake",
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
              type: "password",
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
              defaultValue: "PUBLIC",
            },
          ],
          methods: { test, connect, disconnect, appQuery },
        },
        {
          name: "snowflake-keypair",
          displayName: "Snowflake (Keypair Auth)",
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
              key: "private_key",
              displayName: "Private Key",
              type: "password",
              required: true,
              description:
                "The Private Key used to connect to your warehouse.  Likely generated as rsa_key.p8, e.g. -----BEGIN PRIVATE KEY-----\nMII ...",
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
              defaultValue: "PUBLIC",
            },
          ],
          methods: { test, connect, disconnect, appQuery },
        },
      ],
      connections: [getTableConnection(), getQueryConnection()],
    });
  }
}

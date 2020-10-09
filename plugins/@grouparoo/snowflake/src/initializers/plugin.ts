import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { test } from "./../lib/test";

import {
  sourceOptions as querySourceOptions,
  profilePropertyRuleOptions as queryProfilePropertyRuleOptions,
} from "../lib/query";
import { profileProperty as queryProfileProperty } from "../lib/query-import/profileProperty";

import { buildConnection as buildTableConnection } from "@grouparoo/app-templates/src/source/table";
import { getSampleRows } from "./../lib/table-import/getSampleRows";
import { getColumns } from "./../lib/table-import/getColumns";
import { getTables } from "./../lib/table-import/getTables";
import { getChangedRows } from "./../lib/table-import/getChangedRows";
import { getPropertyValue } from "./../lib/table-import/getPropertyValue";
import { getChangedRowCount } from "./../lib/table-import/getChangedRowCount";

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
      connections: [
        buildTableConnection({
          app: "snowflake",
          name: "snowflake-table-import",
          description:
            "Import or update Profiles from a Snowflake database table.",
          tableOptionDescription: "The table to scan",
          getSampleRows,
          getColumns,
          getTables,
          getChangedRows,
          getPropertyValue,
          getChangedRowCount,
        }),
        {
          name: "snowflake-query-import",
          direction: "import",
          description:
            "Import or update profiles via a custom Snowflake query.",
          app: "snowflake",
          options: [],
          profilePropertyRuleOptions: queryProfilePropertyRuleOptions,
          methods: {
            sourceOptions: querySourceOptions,
            profileProperty: queryProfileProperty,
          },
        },
      ],
    });
  }
}

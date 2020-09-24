import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { test } from "./../lib/test";

import { sourcePreview as tableSourcePreview } from "../lib/table-import/sourcePreview";
import { sourceOptions as tableSourceOptions } from "../lib/table-import/sourceOptions";
import { sourceFilters as tableSourceFilters } from "../lib/table-import/sourceFilters";
import { uniqueProfilePropertyRuleBootstrapOptions as tableUniqueProfilePropertyRuleBootstrapOptions } from "../lib/table-import/uniqueProfilePropertyRuleBootstrapOptions";
import { profiles as tableProfiles } from "../lib/table-import/profiles";
import { profileProperty as tableProfileProperty } from "../lib/table-import/profileProperty";
import { profilePropertyRuleOptions as tableProfilePropertyRuleOptions } from "../lib/table-import/profilePropertyRuleOptions";
import { scheduleOptions as tableScheduleOptions } from "../lib/table-import/scheduleOptions";
import { sourceRunPercentComplete as tableSourceRunPercentComplete } from "../lib/table-import/sourceRunPercentComplete";

import { sourceOptions as querySourceOptions } from "../lib/query-import/sourceOptions";
import { profileProperty as queryProfileProperty } from "../lib/query-import/profileProperty";
import { profilePropertyRuleOptions as queryProfilePropertyRuleOptions } from "../lib/query-import/profilePropertyRuleOptions";

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
                "The full name of your account (provided by Snowflake). It is the subdomain you use to access Snowflake.",
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
        {
          name: "snowflake-table-import",
          direction: "import",
          description:
            "Import or update profiles from a Snowflake database table",
          app: "snowflake",
          options: [
            {
              key: "table",
              required: true,
              description: "The table to scan",
            },
          ],
          profilePropertyRuleOptions: tableProfilePropertyRuleOptions,
          scheduleOptions: tableScheduleOptions,
          methods: {
            sourceOptions: tableSourceOptions,
            sourcePreview: tableSourcePreview,
            sourceFilters: tableSourceFilters,
            uniqueProfilePropertyRuleBootstrapOptions: tableUniqueProfilePropertyRuleBootstrapOptions,
            profiles: tableProfiles,
            profileProperty: tableProfileProperty,
            sourceRunPercentComplete: tableSourceRunPercentComplete,
          },
        },
        {
          name: "snowflake-query-import",
          direction: "import",
          description:
            "Import or update profiles from a custom Snowflake query",
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

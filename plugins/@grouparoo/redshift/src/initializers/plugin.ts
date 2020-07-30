import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "@grouparoo/postgres/dist/lib/test";
import { connect } from "@grouparoo/postgres/dist/lib/connect";
import { disconnect } from "@grouparoo/postgres/dist/lib/disconnect";
import { exportProfile } from "@grouparoo/postgres/dist/lib/export/exportProfile";
import { exportArrayProperties } from "@grouparoo/postgres/dist/lib/export/exportArrayProperties";

import { sourcePreview as tableSourcePreview } from "@grouparoo/postgres/dist/lib/table-import/sourcePreview";
import { sourceOptions as tableSourceOptions } from "@grouparoo/postgres/dist/lib/table-import/sourceOptions";
import { sourceFilters as tableSourceFilters } from "@grouparoo/postgres/dist/lib/table-import/sourceFilters";
import { uniqueProfilePropertyRuleBootstrapOptions as tableUniqueProfilePropertyRuleBootstrapOptions } from "@grouparoo/postgres/dist/lib/table-import/uniqueProfilePropertyRuleBootstrapOptions";
import { profiles as tableProfiles } from "@grouparoo/postgres/dist/lib/table-import/profiles";
import { profileProperty as tableProfileProperty } from "@grouparoo/postgres/dist/lib/table-import/profileProperty";
import { profilePropertyRuleOptions as tableProfilePropertyRuleOptions } from "@grouparoo/postgres/dist/lib/table-import/profilePropertyRuleOptions";
import { scheduleOptions as tableScheduleOptions } from "@grouparoo/postgres/dist/lib/table-import/scheduleOptions";

import { sourceOptions as querySourceOptions } from "@grouparoo/postgres/dist/lib/query-import/sourceOptions";
import { profileProperty as queryProfileProperty } from "@grouparoo/postgres/dist/lib/query-import/profileProperty";
import { profilePropertyRuleOptions as queryProfilePropertyRuleOptions } from "@grouparoo/postgres/dist/lib/query-import/profilePropertyRuleOptions";

import { destinationOptions } from "@grouparoo/postgres/dist/lib/export/destinationOptions";
import { destinationMappingOptions } from "@grouparoo/postgres/dist/lib/export/destinationMappingOptions";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/redshift/redshift.svg",
      apps: [
        {
          name: "redshift",
          options: [
            { key: "host", required: false, description: "the redshift host" },
            { key: "port", required: false, description: "the redshift port" },
            {
              key: "database",
              required: true,
              description: "the redshift database",
            },
            {
              key: "schema",
              required: false,
              description: "the redshift schema (default: public)",
            },
            { key: "user", required: false, description: "the redshift user" },
            {
              key: "password",
              required: false,
              description: "the redshift user's password",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        {
          name: "redshift-table-import",
          direction: "import",
          description:
            "import or update profiles from a redshift database table",
          app: "redshift",
          options: [
            {
              key: "table",
              required: true,
              description: "the table to scan",
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
          },
        },
        {
          name: "redshift-query-import",
          direction: "import",
          description: "import or update profiles from a custom redshift query",
          app: "redshift",
          options: [],
          profilePropertyRuleOptions: queryProfilePropertyRuleOptions,
          methods: {
            sourceOptions: querySourceOptions,
            profileProperty: queryProfileProperty,
          },
        },
        {
          name: "redshift-export",
          direction: "export",
          description: "export profiles to a redshift table",
          app: "redshift",
          options: [
            {
              key: "table",
              required: true,
              description: "the table to write profiles to",
            },
            {
              key: "primaryKey",
              required: true,
              description: "the primaryKey of table",
            },
            {
              key: "groupsTable",
              required: true,
              description: "the table to write groups to",
            },
            {
              key: "groupForeignKey",
              required: true,
              description:
                "the foreign key that the groups table uses to reference table",
            },
            {
              key: "groupColumnName",
              required: true,
              description:
                "the foreign key column name for where to store the group names",
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

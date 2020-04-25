import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { exportProfile } from "../lib/export/exportProfile";

import { sourcePreview as tableSourcePreview } from "../lib/table-import/sourcePreview";
import { sourceOptions as tableSourceOptions } from "../lib/table-import/sourceOptions";
import { sourceFilters as tableSourceFilters } from "../lib/table-import/sourceFilters";
import { uniqueProfilePropertyRuleBootstrapOptions as tableUniqueProfilePropertyRuleBootstrapOptions } from "../lib/table-import/uniqueProfilePropertyRuleBootstrapOptions";
import { profiles as tableProfiles } from "../lib/table-import/profiles";
import { profileProperty as tableProfileProperty } from "../lib/table-import/profileProperty";
import { profilePropertyRuleOptions as tableProfilePropertyRuleOptions } from "../lib/table-import/profilePropertyRuleOptions";
import { nextFilter as tableNextFilter } from "../lib/table-import/nextFilter";
import { scheduleOptions as tableScheduleOptions } from "../lib/table-import/scheduleOptions";

import { sourceOptions as querySourceOptions } from "../lib/query-import/sourceOptions";
import { profileProperty as queryProfileProperty } from "../lib/query-import/profileProperty";
import { profilePropertyRuleOptions as queryProfilePropertyRuleOptions } from "../lib/query-import/profilePropertyRuleOptions";

import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/bigquery/bigquery.png",
      apps: [
        {
          name: "bigquery",
          options: [
            { key: "host", required: false, description: "the bigquery host" },
            { key: "port", required: false, description: "the bigquery port" },
            {
              key: "database",
              required: true,
              description: "the bigquery database",
            },
            { key: "user", required: false, description: "the bigquery user" },
            {
              key: "password",
              required: false,
              description: "the bigquery user's password",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "bigquery-table-import",
          direction: "import",
          description:
            "import or update profiles from a bigquery database table",
          app: "bigquery",
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
            nextFilter: tableNextFilter,
          },
        },
        {
          name: "bigquery-query-import",
          direction: "import",
          description: "import or update profiles from a custom bigquery query",
          app: "bigquery",
          options: [],
          profilePropertyRuleOptions: queryProfilePropertyRuleOptions,
          methods: {
            sourceOptions: querySourceOptions,
            profileProperty: queryProfileProperty,
          },
        },
        {
          name: "bigquery-export",
          direction: "export",
          description: "export profiles to a bigquery table",
          app: "bigquery",
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
          },
        },
      ],
    });
  }
}

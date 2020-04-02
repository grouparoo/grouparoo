import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { exportProfile } from "../lib/export/exportProfile";

import { sourcePreview as tableSourcePreview } from "../lib/table-import/sourcePreview";
import { sourceOptions as tableSourceOptions } from "../lib/table-import/sourceOptions";
import { profiles as tableProfiles } from "../lib/table-import/profiles";
import { profileProperty as tableProfileProperty } from "../lib/table-import/profileProperty";
import { profilePropertyRuleOptions as tableProfilePropertyRuleOptions } from "../lib/table-import/profilePropertyRuleOptions";
import { nextFilter as tableNextFilter } from "../lib/table-import/nextFilter";
import { scheduleOptions as tableScheduleOptions } from "../lib/table-import/scheduleOptions";

import { sourceOptions as querySourceOptions } from "../lib/query-import/sourceOptions";
import { profileProperty as queryProfileProperty } from "../lib/query-import/profileProperty";
import { profilePropertyRuleOptions as queryProfilePropertyRuleOptions } from "../lib/query-import/profilePropertyRuleOptions";

import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationPreview } from "../lib/export/destinationPreview";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/postgres/postgres.svg",
      apps: [
        {
          name: "postgres",
          options: [
            { key: "host", required: false, description: "the postgres host" },
            { key: "port", required: false, description: "the postgres port" },
            {
              key: "database",
              required: true,
              description: "the postgres database",
            },
            { key: "user", required: false, description: "the postgres user" },
            {
              key: "password",
              required: false,
              description: "the postgres user's password",
            },
          ],
          test,
        },
      ],
      connections: [
        {
          name: "postgres-table-import",
          direction: "import",
          description:
            "import or update profiles from a postgres database table",
          app: "postgres",
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
            profiles: tableProfiles,
            profileProperty: tableProfileProperty,
            nextFilter: tableNextFilter,
          },
        },
        {
          name: "postgres-query-import",
          direction: "import",
          description: "import or update profiles from a custom postgres query",
          app: "postgres",
          options: [],
          profilePropertyRuleOptions: queryProfilePropertyRuleOptions,
          methods: {
            sourceOptions: querySourceOptions,
            profileProperty: queryProfileProperty,
          },
        },
        {
          name: "postgres-export",
          direction: "export",
          description: "export profiles to a postgres table",
          app: "postgres",
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
            destinationPreview,
          },
        },
      ],
    });
  }
}

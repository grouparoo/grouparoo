import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { exportProfile } from "./../lib/export/exportProfile";
import { exportArrayProperties } from "./../lib/export/exportArrayProperties";

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
      icon: "/public/@grouparoo/mysql/mysql.png",
      apps: [
        {
          name: "mysql",
          options: [
            {
              key: "host",
              required: false,
              description: "The MySQL host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              required: false,
              description: "The MySQL port.",
              placeholder: "3306",
            },
            {
              key: "database",
              required: true,
              description: "The MySQL database.",
            },
            { key: "user", required: false, description: "The MySQL user." },
            {
              key: "password",
              required: false,
              description: "The MySQL user's password.",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        {
          name: "mysql-table-import",
          direction: "import",
          description: "Import or update Profiles from a MySQL database table.",
          app: "mysql",
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
          name: "mysql-query-import",
          direction: "import",
          description: "Import or update Profiles via a custom MySQL query.",
          app: "mysql",
          options: [],
          profilePropertyRuleOptions: queryProfilePropertyRuleOptions,
          methods: {
            sourceOptions: querySourceOptions,
            profileProperty: queryProfileProperty,
          },
        },
        {
          name: "mysql-export",
          direction: "export",
          description:
            "Export Profiles to a MySQL table.  Groups will be exported to a secondary table linked by a foreign key.",
          app: "mysql",
          options: [
            {
              key: "table",
              required: true,
              description: "The table to write profiles to.",
            },
            {
              key: "primaryKey",
              required: true,
              description: "The primaryKey of table.",
            },
            {
              key: "groupsTable",
              required: true,
              description: "The table to write groups to.",
            },
            {
              key: "groupForeignKey",
              required: true,
              description:
                "The foreign key that the groups table uses to reference table.",
            },
            {
              key: "groupColumnName",
              required: true,
              description:
                "The column name for where to store the group names.",
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

import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { exportProfile } from "../lib/export/exportProfile";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

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
      icon: "/public/@grouparoo/postgres/postgres.svg",
      apps: [
        {
          name: "postgres",
          options: [
            {
              key: "host",
              required: false,
              description: "The Postgres host.",
              placeholder: "localhost",
            },
            {
              key: "port",
              required: false,
              description: "The Postgres port.",
              placeholder: "5432",
            },
            {
              key: "database",
              required: true,
              description: "The Postgres database.",
            },
            {
              key: "schema",
              required: false,
              description: "The Postgres schema (default: public).",
              placeholder: "public",
            },
            { key: "user", required: false, description: "The Postgres user." },
            {
              key: "password",
              required: false,
              description: "The Postgres user's password.",
            },
            {
              key: "ssl",
              required: false,
              description:
                "Require the use of a SSL connection (default: false).  If you need custom SSL certificates paste in their values below.",
            },
            {
              key: "ssl_cert",
              required: false,
              description: "The ssl certificate.",
            },
            {
              key: "ssl_key",
              required: false,
              description: "The ssl certificate's key.",
            },
            {
              key: "ssl_ca",
              required: false,
              description: "The ssl certificate authority.",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [
        {
          name: "postgres-table-import",
          direction: "import",
          description:
            "Import or update Profiles from a Postgres database table.",
          app: "postgres",
          options: [
            {
              key: "table",
              required: true,
              description: "The table to scan.",
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
          name: "postgres-query-import",
          direction: "import",
          description: "Import or update Profiles via a custom Postgres query.",
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
          description:
            "Export Profiles to a Postgres table.  Groups will be exported to a secondary table linked by a foreign key.",
          app: "postgres",
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

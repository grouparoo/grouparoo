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
      icon: "/public/@grouparoo/bigquery/bigquery.png",
      apps: [
        {
          name: "bigquery",
          options: [
            {
              key: "project_id",
              required: true,
              description: "Project id from Google.",
              placeholder: "e.g. grouparoo-sources",
            },
            {
              key: "dataset",
              required: true,
              description: "Default dataset id to use for sources.",
              placeholder: "e.g. product-data",
            },
            {
              key: "client_email",
              required: true,
              description: "Email of service account.",
              placeholder:
                "e.g. grouparoo-access@grouparoo-sources.iam.gserviceaccount.com",
            },
            {
              key: "private_key",
              required: true,
              description: "Private key of service account.",
              placeholder: "e.g. -----BEGIN PRIVATE KEY-----\nMII ...",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [getTableConnection(), getQueryConnection()],
    });
  }
}

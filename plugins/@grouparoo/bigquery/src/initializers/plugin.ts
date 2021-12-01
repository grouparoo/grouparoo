import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

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
import { appQuery } from "../lib/appQuery";

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
      templates: [
        new AppTemplate("bigquery", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("bigquery", { getTables, getColumns }),
        new TablePropertyTemplate("bigquery"),
        new QuerySourceTemplate("bigquery"),
        new QueryPropertyTemplate("bigquery"),
      ],
      apps: [
        {
          name: "bigquery",
          displayName: "BigQuery",
          options: [
            {
              key: "project_id",
              displayName: "Project ID",
              required: true,
              description: "Project id from Google.",
              placeholder: "e.g. grouparoo-sources",
            },
            {
              key: "dataset",
              displayName: "Dataset",
              required: true,
              description: "Default dataset id to use for sources.",
              placeholder: "e.g. product-data",
            },
            {
              key: "client_email",
              displayName: "Client Email Address",
              required: true,
              description: "Email of service account.",
              placeholder:
                "e.g. grouparoo-access@grouparoo-sources.iam.gserviceaccount.com",
            },
            {
              key: "private_key",
              displayName: "Private Key",
              type: "password",
              required: true,
              description: "Private key of service account.",
              placeholder: "e.g. -----BEGIN PRIVATE KEY-----\nMII ...",
            },
            {
              key: "location",
              displayName: "Location",
              required: false,
              description:
                "Region or multi-region code of your dataset.  Required for datasets outside the US.",
              placeholder: "e.g. EU",
            },
          ],
          methods: { test, connect, disconnect, appQuery },
        },
      ],
      connections: [getTableConnection(), getQueryConnection()],
    });
  }
}

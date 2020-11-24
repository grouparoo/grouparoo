import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { test } from "./../lib/test";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
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

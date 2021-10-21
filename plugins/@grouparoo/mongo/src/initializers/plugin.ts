import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { connect } from "./../lib/connect";
import { disconnect } from "./../lib/disconnect";
import { test } from "./../lib/test";

import { getConnection as getTableConnection } from "../lib/table-import/connection";
import { getConnection as getQueryConnection } from "../lib/query-import/connection";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import {
  TablePropertyTemplate,
  TableSourceTemplate,
} from "@grouparoo/app-templates/dist/source/table";
import { getTables } from "../lib/table-import/getTables";
import { getColumns } from "../lib/table-import/getColumns";

import {
  QueryPropertyTemplate,
  QuerySourceTemplate,
} from "@grouparoo/app-templates/dist/source/query";
import { appQuery } from "../lib/appQuery";

const packageJSON = require("./../../package.json");
const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/mongo/mongo.png",
      templates: [
        new AppTemplate("mongo", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("mongo", { getTables, getColumns }),
        new TablePropertyTemplate("mongo"),
        new QueryPropertyTemplate("mongo", [
          path.join(templateRoot, "query-property", "*.template"),
        ]),
        new QuerySourceTemplate("mongo", [
          path.join(templateRoot, "query-source", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "mongo",
          displayName: "MongoDB",
          options: [
            {
              key: "uri",
              displayName: "Connection String URI",
              required: true,
              description:
                "The MongoDB Connection String. Normally, this connection string is provided by the Mongo DB service.",
              placeholder: "mongodb://localhost:27017",
            },
            {
              key: "database",
              displayName: "Database name",
              required: true,
              description: "The MongoDB database name.",
              placeholder: "mydb",
            },
          ],
          methods: { test, connect, disconnect, query: appQuery },
        },
      ],
      connections: [getTableConnection(), getQueryConnection()],
    });
  }
}

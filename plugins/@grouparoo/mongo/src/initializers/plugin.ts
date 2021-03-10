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
        new AppTemplate("mongodb", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new TableSourceTemplate("mongodb", { getTables, getColumns }),
        new TablePropertyTemplate("mongodb"),
        new QuerySourceTemplate("mongodb"),
        new QueryPropertyTemplate("mongodb"),
      ],
      apps: [
        {
          name: "mongodb",
          options: [
            {
              key: "uri",
              displayName: "Connection String URI",
              required: true,
              description:
                "The MongoDB Connection String. Normally, this is connection string is provided by the Mongo DB service. " +
                "In case you're using the standalone Mongo DB, this connection string will looks line this: mongodb://localhost:27017.",
              placeholder:
                "e.g. mongodb+srv://user:password@cluster0.123.mongodb.net/mydb?retryWrites=true&w=majority",
            },
            {
              key: "database",
              displayName: "Database name",
              required: true,
              description:
                "The MongoDB database name (normally, the Connection String have the database name too)",
              placeholder: "e.g. mydb",
            },
          ],
          methods: { test, connect, disconnect },
        },
      ],
      connections: [getTableConnection(), getQueryConnection()],
    });
  }
}

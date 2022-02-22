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
      icon: "/public/@grouparoo/mongo/mongo.png",
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
          methods: { test, connect, disconnect },
        },
      ],
      connections: [getTableConnection(), getQueryConnection()],
    });
  }
}

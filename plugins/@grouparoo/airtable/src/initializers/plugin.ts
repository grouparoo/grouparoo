import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import { appTest } from "../lib/appTest";
import { connect } from "../lib/connect";
import { AirtableAppOptionsOptions } from "../lib/appOptions";
import { destinationConnection } from "../lib/destination/connection";
import { disconnect } from "../lib/disconnect";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/airtable/airtable.png",
      apps: [
        {
          name: "airtable",
          displayName: "Airtable",
          options: AirtableAppOptionsOptions,
          methods: {
            test: appTest,
            connect: connect,
            disconnect: disconnect,
          },
        },
      ],
      connections: [destinationConnection],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

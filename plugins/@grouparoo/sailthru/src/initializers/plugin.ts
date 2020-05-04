import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportProfile } from "../lib/export/exportProfile";
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
      icon: "/public/@grouparoo/sailthru/sailthru.png",
      apps: [
        {
          name: "sailthru",
          options: [
            {
              key: "apiKey",
              required: true,
              description: "your sailthru api key",
            },
            {
              key: "apiSecret",
              required: true,
              description: "your sailthru secret here",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "sailthru-export",
          direction: "export",
          description: "export profiles to sailthru",
          app: "sailthru",
          options: [],
          methods: {
            exportProfile,
            destinationOptions,
            destinationMappingOptions,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

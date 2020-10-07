import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportProfile } from "../lib/export/exportProfile";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

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
              description: "Sailthru api key.",
            },
            {
              key: "apiSecret",
              required: true,
              description: "Sailthru apiKey secret.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "sailthru-export",
          direction: "export",
          description: "Export Profiles to Sailthru.",
          app: "sailthru",
          options: [],
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

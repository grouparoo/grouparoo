import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportProfile } from "../lib/export/exportProfile";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

const packageJSON = require("./../../package.json");

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/sailthru/sailthru.png",
      templates: [
        new AppTemplate("sailthru", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("sailthru", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "sailthru",
          options: [
            {
              key: "apiKey",
              displayName: "API Key",
              required: true,
              description: "Sailthru api key.",
            },
            {
              key: "apiSecret",
              displayName: "API Key Secret",
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

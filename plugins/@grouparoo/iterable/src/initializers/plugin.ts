import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportProfile } from "../lib/export/exportProfile";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/iterable/iterable.svg",
      templates: [
        new AppTemplate("hubspot", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("hubspot", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "iterable",
          options: [
            {
              key: "apiKey",
              displayName: "Iterable API Key",
              required: true,
              description: "Iterable apikey (api) key.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "iterable-export",
          direction: "export",
          description:
            "Export Profiles to Iterable and add them to Contact Lists.",
          app: "iterable",
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

import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { appOptions } from "../lib/appOptions";

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
      icon: "/public/@grouparoo/hubspot/hubspot.svg",
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
          name: "hubspot",
          options: [
            {
              key: "hapikey",
              displayName: "Hubspot API Key",
              required: true,
              description: "Hubspot hapikey (api) key.",
            },
          ],
          methods: { test, appOptions },
        },
      ],
      connections: [
        {
          name: "hubspot-export",
          direction: "export",
          description:
            "Export Profiles to Hubspot and add them to Contact Lists.",
          app: "hubspot",
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

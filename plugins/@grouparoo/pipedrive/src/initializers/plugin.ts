import path from "path";
import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";

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
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];

    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/pipedrive/pipedrive.png",
      templates: [
        new AppTemplate("pipedrive", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "pipedrive",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes
        ),
      ],
      apps: [
        {
          name: "pipedrive",
          options: [
            {
              key: "apiToken",
              displayName: "API Token",
              required: true,
              description: "Pipedrive API token",
            },
          ],
          methods: { test, appOptions },
        },
      ],
      connections: [
        {
          name: "pipedrive-export",
          direction: "export",
          description: "Export profiles to Pipedrive as Person contacts",
          app: "pipedrive",
          syncModes,
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

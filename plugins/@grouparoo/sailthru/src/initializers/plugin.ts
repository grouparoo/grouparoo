import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportRecord } from "../lib/export/exportRecord";
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
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/sailthru/sailthru.png",
      templates: [
        new AppTemplate("sailthru", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "sailthru",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
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
              type: "password",
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
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecord,
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

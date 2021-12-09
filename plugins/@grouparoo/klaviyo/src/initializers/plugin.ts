import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

import { destinationOptions } from "../lib/export/destinationOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportRecord } from "../lib/export/exportRecord";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

const packageJSON = require("./../../package.json");

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
      icon: "/public/@grouparoo/klaviyo/klaviyo.png",
      templates: [
        new AppTemplate("klaviyo", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "klaviyo",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "klaviyo",
          displayName: "Klaviyo",
          options: [
            {
              key: "privateToken",
              displayName: "Private Token",
              type: "password",
              required: true,
              description: "Klaviyo Private Token",
            },
            {
              key: "publicToken",
              displayName: "Public Token",
              type: "text",
              required: true,
              description: "Klaviyo Public Token",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "klaviyo-export-profiles",
          displayName: "Klaviyo Export Profiles",
          direction: "export",
          description: "Export records to Klaviyo as Profiles",
          apps: ["klaviyo"],
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

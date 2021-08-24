import path from "path";
import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportRecord } from "../lib/export/exportRecord";
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
    const defaultSyncMode: DestinationSyncMode = "sync";

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
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "pipedrive",
          options: [
            {
              key: "apiToken",
              displayName: "API Token",
              type: "password",
              required: true,
              description: "Pipedrive API token",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "pipedrive-export",
          direction: "export",
          description: "Export records to Pipedrive as Person contacts",
          app: "pipedrive",
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

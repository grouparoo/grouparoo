import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

import { destinationOptions } from "../lib/export-persons/destinationOptions";
import { exportArrayProperties } from "../lib/export-persons/exportArrayProperties";
import { destinationMappingOptions } from "../lib/export-persons/destinationMappingOptions";
import { exportRecord } from "../lib/export-persons/exportRecord";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    const syncModes: DestinationSyncMode[] = ["sync", "additive"];
    const defaultSyncMode: DestinationSyncMode = "sync";

    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/vero/vero.png",
      templates: [
        new AppTemplate("vero", [path.join(templateRoot, "app", "*.template")]),
        new DestinationTemplate(
          "vero",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "vero",
          displayName: "Vero",
          options: [
            {
              key: "authToken",
              displayName: "Auth Token",
              type: "password",
              required: true,
              description: "Vero Auth token",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "vero-export-persons",
          displayName: "Vero Export Persons",
          direction: "export",
          description: "Export records to Vero as Person contacts",
          apps: ["vero"],
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

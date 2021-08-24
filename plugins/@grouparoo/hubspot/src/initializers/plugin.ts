import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

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
      icon: "/public/@grouparoo/hubspot/hubspot.png",
      templates: [
        new AppTemplate("hubspot", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "hubspot",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "hubspot",
          options: [
            {
              key: "hapikey",
              type: "password",
              displayName: "Hubspot API Key",
              required: true,
              description: "Hubspot hapikey (api) key.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "hubspot-export",
          direction: "export",
          description:
            "Export Profiles to Hubspot and add them to Contact Lists.",
          app: "hubspot",
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

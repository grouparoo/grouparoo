import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportRecord } from "../lib/export/exportRecord";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

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
      icon: "/public/@grouparoo/iterable/iterable.png",
      templates: [
        new AppTemplate("iterable", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "iterable",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "iterable",
          options: [
            {
              key: "apiKey",
              type: "password",
              displayName: "Iterable API Key",
              required: true,
              description:
                "Iterable api key. The api keys can be managed here: https://app.iterable.com/settings/apiKeys",
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
            "Export records to Iterable as Users and put them in static Lists.",
          app: "iterable",
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

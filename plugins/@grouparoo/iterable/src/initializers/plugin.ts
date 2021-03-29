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
      icon: "/public/@grouparoo/iterable/iterable.png",
      templates: [
        new AppTemplate("iterable", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("iterable", [
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
              description:
                "Iterable api key. The api keys can be managed here: https://app.iterable.com/settings/apiKeys",
            },
          ],
          methods: { test, appOptions },
        },
      ],
      connections: [
        {
          name: "iterable-export",
          direction: "export",
          description:
            "Export profiles to Iterable as Users and put them in static Lists.",
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

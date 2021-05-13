import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

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
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/sendgrid/sendgrid.png",
      templates: [
        new AppTemplate("sendgrid", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "sendgrid",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "sendgrid",
          options: [
            {
              key: "apiKey",
              displayName: "Sendgrid API Key",
              required: true,
              description:
                "Sendgrid api key. The api keys can be managed here: https://app.sendgrid.com/settings/api_keys",
            },
          ],
          methods: { test, appOptions },
        },
      ],
      connections: [
        {
          name: "sendgrid-export-marketing",
          direction: "export",
          description:
            "Export profiles to Sendgrid marketing as Contacts and put them in static Lists.",
          app: "sendgrid",
          syncModes,
          defaultSyncMode,
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

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
      icon: "/public/@grouparoo/customerio/customerio.png",
      templates: [
        new AppTemplate("customerio", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "customerio",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "customerio",
          options: [
            {
              key: "siteId",
              displayName: "Site ID",
              required: true,
              description: "Customer.io Tracking API site id",
            },
            {
              key: "apiKey",
              displayName: "API Key",
              required: true,
              description: "Customer.io Tracking API key",
            },
          ],
          methods: { test, appOptions },
        },
      ],
      connections: [
        {
          name: "customerio-export",
          direction: "export",
          description: "Export profiles to customer.io as Customers",
          app: "customerio",
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

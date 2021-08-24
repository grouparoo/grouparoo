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
              key: "trackingApiKey",
              type: "password",
              displayName: "Tracking API Key",
              required: true,
              description: "Customer.io Tracking API key",
            },
            {
              key: "appApiKey",
              type: "password",
              displayName: "App API Key",
              required: true,
              description: "Customer.io App API key",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "customerio-export",
          direction: "export",
          description: "Export records to customer.io as Customers",
          app: "customerio",
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

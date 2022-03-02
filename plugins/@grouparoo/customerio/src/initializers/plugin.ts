import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { test } from "./../lib/test";
import { exportRecord } from "../lib/export/exportRecord";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    const syncModes: DestinationSyncMode[] = ["sync", "upsert", "update"];
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/customerio/customerio.png",
      apps: [
        {
          name: "customerio",
          displayName: "Customer.io",
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
          name: "customerio-export-customers",
          displayName: "Customer.io Export Customers",
          direction: "export",
          description: "Export records to customer.io as Customers",
          apps: ["customerio"],
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

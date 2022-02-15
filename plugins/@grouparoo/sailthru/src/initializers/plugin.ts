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
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/sailthru/sailthru.png",
      apps: [
        {
          name: "sailthru",
          displayName: "SailThru",
          options: [
            {
              key: "apiKey",
              displayName: "API Key",
              required: true,
              description: "Sailthru api key.",
            },
            {
              key: "apiSecret",
              type: "password",
              displayName: "API Key Secret",
              required: true,
              description: "Sailthru apiKey secret.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "sailthru-export-users",
          displayName: "SailThru Export Users",
          direction: "export",
          description: "Export Records to Sailthru.",
          apps: ["sailthru"],
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

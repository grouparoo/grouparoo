import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { test } from "../lib/test";
import { destinationOptions } from "../lib/export/destinationOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportRecord } from "../lib/export/exportRecord";

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
      icon: "/public/@grouparoo/klaviyo/klaviyo.png",
      apps: [
        {
          name: "klaviyo",
          displayName: "Klaviyo",
          options: [
            {
              key: "privateToken",
              displayName: "Private API Key (e.g. pk_abcdef123456789)",
              type: "password",
              required: true,
              description: "Klaviyo Private Token",
            },
            {
              key: "publicToken",
              displayName: "Public API Key / Site ID (e.g. PIWjoN)",
              type: "text",
              required: true,
              description: "Klaviyo Public Token",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "klaviyo-export-profiles",
          displayName: "Klaviyo Export Profiles",
          direction: "export",
          description: "Export records to Klaviyo as Profiles",
          apps: ["klaviyo"],
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

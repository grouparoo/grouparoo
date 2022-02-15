import path from "path";
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
    const syncModes: DestinationSyncMode[] = ["sync", "additive"];
    const defaultSyncMode: DestinationSyncMode = "sync";

    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/vero/vero.png",
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
          name: "vero-export-customers",
          displayName: "Vero Export Customer",
          direction: "export",
          description: "Export records to Vero as Customers",
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

import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";
import { test } from "../lib/test";
import { exportRecords } from "../lib/export/exportRecords";
import { processExportedRecords } from "../lib/export/processExportedRecords";
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
      icon: "/public/@grouparoo/eloqua/eloqua.png",
      apps: [
        {
          name: "eloqua",
          displayName: "Eloqua",
          options: [
            {
              key: "siteName",
              displayName: "Site Name",
              required: true,
              description: "Eloqua Site Name",
            },
            {
              key: "userName",
              displayName: "User Name",
              required: true,
              description: "Eloqua User Name",
            },
            {
              key: "password",
              displayName: "Password",
              type: "password",
              required: true,
              description: "Eloqua Password",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "eloqua-export-contacts",
          displayName: "Eloqua Export Contacts",
          direction: "export",
          description: "Export records to Eloqua as Contacts",
          apps: ["eloqua"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecords,
            processExportedRecords,
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

import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";
import { exportRecords } from "../lib/export/exportRecords";
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
      icon: "/public/@grouparoo/marketo/marketo.png",
      apps: [
        {
          name: "marketo",
          displayName: "Marketo",
          options: [
            {
              key: "endpoint",
              displayName: "Endpoint",
              required: true,
              description: "Found in Marketo Web Services.",
              placeholder: "https://123-ABC-456.mktorest.com/rest",
            },
            {
              key: "identity",
              displayName: "Identity",
              required: true,
              description: "Found in Marketo Web Services.",
              placeholder: "https://123-ABC-456.mktorest.com/identity",
            },
            {
              key: "clientId",
              displayName: "Client ID",
              required: true,
              description: "Found in LaunchPoint for an API user.",
            },
            {
              key: "clientSecret",
              type: "password",
              displayName: "Client Secret",
              required: true,
              description: "Found in LaunchPoint for an API user.",
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [
        {
          name: "marketo-export-leads",
          displayName: "Marketo Export Leads",
          direction: "export",
          description: "Export Records to a Marketo account.",
          apps: ["marketo"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecords,
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

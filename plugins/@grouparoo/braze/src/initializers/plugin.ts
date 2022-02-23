import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { test } from "./../lib/test";
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
      icon: "/public/@grouparoo/braze/braze.png",
      apps: [
        {
          name: "braze",
          displayName: "Braze",
          options: [
            {
              key: "apiKey",
              type: "password",
              displayName: "Braze API Key",
              required: true,
              description:
                "Braze REST API key. It can be found under the Developer Console (bottom of the left side menu) on the Braze dashboard. Users and Campaigns permissions are needed.",
            },
            {
              key: "restEndpoint",
              displayName: "Braze REST Endpoint",
              required: true,
              description:
                "Braze REST Endpoint. It uses the same instance number as the dashboard (i.e. if the dashboard URL is dashboard-01.braze.com the REST endpoint will be rest.iad-01.braze.com)",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "braze-export-users",
          displayName: "Braze Export Users",
          direction: "export",
          description:
            "Export Users to Braze and add them to Subscription Groups.",
          apps: ["braze"],
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

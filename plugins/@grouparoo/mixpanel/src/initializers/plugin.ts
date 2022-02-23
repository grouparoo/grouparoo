import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { test } from "../lib/test";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";
import { exportRecords } from "../lib/export/exportRecords";

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
      icon: "/public/@grouparoo/mixpanel/mixpanel.svg",
      apps: [
        {
          name: "mixpanel",
          displayName: "Mixpanel",
          options: [
            {
              key: "token",
              displayName: "Token",
              required: true,
              description: "Mixpanel API Token",
            },
            {
              key: "username",
              displayName: "User Name",
              required: true,
              description: "Mixpanel API Service Account Username",
            },
            {
              key: "secret",
              displayName: "Secret",
              type: "password",
              required: true,
              description: "Mixpanel API Service Account Secret",
            },
            {
              key: "projectId",
              displayName: "Project Id",
              required: true,
              description: "Mixpanel project id",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "mixpanel-export-profiles",
          displayName: "Mixpanel Export Profiles",
          direction: "export",
          description: "Export Records to Mixpanel as User Profiles",
          apps: ["mixpanel"],
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

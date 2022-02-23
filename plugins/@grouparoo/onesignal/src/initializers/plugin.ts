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
    const syncModes: DestinationSyncMode[] = ["update"];
    const defaultSyncMode: DestinationSyncMode = "update";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/onesignal/onesignal.png",
      apps: [
        {
          name: "onesignal",
          displayName: "OneSignal",
          options: [
            {
              key: "appId",
              displayName: "App ID",
              required: true,
              description:
                "OneSignal App ID. Found in the app's Settings > Keys & IDs.",
            },
            {
              key: "apiKey",
              type: "password",
              displayName: "API Key",
              required: true,
              description:
                "OneSignal REST API Key. Found in the app's Settings > Keys & IDs.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "onesignal-export-users",
          displayName: "OneSignal Export Users",
          direction: "export",
          description:
            "Enrich OneSignal devices with record and group information as tags",
          apps: ["onesignal"],
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

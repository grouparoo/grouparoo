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
    const syncModes: DestinationSyncMode[] = ["enrich"];
    const defaultSyncMode: DestinationSyncMode = "enrich";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/onesignal/onesignal.png",
      templates: [
        new AppTemplate("onesignal", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "onesignal",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "onesignal",
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
          name: "onesignal-export",
          direction: "export",
          description:
            "Enrich OneSignal devices with profile and group information as tags",
          app: "onesignal",
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

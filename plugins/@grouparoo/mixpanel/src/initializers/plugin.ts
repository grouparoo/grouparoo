import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "../lib/test";

import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";
import { exportRecords } from "../lib/export/exportRecords";

import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

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
      icon: "/public/@grouparoo/mixpanel/mixpanel.svg",
      templates: [
        new AppTemplate("mixpanel", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "mixpanel",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "mixpanel",
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
          name: "mixpanel-export",
          direction: "export",
          description: "Export records to Mixpanel as User Profiles",
          app: "mixpanel",
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

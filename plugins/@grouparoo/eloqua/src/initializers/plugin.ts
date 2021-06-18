import path from "path";
import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";

import { test } from "../lib/test";

import { exportProfiles } from "../lib/export/exportProfiles";
import { processExportedProfiles } from "../lib/export/processExportedProfiles";
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
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    const defaultSyncMode: DestinationSyncMode = "sync";

    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/eloqua/eloqua.png",
      templates: [
        new AppTemplate("eloqua", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "eloqua",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "eloqua",
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
          name: "eloqua-export",
          direction: "export",
          description: "Export profiles to Eloqua as Contacts",
          app: "eloqua",
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportProfiles,
            processExportedProfiles,
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

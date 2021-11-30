import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

import { destinationOptions } from "../lib/common/destinationOptions";
import { exportArrayProperties } from "../lib/common/exportArrayProperties";
import { getDestinationMappingOptions } from "../lib/common/destinationMappingOptions";
import { getExportRecord } from "../lib/common/exportRecord";
import { handlePersonChanges } from "../lib/export-persons/exportRecord";

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
      icon: "/public/@grouparoo/pipedrive/pipedrive.png",
      templates: [
        new AppTemplate("pipedrive", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "pipedrive",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "pipedrive",
          displayName: "Pipedrive",
          options: [
            {
              key: "apiToken",
              displayName: "API Token",
              type: "password",
              required: true,
              description: "Pipedrive API token",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "pipedrive-export-persons",
          displayName: "Pipedrive Export Persons",
          direction: "export",
          description: "Export records to Pipedrive as Person contacts",
          apps: ["pipedrive"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecord: getExportRecord(handlePersonChanges),
            destinationOptions,
            destinationMappingOptions: getDestinationMappingOptions("person"),
            exportArrayProperties,
          },
        },
        {
          name: "pipedrive-export-organizations",
          displayName: "Pipedrive Export Organizations",
          direction: "export",
          description: "Export records to Pipedrive as Organizations",
          apps: ["pipedrive"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecord: getExportRecord(handlePersonChanges),
            destinationOptions,
            destinationMappingOptions:
              getDestinationMappingOptions("organization"),
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

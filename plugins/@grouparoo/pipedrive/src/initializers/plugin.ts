import path from "path";
import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";

import { test } from "./../lib/test";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

import { exportRecord as personExportRecord } from "../lib/export-persons/exportRecord";
import { destinationOptions as personDestinationOptions } from "../lib/export-persons/destinationOptions";
import { destinationMappingOptions as personDestinationMappingOptions } from "../lib/export-persons/destinationMappingOptions";
import { exportArrayProperties as personExportArrayProperties } from "../lib/export-persons/exportArrayProperties";

import { exportRecord as orgExportRecord } from "../lib/export-organizations/exportRecord";
import { destinationOptions as orgDestinationOptions } from "../lib/export-organizations/destinationOptions";
import { destinationMappingOptions as orgDestinationMappingOptions } from "../lib/export-organizations/destinationMappingOptions";
import { exportArrayProperties as orgExportArrayProperties } from "../lib/export-organizations/exportArrayProperties";

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
            exportRecord: personExportRecord,
            destinationOptions: personDestinationOptions,
            destinationMappingOptions: personDestinationMappingOptions,
            exportArrayProperties: personExportArrayProperties,
          },
        },
        {
          name: "pipedrive-export-organizations",
          displayName: "Pipedrive Export Organizations",
          direction: "export",
          description: "Export records to Pipedrive as Organization",
          apps: ["pipedrive"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecord: orgExportRecord,
            destinationOptions: orgDestinationOptions,
            destinationMappingOptions: orgDestinationMappingOptions,
            exportArrayProperties: orgExportArrayProperties,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

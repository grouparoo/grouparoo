import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { test } from "../lib/test";
import { parallelism } from "../lib/parallelism";
import { destinationOptions } from "../lib/common/destinationOptions";
import { exportArrayProperties } from "../lib/common/exportArrayProperties";
import { getDestinationMappingOptions } from "../lib/common/destinationMappingOptions";
import { exportPersonRecord } from "../lib/export-persons/exportRecord";
import { exportOrganizationRecord } from "../lib/export-organizations/exportRecord";

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
      icon: "/public/@grouparoo/pipedrive/pipedrive.png",
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
          methods: { test, parallelism },
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
            exportRecord: exportPersonRecord,
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
            exportRecord: exportOrganizationRecord,
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

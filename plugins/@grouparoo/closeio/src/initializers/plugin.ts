import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";
import { exportLeadRecord } from "../lib/export-leads/exportRecord";
import { destinationOptions } from "../lib/common/destinationOptions";
import { exportArrayProperties } from "../lib/common/exportArrayProperties";
import { leadDestinationMappingOptions } from "../lib/export-leads/destinationMappingOptions";
import { exportContactRecord } from "../lib/export-contacts/exportRecord";
import { contactDestinationMappingOptions } from "../lib/export-contacts/destinationMappingOptions";

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
      icon: "/public/@grouparoo/closeio/closeio.png",
      templates: [
        new AppTemplate("closeio", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "closeio",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "closeio",
          displayName: "Close.io",
          options: [
            {
              key: "apiKey",
              displayName: "API Key",
              type: "password",
              required: true,
              description: "Close.io API Key",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "closeio-export-leads",
          displayName: "Close.io Export Leads",
          direction: "export",
          description: "Export records to Close.io as Leads",
          apps: ["closeio"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecord: exportLeadRecord,
            destinationOptions,
            destinationMappingOptions: leadDestinationMappingOptions,
            exportArrayProperties,
          },
        },
        {
          name: "closeio-export-contacts",
          displayName: "Close.io Export Contacts",
          direction: "export",
          description: "Export records to Close.io as Contacts",
          apps: ["closeio"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecord: exportContactRecord,
            destinationOptions,
            destinationMappingOptions: contactDestinationMappingOptions,
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

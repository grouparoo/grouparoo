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
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    const defaultSyncMode: DestinationSyncMode = "sync";

    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/mailjet/mailjet.png",
      apps: [
        {
          name: "mailjet",
          displayName: "Mailjet",
          options: [
            {
              key: "apiKey",
              type: "password",
              displayName: "Mailjet API Key",
              required: true,
              description: "Mailjet apiKey.",
            },
            {
              key: "apiSecret",
              type: "password",
              displayName: "Mailjet API Secret",
              required: true,
              description: "Mailjet API Secret.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "mailjet-export-contacts",
          displayName: "Mailjet Export Contacts",
          direction: "export",
          description:
            "Export Records to Mailjet and add them to Contact Lists.",
          apps: ["mailjet"],
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

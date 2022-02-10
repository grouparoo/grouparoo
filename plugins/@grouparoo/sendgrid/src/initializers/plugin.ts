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
      icon: "/public/@grouparoo/sendgrid/sendgrid.png",
      apps: [
        {
          name: "sendgrid",
          displayName: "SendGrid",
          options: [
            {
              key: "apiKey",
              type: "password",
              displayName: "Sendgrid API Key",
              required: true,
              description:
                "Sendgrid api key. The api keys can be managed here: https://app.sendgrid.com/settings/api_keys",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "sendgrid-export-marketing-contacts",
          displayName: "SendGrid Export Marketing Contacts",
          direction: "export",
          description:
            "Export records to Sendgrid marketing as Contacts and put them in static Lists.",
          apps: ["sendgrid"],
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

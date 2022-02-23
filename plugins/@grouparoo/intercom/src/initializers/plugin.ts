import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";
import { test } from "./../lib/test";
import { exportRecord } from "../lib/export-contacts/exportRecord";
import { destinationOptions } from "../lib/export-contacts/destinationOptions";
import { destinationMappingOptions } from "../lib/export-contacts/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export-contacts/exportArrayProperties";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    const syncModes: DestinationSyncMode[] = ["sync", "upsert", "update"];

    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/intercom/intercom.png",
      apps: [
        {
          name: "intercom",
          displayName: "Intercom",
          options: [
            {
              key: "token",
              type: "password",
              displayName: "Access Token",
              required: true,
              description:
                "Access token from your private app in the developer hub",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "intercom-export-contacts",
          displayName: "Intercom Export Contacts",
          direction: "export",
          description: "Export Records to contacts in an Intercom account.",
          apps: ["intercom"],
          syncModes,
          options: [
            {
              key: "creationMode",
              displayName: "Creation",
              required: false,
              description: "How should Grouparoo create Intercom contacts?",
            },
            {
              key: "removalMode",
              displayName: "Removal",
              required: false,
              description: "How should Grouparoo remove Intercom contacts?",
            },
          ],
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

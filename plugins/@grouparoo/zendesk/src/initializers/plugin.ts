import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";
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
    const defaultSyncMode: DestinationSyncMode = "sync";
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/zendesk/zendesk.png",
      apps: [
        {
          name: "zendesk",
          displayName: "Zendesk",
          options: [
            {
              key: "subdomain",
              displayName: "Zendesk Subdomain",
              required: true,
              description: "The `companyname` in companyname.zendesk.com.",
            },
            {
              key: "username",
              displayName: "User Name",
              required: true,
              description:
                "Zendesk username, often the email address of an admin user.",
            },
            {
              key: "token",
              type: "password",
              displayName: "API Token",
              required: true,
              description: "Zendesk api token for the admin user.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "zendesk-export-users",
          displayName: "Zendesk Export Users",
          direction: "export",
          description: "Export Records to a Zendesk account.",
          apps: ["zendesk"],
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

import path from "path";
import { Initializer } from "actionhero";
import { plugin, DestinationSyncMode } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportRecord } from "../lib/export/exportRecord";
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
    const defaultSyncMode: DestinationSyncMode = "sync";
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/zendesk/zendesk.png",
      templates: [
        new AppTemplate("zendesk", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "zendesk",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "zendesk",
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
          name: "zendesk-export",
          direction: "export",
          description: "Export Profiles to a Zendesk account.",
          app: "zendesk",
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

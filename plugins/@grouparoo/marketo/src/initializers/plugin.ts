import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import { exportRecords } from "../lib/export/exportRecords";
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
      icon: "/public/@grouparoo/marketo/marketo.png",
      templates: [
        new AppTemplate("marketo", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "marketo",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "marketo",
          options: [
            {
              key: "endpoint",
              displayName: "Endpoint",
              required: true,
              description: "Found in Marketo Web Services.",
              placeholder: "https://123-ABC-456.mktorest.com/rest",
            },
            {
              key: "identity",
              displayName: "Identity",
              required: true,
              description: "Found in Marketo Web Services.",
              placeholder: "https://123-ABC-456.mktorest.com/identity",
            },
            {
              key: "clientId",
              displayName: "Client ID",
              required: true,
              description: "Found in LaunchPoint for an API user.",
            },
            {
              key: "clientSecret",
              type: "password",
              displayName: "Client Secret",
              required: true,
              description: "Found in LaunchPoint for an API user.",
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [
        {
          name: "marketo-export",
          direction: "export",
          description: "Export Profiles to a Marketo account.",
          app: "marketo",
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecords,
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

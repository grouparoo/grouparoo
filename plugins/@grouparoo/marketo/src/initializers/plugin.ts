import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";
import { appOptions } from "../lib/appOptions";

import { exportProfiles } from "../lib/export/exportProfiles";
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
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/marketo/marketo.png",
      templates: [
        new AppTemplate("marketo", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("marketo", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
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
              displayName: "Client Secret",
              required: true,
              description: "Found in LaunchPoint for an API user.",
            },
          ],
          methods: { test, parallelism, appOptions },
        },
      ],
      connections: [
        {
          name: "marketo-export",
          direction: "export",
          description: "Export Profiles to a Marketo account.",
          app: "marketo",
          options: [],
          methods: {
            exportProfiles,
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

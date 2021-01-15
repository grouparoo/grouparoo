import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportProfile } from "../lib/export-contacts/exportProfile";
import { destinationOptions } from "../lib/export-contacts/destinationOptions";
import { destinationMappingOptions } from "../lib/export-contacts/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export-contacts/exportArrayProperties";

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
      icon: "/public/@grouparoo/intercom/intercom.png",
      templates: [
        new AppTemplate("intercom", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("intercom", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "intercom",
          options: [
            {
              key: "token",
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
          direction: "export",
          description: "Export Profiles to contacts in an Intercom account.",
          app: "intercom",
          options: [
            {
              key: "creationMode",
              displayName: "Creation",
              required: true,
              description: "How should Grouparoo create Intercom contacts?",
            },
            {
              key: "removalMode",
              displayName: "Removal",
              required: true,
              description: "How should Grouparoo remove Intercom contacts?",
            },
          ],
          methods: {
            exportProfile,
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

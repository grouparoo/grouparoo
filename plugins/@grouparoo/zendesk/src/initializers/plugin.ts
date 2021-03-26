import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { appOptions } from "../lib/appOptions";

import { exportProfile } from "../lib/export/exportProfile";
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
      icon: "/public/@grouparoo/zendesk/zendesk.svg",
      templates: [
        new AppTemplate("zendesk", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("zendesk", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
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
              displayName: "API Token",
              required: true,
              description: "Zendesk api token for the admin user.",
            },
          ],
          methods: { test, appOptions },
        },
      ],
      connections: [
        {
          name: "zendesk-export",
          direction: "export",
          description: "Export Profiles to a Zendesk account.",
          app: "zendesk",
          options: [],
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

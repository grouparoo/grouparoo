import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

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
      icon: "/public/@grouparoo/pardot/pardot.png",
      templates: [
        new AppTemplate("pardot", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("pardot", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "pardot",
          options: [
            {
              key: "username",
              displayName: "Username",
              required: true,
              description: "Email for logging into Salesforce",
            },
            {
              key: "password",
              displayName: "Password",
              required: true,
              description: "Password for logging into Salesforce",
            },
            {
              key: "securityToken",
              displayName: "Security Token",
              required: false,
              description:
                "To get a new security token, click on 'Reset My Security Token' in `personal settings`",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "pardot-export",
          direction: "export",
          description:
            "Export Profiles and Groups to Pardot as Prospects and Lists",
          app: "pardot",
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

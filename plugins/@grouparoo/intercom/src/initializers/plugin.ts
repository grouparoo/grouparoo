import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportProfile } from "../lib/export/exportProfile";
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
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/intercom/intercom.png",
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
          name: "intercom-export-users",
          direction: "export",
          description: "Export Profiles to Users in an Intercom account.",
          app: "intercom",
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

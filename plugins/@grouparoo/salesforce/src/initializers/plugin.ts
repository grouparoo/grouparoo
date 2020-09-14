import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import { exportProfiles } from "../lib/export/exportProfiles";
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
      icon: "/public/@grouparoo/salesforce/salesforce.png",
      apps: [
        {
          name: "salesforce",
          options: [
            {
              key: "username",
              required: true,
              description: "Your email address for logging into Salesforce",
            },
            {
              key: "password",
              required: true,
              description: "Your password for logging into Salesforce",
            },
            {
              key: "securityToken",
              required: false,
              description:
                "To get a new security token, click on 'Reset My Security Token' in your personal settings",
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [
        {
          name: "salesforce-export",
          direction: "export",
          description: "export profiles to a salesforce account",
          app: "salesforce",
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

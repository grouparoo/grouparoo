import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import { exportProfiles } from "../lib/export-objects/exportProfiles";
import { destinationOptions } from "../lib/export-objects/destinationOptions";
import { destinationMappingOptions } from "../lib/export-objects/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export-objects/exportArrayProperties";

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
          name: "salesforce-objects-export",
          direction: "export",
          description: "Export profiles to a Salesforce sales cloud objects",
          app: "salesforce",
          options: [
            {
              key: "profileObject",
              required: true,
              description:
                "What object in Salesforce maps to a Grouparoo profile?",
            },
            {
              key: "profileFieldMatch",
              required: true,
              description:
                "What field in the Object represents how to match Grouparoo profiles?",
            },
          ],
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

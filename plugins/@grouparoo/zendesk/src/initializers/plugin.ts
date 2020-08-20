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
      icon: "/public/@grouparoo/zendesk/zendesk.svg",
      apps: [
        {
          name: "zendesk",
          options: [
            {
              key: "subdomain",
              required: true,
              description: "the companyname in companyname.zendesk.com",
            },
            {
              key: "username",
              required: true,
              description:
                "your zendesk username, often the email address of an admin",
            },
            {
              key: "token",
              required: true,
              description: "your zendesk api token for the admin user",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "zendesk-export",
          direction: "export",
          description: "export profiles to a zendesk account",
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

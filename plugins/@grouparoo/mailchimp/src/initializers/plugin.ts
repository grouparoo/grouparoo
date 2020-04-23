import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

import { exportProfile } from "../lib/export/exportProfile";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/mailchimp/mailchimp.svg",
      apps: [
        {
          name: "mailchimp",
          options: [
            {
              key: "apiKey",
              required: true,
              description: "your mailchimp api key",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "mailchimp-export",
          direction: "export",
          description: "export profiles to a mailchimp list",
          app: "mailchimp",
          options: [
            {
              key: "listId",
              required: true,
              description: "your mailchimp list id",
            },
          ],
          methods: {
            exportProfile,
            destinationOptions,
            destinationMappingOptions,
          },
        },
      ],
    });
  }
}

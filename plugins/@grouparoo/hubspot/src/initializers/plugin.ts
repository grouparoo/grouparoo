import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { connect } from "./../lib/connect";

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
      icon: "/public/@grouparoo/hubspot/hubspot.svg",
      apps: [
        {
          name: "hubspot",
          options: [
            {
              key: "hapikey",
              required: true,
              description: "your hubspot hapikey (api) key",
            },
          ],
          methods: { connect, test },
        },
      ],
      connections: [
        {
          name: "hubspot-export",
          direction: "export",
          description: "export profiles to a hubspot contact list",
          app: "hubspot",
          options: [],
          methods: {
            exportProfile,
            destinationOptions,
            destinationMappingOptions,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

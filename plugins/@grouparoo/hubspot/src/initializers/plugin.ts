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
      icon: "/public/@grouparoo/hubspot/hubspot.svg",
      apps: [
        {
          name: "hubspot",
          options: [
            {
              key: "hapikey",
              required: true,
              description: "Hubspot hapikey (api) key.",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "hubspot-export",
          direction: "export",
          description:
            "Export Profiles to Hubspot and add them to Contact Lists.",
          app: "hubspot",
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

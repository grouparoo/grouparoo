import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";

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
      icon: "/public/@grouparoo/facebook/facebook.png",
      apps: [
        {
          name: "facebook",
          options: [
            {
              key: "adAccountId",
              displayName: "Ad Account Id",
              required: true,
              description: "Number from your settings and in the URL",
              placeholder: "i.e. 562677826929881",
            },
            {
              key: "accessToken",
              displayName: "Access Token",
              required: true,
              description: "TODO",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "facebook-audiences-custom",
          direction: "export",
          description: "Export to Facebook Custom Audiences",
          app: "facebook",
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

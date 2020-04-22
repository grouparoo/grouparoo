import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { appOptions } from "./../lib/appOptions";
import { exportProfile } from "./../lib/export/exportProfile";
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
      icon: "/public/@grouparoo/logger/log.svg",
      apps: [
        {
          name: "logger",
          options: [
            {
              key: "filename",
              required: true,
              description: "the name of the file to log to, in /log",
            },
            {
              key: "stdout",
              required: false,
              description: "set to 'true' to also log to Grouparoo's console",
              placeholder: "true",
            },
          ],
          methods: { test, appOptions },
        },
      ],
      connections: [
        {
          name: "logger-export",
          direction: "export",
          description: "export profiles to a log file for debugging",
          app: "logger",
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
}

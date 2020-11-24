import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { appOptions } from "./../lib/appOptions";
import { exportProfiles } from "./../lib/export/exportProfiles";
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
      icon: "/public/@grouparoo/logger/log.svg",
      apps: [
        {
          name: "logger",
          options: [
            {
              key: "filename",
              displayName: "File Name",
              required: true,
              description: "The name of the file to log to, in /log.",
              placeholder: "/path/to/grouparoo.log",
            },
            {
              key: "stdout",
              displayName: "Write to STDOUT?",
              required: false,
              description: "Set to 'true' to also log to Grouparoo's console.",
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
          description: "Export Profiles to a log file as JSON.",
          app: "logger",
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

import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { appOptions } from "./../lib/appOptions";
import { exportRecords } from "./../lib/export/exportRecords";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

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
      templates: [
        new AppTemplate("logger", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate("logger", [
          path.join(templateRoot, "destination", "*.template"),
        ]),
      ],
      apps: [
        {
          name: "logger",
          options: [
            {
              key: "filename",
              displayName: "File Name",
              required: true,
              description:
                "The name of the file to log to, relative to your application root.",
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
            exportRecords,
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

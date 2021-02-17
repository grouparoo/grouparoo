import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { sourceOptions } from "../lib/file-import/sourceOptions";
import { sourcePreview } from "../lib/file-import/sourcePreview";
import { profiles } from "../lib/file-import/profiles";
import { propertyOptions } from "../lib/file-import/propertyOptions";
import { sourceRunPercentComplete } from "../lib/file-import/sourceRunPercentComplete";

import {
  CSVAppTemplate,
  CSVSourceTemplate,
  CSVPropertyTemplate,
} from "../lib/templates";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/csv/csv.svg",
      templates: [CSVAppTemplate, CSVSourceTemplate, CSVPropertyTemplate],
      apps: [
        {
          name: "csv",
          options: [],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "csv-file-import",
          direction: "import",
          description: "Import or update Profiles from an uploaded CSV.",
          app: "csv",
          options: [
            {
              key: "fileId",
              displayName: "File Id",
              required: true,
              description:
                "The fileId from a file previously uploaded to Grouparoo.",
            },
          ],
          scheduleOptions: [],
          propertyOptions,
          methods: {
            sourceOptions,
            sourcePreview,
            profiles,
            sourceRunPercentComplete,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

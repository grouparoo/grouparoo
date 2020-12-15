import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { sourceOptions } from "../lib/file-import/sourceOptions";
import { sourcePreview } from "../lib/file-import/sourcePreview";
import { profiles } from "../lib/file-import/profiles";
import { propertyOptions } from "../lib/file-import/propertyOptions";
import { sourceRunPercentComplete } from "../lib/file-import/sourceRunPercentComplete";

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
              key: "fileGuid",
              displayName: "File Guid",
              required: true,
              description:
                "The fileGuid from a file previously uploaded to Grouparoo.",
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

import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { sourcePreview } from "../lib/sheet-import/sourcePreview";
import { profiles } from "../lib/sheet-import/profiles";
import { propertyOptions } from "../lib/sheet-import/propertyOptions";
import { sourceRunPercentComplete } from "../lib/sheet-import/sourceRunPercentComplete";

import {
  GoogleSheetAppTemplate,
  GoogleSheetSourceTemplate,
  GoogleSheetScheduleTemplate,
  GoogleSheetPropertyTemplate,
} from "../lib/sheet-import/templates";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/google-sheets/google-sheets.png",
      templates: [
        GoogleSheetAppTemplate,
        GoogleSheetSourceTemplate,
        GoogleSheetScheduleTemplate,
        GoogleSheetPropertyTemplate,
      ],
      apps: [
        {
          name: "google-sheets",
          options: [
            {
              key: "client_email",
              displayName: "Client Email Address",
              required: true,
              description: "Email of service account.",
              placeholder:
                "e.g. grouparoo-access@grouparoo-sources.iam.gserviceaccount.com",
            },
            {
              key: "private_key",
              displayName: "Private Key",
              required: true,
              description: "Private key of service account.",
              placeholder: "e.g. -----BEGIN PRIVATE KEY-----\nMII ...",
            },
          ],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "google-sheet-import",
          direction: "import",
          description: "Import or update Profiles from a Google Sheet.",
          app: "google-sheets",
          options: [
            {
              key: "sheet_url",
              displayName: "Google Sheet URL",
              required: true,
              description: "The url of the Google Sheet.",
            },
          ],
          propertyOptions,
          methods: {
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

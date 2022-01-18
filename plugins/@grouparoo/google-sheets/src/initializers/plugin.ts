import { Initializer } from "actionhero";
import { AggregationMethod, plugin } from "@grouparoo/core";

import { test } from "../lib/test";

import { sourcePreview } from "../lib/sheet-import/sourcePreview";
import { records } from "../lib/sheet-import/records";
import { propertyOptions } from "../lib/sheet-import/propertyOptions";
import { uniquePropertyBootstrapOptions } from "@grouparoo/csv/dist/lib/uniquePropertyBootstrapOptions";
import { sourceRunPercentComplete } from "../lib/sheet-import/sourceRunPercentComplete";
import { recordProperty } from "../lib/sheet-import/recordProperty";
import { recordProperties } from "../lib/sheet-import/recordProperties";

import {
  GoogleSheetAppTemplate,
  GoogleSheetSourceTemplate,
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
        GoogleSheetPropertyTemplate,
      ],
      apps: [
        {
          name: "google-sheets",
          displayName: "Google Sheets",
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
              type: "password",
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
          displayName: "Google Sheets Import",
          direction: "import",
          description: "Import or update Records from a Google Sheet.",
          supportIncrementalSchedule: false,
          apps: ["google-sheets"],
          groupAggregations: [AggregationMethod.Exact],
          options: [
            {
              key: "sheet_url",
              displayName: "Google Sheet URL",
              required: true,
              description:
                "The url of the Google Sheet, with the gid (tab) included.",
            },
          ],
          methods: {
            sourcePreview,
            propertyOptions,
            records,
            sourceRunPercentComplete,
            uniquePropertyBootstrapOptions,
            recordProperty,
            recordProperties,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "../lib/test";

import {
  GoogleSheetAppTemplate,
  GoogleSheetPropertyTemplate,
  GoogleSheetSourceTemplate,
} from "../lib/sheet-import/templates";
import { sourceConnection } from "../lib/sheet-import/connection";
import { destinationConnection } from "../lib/sheet-export/connection";

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
      connections: [sourceConnection, destinationConnection],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

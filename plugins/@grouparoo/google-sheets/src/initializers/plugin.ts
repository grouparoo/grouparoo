import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { sourcePreview } from "../lib/sheet-import/sourcePreview";
import { profiles } from "../lib/sheet-import/profiles";
import { profileProperty } from "../lib/sheet-import/profileProperty";
import { profilePropertyRuleOptions } from "../lib/sheet-import/profilePropertyRuleOptions";
import { sourceRunPercentComplete } from "../lib/sheet-import/sourceRunPercentComplete";

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
          profilePropertyRuleOptions,
          methods: {
            sourcePreview,
            profiles,
            profileProperty,
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

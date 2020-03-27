import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { sourceOptions } from "../lib/file-import/sourceOptions";
import { sourcePreview } from "../lib/file-import/sourcePreview";
import { profiles } from "../lib/file-import/profiles";
import { profileProperty } from "../lib/file-import/profileProperty";
import { profilePropertyRuleOptions } from "../lib/file-import/profilePropertyRuleOptions";

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
              required: true,
              description: "email of service account",
              placeholder:
                "e.g. grouparoo-access@grouparoo-sources.iam.gserviceaccount.com",
            },
            {
              key: "private_key",
              required: true,
              description: "private key of service account",
              placeholder: "e.g. -----BEGIN PRIVATE KEY-----\nMII ...",
            },
          ],
          test,
        },
      ],
      connections: [
        {
          name: "google-sheet-import",
          direction: "import",
          description: "import or update profiles from a Google Sheet",
          app: "google-sheet",
          options: [
            {
              key: "sheet_url",
              required: true,
              description: "the url of the google sheet",
            },
          ],
          profilePropertyRuleOptions,
          methods: {
            sourceOptions,
            sourcePreview,
            profiles,
            profileProperty,
          },
        },
      ],
    });
  }
}

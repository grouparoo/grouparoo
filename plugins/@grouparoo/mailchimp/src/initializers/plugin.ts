import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import { emailDestinationConnection } from "../lib/export/connection";
import { idDestinationConnection } from "../lib/export-id/connection";
import importSource from "../lib/import/connection";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/mailchimp/mailchimp.svg",
      apps: [
        {
          name: "mailchimp",
          displayName: "Mailchimp",
          options: [
            {
              key: "apiKey",
              type: "password",
              displayName: "API Key",
              required: true,
              description: "Mailchimp api key.",
            },
          ],
          methods: { test, parallelism },
        },
        {
          name: "mailchimp-oauth",
          displayName: "Mailchimp (OAuth)",
          options: [
            {
              key: "oAuthToken",
              type: "oauth-token",
              displayName: "OAuth Access Token",
              required: true,
              description:
                'Mailchimp OAuth access token. Click the "Sign in with OAuth" button above to automatically fill it in.',
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [
        importSource,
        emailDestinationConnection,
        idDestinationConnection,
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

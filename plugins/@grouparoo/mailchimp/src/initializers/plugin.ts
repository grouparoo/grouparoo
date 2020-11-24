import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import emailDestination from "../lib/export/connection";
import idDestination from "../lib/export-id/connection";
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
          options: [
            {
              key: "apiKey",
              displayName: "API Key",
              required: true,
              description: "Mailchimp api key.",
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [importSource, emailDestination, idDestination],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

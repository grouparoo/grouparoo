import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import emailDestination from "../lib/export/connection";
import extidDestination from "../lib/export-external-id/connection";

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
              required: true,
              description: "Mailchimp api key.",
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [emailDestination, extidDestination],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

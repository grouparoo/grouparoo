import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";
import { appOptions } from "../lib/appOptions";

import emailDestination from "../lib/export/connection";
import idDestination from "../lib/export-id/connection";
import importSource from "../lib/import/connection";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import {
  MailchimpAppTemplate,
  MailchimpSourceTemplate,
  MailchimpPropertyTemplate,
} from "../lib/templates";
import { DestinationTemplate } from "../../../app-templates/dist/destination/templates";

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
      templates: [
        MailchimpAppTemplate,
        MailchimpSourceTemplate,
        MailchimpPropertyTemplate,
        new DestinationTemplate(
          "mailchimp:email",
          [path.join(templateRoot, "destination", "email", "*.template")],
          ["sync", "additive", "enrich"]
        ),
        new DestinationTemplate(
          "mailchimp:id",
          [path.join(templateRoot, "destination", "id", "*.template")],
          ["enrich"]
        ),
      ],
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
          methods: { test, parallelism, appOptions },
        },
      ],
      connections: [importSource, emailDestination, idDestination],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

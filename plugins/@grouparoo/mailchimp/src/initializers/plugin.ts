import path from "path";
import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";
import { appOptions } from "../lib/appOptions";

import {
  emailDestination,
  emailSupportedSyncModes,
} from "../lib/export/connection";
import {
  idDestination,
  idSupportedSyncModes,
} from "../lib/export-id/connection";
import importSource from "../lib/import/connection";

import {
  MailchimpAppTemplate,
  MailchimpSourceTemplate,
  MailchimpPropertyTemplate,
} from "../lib/templates";
import { DestinationTemplate } from "../../../app-templates/dist/destination/templates";

const packageJSON = require("./../../package.json");
const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

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
          emailSupportedSyncModes
        ),
        new DestinationTemplate(
          "mailchimp:id",
          [path.join(templateRoot, "destination", "id", "*.template")],
          idSupportedSyncModes
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

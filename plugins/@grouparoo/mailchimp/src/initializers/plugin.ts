import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import {
  emailDestinationConnection,
  emailSupportedSyncModes,
} from "../lib/export/connection";
import {
  idDestinationConnection,
  idSupportedSyncModes,
} from "../lib/export-id/connection";
import importSource from "../lib/import/connection";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";
import {
  MailchimpAppTemplate,
  MailchimpSourceTemplate,
  MailchimpPropertyTemplate,
} from "../lib/templates";

const packageJSON = require("./../../package.json");
const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    const defaultSyncMode: DestinationSyncMode = "sync";

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
          emailSupportedSyncModes,
          defaultSyncMode
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
              key: "accessToken",
              type: "oauth-token",
              displayName: "OAuth Access Token",
              required: true,
              description: "Mailchimp OAuth access token.",
            },
            {
              key: "datacenter",
              type: "text",
              displayName: "Datacenter",
              required: true,
              description: "Datacenter, used to determine the base URI.",
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

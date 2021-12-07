import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import {
  contactsDestinationConnection,
  contactsSupportedSyncModes,
} from "../lib/export-contacts/connection";
import {
  objectsDestinationConnection,
  objectsSupportedSyncModes,
} from "../lib/export-objects/connection";
import {
  accountsDestinationConnection,
  accountsSupportedSyncModes,
} from "../lib/export-account/connection";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/salesforce/salesforce.png",
      templates: [
        new AppTemplate("salesforce", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "salesforce:objects",
          [path.join(templateRoot, "destination", "objects", "*.template")],
          objectsSupportedSyncModes
        ),
        new DestinationTemplate(
          "salesforce:contacts",
          [path.join(templateRoot, "destination", "contacts", "*.template")],
          contactsSupportedSyncModes
        ),
        new DestinationTemplate(
          "salesforce:accounts",
          [path.join(templateRoot, "destination", "accounts", "*.template")],
          accountsSupportedSyncModes
        ),
      ],
      apps: [
        {
          name: "salesforce",
          displayName: "Salesforce",
          options: [
            {
              key: "username",
              displayName: "User Name",
              required: true,
              description: "Email address for logging into Salesforce",
            },
            {
              key: "password",
              type: "password",
              displayName: "Password",
              required: true,
              description: "Password for logging into Salesforce",
            },
            {
              key: "securityToken",
              type: "password",
              displayName: "Security Token",
              required: false,
              description:
                "To get a new security token, click on 'Reset My Security Token' in `personal settings`",
            },
            {
              key: "salesforceDomain",
              displayName: "Salesforce Domain",
              defaultValue: "https://login.salesforce.com",
              required: false,
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [
        accountsDestinationConnection,
        contactsDestinationConnection,
        objectsDestinationConnection,
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

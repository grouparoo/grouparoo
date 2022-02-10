import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";
import { contactsDestinationConnection } from "../lib/export-contacts/connection";
import { objectsDestinationConnection } from "../lib/export-objects/connection";
import { accountsDestinationConnection } from "../lib/export-account/connection";

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

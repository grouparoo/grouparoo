import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";
import { parallelism } from "../lib/parallelism";
import { test } from "../lib/test";
import { contactsDestinationConnection } from "../lib/export-contacts/connection";
import { objectsDestinationConnection } from "../lib/export-objects/connection";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/hubspot/hubspot.png",
      apps: [
        {
          name: "hubspot",
          displayName: "HubSpot",
          options: [
            {
              key: "hapikey",
              type: "password",
              displayName: "Hubspot API Key",
              required: true,
              description: "Hubspot hapikey (api) key.",
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [
        contactsDestinationConnection,
        objectsDestinationConnection,
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

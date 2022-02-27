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
              displayName: "HubSpot API Key",
              required: true,
              description:
                "HubSpot API key. You can get the API key in HubSpot under Settings > Integrations > API Key.",
            },
          ],
          methods: { test, parallelism },
        },
        {
          name: "hubspot-oauth",
          displayName: "HubSpot (OAuth)",
          options: [
            {
              key: "refreshToken",
              type: "oauth-token",
              displayName: "OAuth Refresh Token",
              required: true,
              description: "HubSpot OAuth refresh token.",
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

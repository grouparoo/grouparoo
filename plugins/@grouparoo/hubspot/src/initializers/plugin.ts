import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { parallelism } from "../lib/parallelism";
import { test } from "../lib/test";

import {
  contactsDestinationConnection,
  contactsSupportedSyncModes,
} from "../lib/export-contacts/connection";
import {
  objectsDestinationConnection,
  objectsSupportedSyncModes,
} from "../lib/export-objects/connection";

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
    const defaultSyncMode: DestinationSyncMode = "sync";

    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/hubspot/hubspot.png",
      templates: [
        new AppTemplate("hubspot", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "hubspot:contacts",
          [path.join(templateRoot, "destination", "contacts", "*.template")],
          contactsSupportedSyncModes,
          defaultSyncMode
        ),
        new DestinationTemplate(
          "hubspot:objects",
          [path.join(templateRoot, "destination", "objects", "*.template")],
          objectsSupportedSyncModes,
          defaultSyncMode
        ),
      ],
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

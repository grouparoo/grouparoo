import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";
import { appOptions } from "./../lib/appOptions";

import { exportRecords } from "../lib/export/exportRecords";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

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
    const syncModes: DestinationSyncMode[] = ["sync", "additive", "enrich"];
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/pardot/pardot.png",
      templates: [
        new AppTemplate("pardot", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "pardot",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "pardot",
          options: [
            {
              key: "businessUnitId",
              displayName: "Pardot Business Unit ID",
              required: true,
              description: `To find the Pardot Business Unit ID, use Setup in Salesforce.
              From Setup, enter "Pardot Account Setup" in the Quick Find box.
              Your Pardot Business Unit ID begins with "0Uv" and is 18 characters long.`,
            },
            {
              key: "username",
              displayName: "Username",
              required: true,
              description: "Email for logging into Salesforce",
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
                'To get a new security token, click on "Reset My Security Token" in "personal settings"',
            },
            {
              key: "salesforceDomain",
              displayName: "Salesforce Domain",
              defaultValue: "https://login.salesforce.com",
              required: false,
            },
            {
              key: "pardotDomain",
              displayName: "Pardot Domain",
              defaultValue: "https://pi.pardot.com",
              required: false,
            },
          ],
          methods: { test, parallelism, appOptions },
        },
      ],
      connections: [
        {
          name: "pardot-export",
          direction: "export",
          description:
            "Export Profiles and Groups to Pardot as Prospects and Lists",
          app: "pardot",
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecords,
            destinationOptions,
            destinationMappingOptions,
            exportArrayProperties,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

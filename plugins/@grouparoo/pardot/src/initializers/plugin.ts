import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";
import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";
import { appOptions } from "./../lib/appOptions";
import { exportRecords } from "../lib/export/exportRecords";
import { destinationOptions } from "../lib/export/destinationOptions";
import { destinationMappingOptions } from "../lib/export/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export/exportArrayProperties";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    const syncModes: DestinationSyncMode[] = ["sync", "upsert", "update"];
    const defaultSyncMode: DestinationSyncMode = "sync";
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/pardot/pardot.png",
      apps: [
        {
          name: "pardot",
          displayName: "Pardot",
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
          name: "pardot-export-prospects",
          displayName: "Pardot Export Prospects",
          direction: "export",
          description:
            "Export Records and Groups to Pardot as Prospects and Lists",
          apps: ["pardot"],
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

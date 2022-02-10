import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "../lib/test";
import { AppTemplate } from "@grouparoo/app-templates/dist/app";
import { DestinationTemplate } from "@grouparoo/app-templates/dist/destination/templates";
import { connect } from "../lib/connect";
import { disconnect } from "../lib/disconnect";
import { contactDestinationMappingOptions } from "../lib/export-contacts/destinationMappingOptions";
import { exportContactRecord } from "../lib/export-contacts/exportRecord";
import { exportCompanyRecord } from "../lib/export-companies/exportRecord";
import { companyDestinationMappingOptions } from "../lib/export-companies/destinationMappingOptions";
import { contactDestinationOptions } from "../lib/export-contacts/destinationOptions";
import { companyDestinationOptions } from "../lib/export-companies/destinationOptions";
import { exportArrayProperties } from "../lib/common/exportArrayProperties";

const templateRoot = path.join(__dirname, "..", "..", "public", "templates");

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
      icon: "/public/@grouparoo/freshdesk/freshdesk.png",
      templates: [
        new AppTemplate("freshdesk", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "freshdesk",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes,
          defaultSyncMode
        ),
      ],
      apps: [
        {
          name: "freshdesk",
          displayName: "Freshdesk",
          options: [
            {
              key: "domainName",
              displayName: "Domain Name",
              placeholder: "https://domain.freshdesk.com/",
              type: "text",
              required: true,
              description: "Freshdesk Domain Name",
            },
            {
              key: "apiKey",
              displayName: "API Key",
              type: "password",
              required: true,
              description: "Freshdesk API Key",
            },
          ],
          methods: { connect, disconnect, test },
        },
      ],
      connections: [
        {
          name: "freshdesk-export-contacts",
          displayName: "Freshdesk Export Contacts",
          direction: "export",
          description: "Export records to Freshdesk as contacts",
          apps: ["freshdesk"],
          syncModes,
          defaultSyncMode,
          options: [
            {
              key: "primaryKey",
              type: "list",
              description: "Primary Key for Freshdesk contacts",
              displayName: "Primary Key",
              required: true,
              defaultValue: "Email",
            },
          ],
          methods: {
            exportRecord: exportContactRecord,
            destinationOptions: contactDestinationOptions,
            destinationMappingOptions: contactDestinationMappingOptions,
            exportArrayProperties,
          },
        },
        {
          name: "freshdesk-export-companies",
          displayName: "Freshdesk Export Companies",
          direction: "export",
          description: "Export records to Freshdesk as companies",
          apps: ["freshdesk"],
          syncModes,
          defaultSyncMode,
          options: [],
          methods: {
            exportRecord: exportCompanyRecord,
            destinationOptions: companyDestinationOptions,
            destinationMappingOptions: companyDestinationMappingOptions,
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

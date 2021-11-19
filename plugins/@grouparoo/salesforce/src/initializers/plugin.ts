import path from "path";
import { Initializer } from "actionhero";
import { DestinationSyncMode, plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import { exportRecords } from "../lib/export-objects/exportRecords";
import { destinationOptions } from "../lib/export-objects/destinationOptions";
import { destinationMappingOptions } from "../lib/export-objects/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export-objects/exportArrayProperties";

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
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/salesforce/salesforce.png",
      templates: [
        new AppTemplate("salesforce", [
          path.join(templateRoot, "app", "*.template"),
        ]),
        new DestinationTemplate(
          "salesforce",
          [path.join(templateRoot, "destination", "*.template")],
          syncModes
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
        {
          name: "salesforce-export-objects",
          displayName: "Salesforce Export Objects",
          direction: "export",
          description:
            "Export Records and Groups to Salesforce sales cloud objects.",
          apps: ["salesforce"],
          syncModes,
          options: [
            {
              key: "recordObject",
              displayName: "Record Object",
              required: true,
              description:
                "Which object in Salesforce represents a Grouparoo record?",
            },
            {
              key: "recordMatchField",
              displayName: "Record Match Field",
              required: true,
              description:
                "Which field in the record Object is used to match Grouparoo records?",
            },
            {
              key: "groupObject",
              displayName: "Group Object",
              required: false,
              description:
                "Which object in Salesforce represents a Grouparoo group?",
            },
            {
              key: "groupNameField",
              displayName: "Group Name Field",
              required: false,
              description:
                "Which field in the group Object is used for the name of a Grouparoo group?",
            },
            {
              key: "membershipObject",
              displayName: "Membership Object",
              required: false,
              description:
                "Which object in Salesforce maps the record object to the group object?",
            },
            {
              key: "membershipRecordField",
              displayName: "Membership Record Field",
              required: false,
              description:
                "Which field in the membership Object is the reference to the record?",
            },
            {
              key: "membershipGroupField",
              displayName: "Membership Group Field",
              required: false,
              description:
                "Which field in the membership Object is the reference to the group?",
            },
            {
              key: "recordReferenceField",
              displayName: "Record Reference Field",
              required: false,
              description:
                "Is there a reference field on the record Object to fill out?",
            },
            {
              key: "recordReferenceObject",
              displayName: "Record Reference Object",
              required: false,
              description:
                "If there is a reference field, which Object should be created to apply to the record?",
            },
            {
              key: "recordReferenceMatchField",
              displayName: "Record Reference Match Field",
              required: false,
              description:
                "If there is a reference field, how should it be matched to Grouparoo records?",
            },
          ],
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

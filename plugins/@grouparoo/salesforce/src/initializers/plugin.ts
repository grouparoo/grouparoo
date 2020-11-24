import { Initializer } from "actionhero";
import { plugin } from "@grouparoo/core";

import { test } from "./../lib/test";
import { parallelism } from "./../lib/parallelism";

import { exportProfiles } from "../lib/export-objects/exportProfiles";
import { destinationOptions } from "../lib/export-objects/destinationOptions";
import { destinationMappingOptions } from "../lib/export-objects/destinationMappingOptions";
import { exportArrayProperties } from "../lib/export-objects/exportArrayProperties";

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
          options: [
            {
              key: "username",
              displayName: "User Name",
              required: true,
              description: "Email address for logging into Salesforce",
            },
            {
              key: "password",
              displayName: "Password",
              required: true,
              description: "Password for logging into Salesforce",
            },
            {
              key: "securityToken",
              displayName: "Security Token",
              required: false,
              description:
                "To get a new security token, click on 'Reset My Security Token' in `personal settings`",
            },
          ],
          methods: { test, parallelism },
        },
      ],
      connections: [
        {
          name: "salesforce-objects-export",
          direction: "export",
          description:
            "Export Profiles and Groups to Salesforce sales cloud objects.",
          app: "salesforce",
          options: [
            {
              key: "profileObject",
              displayName: "Profile Object",
              required: true,
              description:
                "Which object in Salesforce represents a Grouparoo profile?",
            },
            {
              key: "profileMatchField",
              displayName: "Profile Match Field",
              required: true,
              description:
                "Which field in the profile Object is used to match Grouparoo profiles?",
            },
            {
              key: "groupObject",
              displayName: "Group Object",
              required: true,
              description:
                "Which object in Salesforce represents a Grouparoo group?",
            },
            {
              key: "groupNameField",
              displayName: "Group Name Field",
              required: true,
              description:
                "Which field in the group Object is used for the name of a Grouparoo group?",
            },
            {
              key: "membershipObject",
              displayName: "Membership Object",
              required: true,
              description:
                "Which object in Salesforce maps the profile object to the group object?",
            },
            {
              key: "membershipProfileField",
              displayName: "Membership Profile Field",
              required: true,
              description:
                "Which field in the membership Object is the reference to the profile?",
            },
            {
              key: "membershipGroupField",
              displayName: "Membership Group Field",
              required: true,
              description:
                "Which field in the membership Object is the reference to the group?",
            },
            {
              key: "profileReferenceField",
              displayName: "Profile Reference Field",
              required: false,
              description:
                "Is there a reference field on the profile Object to fill out?",
            },
            {
              key: "profileReferenceObject",
              displayName: "Profile Reference Object",
              required: false,
              description:
                "If there is a reference field, which Object should be created to apply to the profile?",
            },
            {
              key: "profileReferenceMatchField",
              displayName: "Profile Reference Match Field",
              required: false,
              description:
                "If there is a reference field, how should it be matched to Grouparoo profiles?",
            },
          ],
          methods: {
            exportProfiles,
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

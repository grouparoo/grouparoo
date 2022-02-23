import { PluginConnection, DestinationSyncMode } from "@grouparoo/core";
import { exportRecords } from "./exportRecords";

import { destinationOptions } from "./destinationOptions";
import { destinationMappingOptions } from "./destinationMappingOptions";
import { exportArrayProperties } from "../export/exportArrayProperties";

export const objectsSupportedSyncModes: DestinationSyncMode[] = [
  "sync",
  "upsert",
  "update",
];

export const objectsDestinationConnection: PluginConnection = {
  name: "salesforce-export-objects",
  displayName: "Salesforce Export Objects",
  direction: "export",
  description: "Export Records and Groups to Salesforce sales cloud objects.",
  apps: ["salesforce"],
  syncModes: objectsSupportedSyncModes,
  options: [
    {
      key: "recordObject",
      displayName: "Record Object",
      required: true,
      description: "Which object in Salesforce represents a Grouparoo record?",
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
      description: "Which object in Salesforce represents a Grouparoo group?",
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
};

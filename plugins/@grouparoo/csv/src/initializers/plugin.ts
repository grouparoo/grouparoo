import { Initializer } from "actionhero";
import { AggregationMethod, plugin } from "@grouparoo/core";

import { test } from "../lib/test";

import { sourceOptions as fileSourceOptions } from "../lib/file-import/sourceOptions";
import { sourcePreview as fileSourcePreview } from "../lib/file-import/sourcePreview";
import { profiles as fileProfiles } from "../lib/file-import/profiles";
import { propertyOptions as filePropertyOptions } from "../lib/file-import/propertyOptions";
import { sourceRunPercentComplete as fileSourceRunPercentComplete } from "../lib/file-import/sourceRunPercentComplete";
import { uniquePropertyBootstrapOptions as fileUniquePropertyBootstrapOptions } from "../lib/file-import/uniquePropertyBootstrapOptions";
import { profileProperty as fileProfileProperty } from "../lib/file-import/profileProperty";
import { profileProperties as fileProfileProperties } from "../lib/file-import/profileProperties";

import { sourceOptions as remoteSourceOptions } from "../lib/remote-import/sourceOptions";
import { sourcePreview as remoteSourcePreview } from "../lib/remote-import/sourcePreview";
import { profiles as remoteProfiles } from "../lib/remote-import/profiles";
import { propertyOptions as remotePropertyOptions } from "../lib/remote-import/propertyOptions";
import { sourceRunPercentComplete as remoteSourceRunPercentComplete } from "../lib/remote-import/sourceRunPercentComplete";
import { uniquePropertyBootstrapOptions as remoteUniquePropertyBootstrapOptions } from "../lib/remote-import/uniquePropertyBootstrapOptions";
import { profileProperty as remoteProfileProperty } from "../lib/remote-import/profileProperty";
import { profileProperties as remoteProfileProperties } from "../lib/remote-import/profileProperties";

import {
  CSVAppTemplate,
  CSVRemoteSourceTemplate,
  CSVPropertyTemplate,
} from "../lib/templates";

const packageJSON = require("./../../package.json");

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: "/public/@grouparoo/csv/csv.svg",
      templates: [
        CSVAppTemplate,
        // CSVFileSourceTemplate, because we currently do not support CSV file upload from code config, let's not list it as an option
        CSVRemoteSourceTemplate,
        CSVPropertyTemplate,
      ],
      apps: [
        {
          name: "csv",
          options: [],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "csv-file-import",
          direction: "import",
          description: "Import or update Profiles from an uploaded CSV.",
          app: "csv",
          groupAggregations: [AggregationMethod.Exact],
          options: [
            {
              key: "fileId",
              displayName: "File Id",
              required: true,
              description:
                "The fileId from a file previously uploaded to Grouparoo.",
            },
          ],

          methods: {
            sourceOptions: fileSourceOptions,
            sourcePreview: fileSourcePreview,
            propertyOptions: filePropertyOptions,
            profiles: fileProfiles,
            sourceRunPercentComplete: fileSourceRunPercentComplete,
            uniquePropertyBootstrapOptions: fileUniquePropertyBootstrapOptions,
            profileProperty: fileProfileProperty,
            profileProperties: fileProfileProperties,
          },
        },
        {
          name: "csv-remote-import",
          direction: "import",
          description: "Import or update Profiles from a remote CSV.",
          app: "csv",
          groupAggregations: [AggregationMethod.Exact],
          options: [
            {
              key: "url",
              displayName: "File URL",
              required: true,
              description: "The URL from a CSV File to import.",
            },
            {
              key: "fileAgeHours",
              displayName: "File Age (hours)",
              required: true,
              description:
                "How long can we cache the CSV file before re-downloading it?",
            },
          ],

          methods: {
            sourceOptions: remoteSourceOptions,
            sourcePreview: remoteSourcePreview,
            propertyOptions: remotePropertyOptions,
            profiles: remoteProfiles,
            sourceRunPercentComplete: remoteSourceRunPercentComplete,
            uniquePropertyBootstrapOptions:
              remoteUniquePropertyBootstrapOptions,
            profileProperty: remoteProfileProperty,
            profileProperties: remoteProfileProperties,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

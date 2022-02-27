import { Initializer } from "actionhero";
import { AggregationMethod, plugin } from "@grouparoo/core";
import { test } from "../lib/test";
import { sourceOptions } from "../lib/sourceOptions";
import { sourcePreview } from "../lib/sourcePreview";
import { importRecords } from "../lib/importRecords";
import { propertyOptions } from "../lib/propertyOptions";
import { sourceRunPercentComplete } from "../lib/sourceRunPercentComplete";
import { uniquePropertyBootstrapOptions } from "../lib/uniquePropertyBootstrapOptions";
import { recordProperty } from "../lib/recordProperty";
import { recordProperties } from "../lib/recordProperties";

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
      apps: [
        {
          name: "csv",
          displayName: "CSV",
          options: [],
          methods: { test },
        },
      ],
      connections: [
        {
          name: "csv-import-table",
          displayName: "CSV Table Import",
          direction: "import",
          description: "Import or update Records from a remote CSV.",
          apps: ["csv"],
          groupAggregations: [AggregationMethod.Exact],
          supportIncrementalSchedule: false,
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
            sourceOptions,
            sourcePreview,
            propertyOptions,
            importRecords,
            sourceRunPercentComplete,
            uniquePropertyBootstrapOptions,
            recordProperty,
            recordProperties,
          },
        },
      ],
    });
  }

  async start() {
    plugin.mountModels();
  }
}

import { AggregationMethod, PluginConnection } from "@grouparoo/core";
import { sourcePreview } from "./sourcePreview";
import { propertyOptions } from "./propertyOptions";
import { records } from "./records";
import { sourceRunPercentComplete } from "./sourceRunPercentComplete";
import { uniquePropertyBootstrapOptions } from "@grouparoo/csv/dist/lib/shared/uniquePropertyBootstrapOptions";
import { recordProperty } from "./recordProperty";
import { recordProperties } from "./recordProperties";

export const sourceConnection: PluginConnection = {
  name: "google-sheet-import",
  displayName: "Google Sheets Import",
  direction: "import",
  description: "Import or update Records from a Google Sheet.",
  apps: ["google-sheets"],
  groupAggregations: [AggregationMethod.Exact],
  options: [
    {
      key: "sheet_url",
      displayName: "Google Sheet URL",
      required: true,
      description: "The url of the Google Sheet, with the gid (tab) included.",
    },
  ],
  methods: {
    sourcePreview,
    propertyOptions,
    records,
    sourceRunPercentComplete,
    uniquePropertyBootstrapOptions,
    recordProperty,
    recordProperties,
  },
};

import { AggregationMethod, PropertyOptionsMethod } from "@grouparoo/core";
import { remoteImportPreview } from "./sourcePreview";

export const propertyOptions: PropertyOptionsMethod = async () => [
  {
    key: "column",
    displayName: "Google Sheet Column",
    required: true,
    primary: true,
    description: "where the data comes from",
    type: "typeahead",
    options: async ({ appOptions, sourceOptions, sourceId }) => {
      const rows = await remoteImportPreview(
        sourceId,
        appOptions,
        sourceOptions
      );
      const columns = Object.keys(rows.length > 0 ? rows[0] : {});
      return columns.map((col) => {
        return {
          key: col,
          examples: rows.map((row) => row[col]),
        };
      });
    },
  },
  {
    key: "aggregationMethod",
    displayName: "Aggregation Method",
    required: true,
    description: "how we combine the data",
    type: "list",
    options: async () => {
      return [
        {
          key: AggregationMethod.Exact,
          description: "use the value directly",
          default: true,
        },
      ];
    },
  },
];

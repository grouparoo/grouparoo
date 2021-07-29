import { AggregationMethod, PropertyOptionsMethod } from "@grouparoo/core";
import { fileImportPreview } from "./sourcePreview";

export const propertyOptions: PropertyOptionsMethod = async () => [
  {
    key: "column",
    displayName: "CSV Column",
    required: true,
    primary: true,
    description: "where the data comes from",
    type: "typeahead",
    options: async ({ sourceOptions }) => {
      const rows = await fileImportPreview(sourceOptions);
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

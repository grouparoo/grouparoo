import { PropertyOptionsMethod } from "@grouparoo/core";
import { sheetPreview } from "./sourcePreview";

export const propertyOptions: PropertyOptionsMethod = async () => [
  {
    key: "column",
    required: true,
    description: "where the data comes from",
    type: "typeahead",
    options: async ({ appOptions, sourceOptions }) => {
      const rows = await sheetPreview({
        appOptions,
        sourceOptions,
      });
      const columns = Object.keys(rows[0]);
      return columns.map((col) => {
        return {
          key: col,
          examples: rows.map((row) => row[col]),
        };
      });
    },
  },
];

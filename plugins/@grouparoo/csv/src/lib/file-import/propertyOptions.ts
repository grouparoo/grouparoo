import { PluginConnectionPropertyOption } from "@grouparoo/core";
import { fileImportPreview } from "./sourcePreview";

export const propertyOptions: PluginConnectionPropertyOption[] = [
  {
    key: "column",
    displayName: "CSV Column",
    required: true,
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
];

import { PluginConnectionPropertyOption } from "@grouparoo/core";
import { remoteImportPreview } from "./sourcePreview";

export const propertyOptions: PluginConnectionPropertyOption[] = [
  {
    key: "column",
    displayName: "CSV Column",
    required: true,
    description: "where the data comes from",
    type: "typeahead",
    options: async ({ sourceOptions, sourceId }) => {
      const rows = await remoteImportPreview(sourceId, sourceOptions);
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
      return [{ key: "exact", description: "use the value directly" }];
    },
  },
];

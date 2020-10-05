import { PluginConnectionProfilePropertyRuleOption } from "@grouparoo/core";
import { fileImportPreview } from "./sourcePreview";

export const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = [
  {
    key: "column",
    required: true,
    description: "where the data comes from",
    type: "typeahead",
    options: async ({ sourceOptions }) => {
      const rows = await fileImportPreview({ sourceOptions });
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

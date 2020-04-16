import { PluginConnectionProfilePropertyRuleOption } from "@grouparoo/core";
import { sourcePreview } from "./sourcePreview";

export const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = [
  {
    key: "column",
    required: true,
    description: "where the data comes from",
    type: "list",
    options: async ({ app, appOptions, source, sourceOptions }) => {
      const rows = await sourcePreview({
        app,
        appOptions,
        source,
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

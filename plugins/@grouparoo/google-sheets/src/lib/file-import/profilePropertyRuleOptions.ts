import {
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
} from "@grouparoo/core";
import { sourcePreview } from "./sourcePreview";

export const profilePropertyRuleOptions = [
  {
    key: "column",
    required: true,
    description: "where the data comes from",
    type: "list",
    options: async (
      app: App,
      appOptions: SimpleAppOptions,
      source: Source,
      sourceOptions: SimpleSourceOptions,
      sourceMapping: SimpleSourceOptions
    ) => {
      const rows = await sourcePreview(app, appOptions, source, sourceOptions);
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

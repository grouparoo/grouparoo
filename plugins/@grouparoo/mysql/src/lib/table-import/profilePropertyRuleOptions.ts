import {
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
  SourceMapping,
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
      sourceMapping: SourceMapping
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
  {
    key: "aggregation method",
    required: true,
    description: "how we combine the data",
    type: "list",
    options: async () => {
      return [
        { key: "exact", description: "use the value directly" },
        { key: "average", description: "take the average" },
        { key: "count", description: "count the occurrences" },
        { key: "sum", description: "add it up" },
        { key: "min", description: "find the smallest value" },
        { key: "max", description: "find the largest value" },
      ];
    },
  },
];

import {
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
  SourceMappings,
} from "@grouparoo/core";
import { sourcePreview } from "./sourcePreview";

export const scheduleOptions = [
  {
    key: "column",
    required: true,
    description: "which column to scan for changes",
    type: "list",
    options: async (
      app: App,
      appOptions: SimpleAppOptions,
      source: Source,
      sourceOptions: SimpleSourceOptions,
      sourceMapping: SourceMappings
    ) => {
      const rows = await sourcePreview(app, appOptions, source, sourceOptions);

      const columns = [];
      Object.keys(rows[0]).map((k) => {
        if (typeof rows[0][k] !== "string") {
          columns.push(k);
        }
      });

      return columns.map((col) => {
        return {
          key: col,
          examples: rows.map((row) => row[col]),
        };
      });
    },
  },
];

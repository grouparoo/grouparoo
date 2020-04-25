import { PluginConnectionScheduleOption } from "@grouparoo/core";
import { sourcePreview } from "./sourcePreview";

export const scheduleOptions: PluginConnectionScheduleOption[] = [
  {
    key: "column",
    required: true,
    description: "which column to scan for changes",
    type: "list",
    options: async (args) => {
      const rows = await sourcePreview(args);

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

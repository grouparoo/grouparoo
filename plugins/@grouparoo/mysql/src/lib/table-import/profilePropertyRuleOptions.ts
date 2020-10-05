import { PluginConnectionProfilePropertyRuleOption } from "@grouparoo/core";
import { tablePreview } from "./sourcePreview";

export const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = [
  {
    key: "column",
    required: true,
    description: "where the data comes from",
    type: "typeahead",
    options: async ({ connection, sourceOptions }) => {
      const rows = await tablePreview({ connection, sourceOptions });
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
        {
          key: "most recent value",
          description: "use the value of the newest record",
        },
        {
          key: "least recent value",
          description: "use the value of the oldest record",
        },
      ];
    },
  },
  {
    key: "sort column",
    required: false,
    description: "which column to sort by for most and least recent properties",
    type: "typeahead",
    options: async ({ connection, sourceOptions }) => {
      const rows = await tablePreview({ connection, sourceOptions });
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

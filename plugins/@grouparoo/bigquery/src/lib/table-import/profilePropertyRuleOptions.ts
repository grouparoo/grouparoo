import { PluginConnectionProfilePropertyRuleOption } from "@grouparoo/core";
import { connect } from "../connect";
import { getSampleRows } from "../util";

export const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = [
  {
    key: "column",
    required: true,
    description: "where the data comes from",
    type: "typeahead",
    options: async ({ appOptions, sourceOptions }) => {
      const client = await connect(appOptions);
      const rows = await getSampleRows(client, sourceOptions.table);
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

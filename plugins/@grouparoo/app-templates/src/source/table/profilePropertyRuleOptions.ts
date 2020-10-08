import { PluginConnectionProfilePropertyRuleOption } from "@grouparoo/core";
import {
  GetSampleRowsMethod,
  AggregationMethod,
  aggregationMethodKey,
  sortColumnKey,
  columnNameKey,
  tableNameKey,
} from "./pluginMethods";

export interface GetProfilePropertyRuleOptionsMethod {
  (argument: {
    getSampleRows: GetSampleRowsMethod;
  }): PluginConnectionProfilePropertyRuleOption[];
}

const aggregationOptions = {
  [AggregationMethod.Exact]: { description: "use the value directly" },
  [AggregationMethod.Average]: { description: "take the average" },
  [AggregationMethod.Count]: { description: "count the occurrences" },
  [AggregationMethod.Sum]: { description: "add it up" },
  [AggregationMethod.Min]: { description: "find the smallest value" },
  [AggregationMethod.Max]: { description: "find the largest value" },
  [AggregationMethod.MostRecentValue]: {
    description: "use the value of the newest record",
  },
  [AggregationMethod.LeastRecentValue]: {
    description: "use the value of the oldest record",
  },
};

export const getProfilePropertyRuleOptions: GetProfilePropertyRuleOptionsMethod = ({
  getSampleRows,
}) => {
  return [
    {
      key: columnNameKey,
      required: true,
      description: "where the data comes from",
      type: "typeahead",
      options: async ({ connection, sourceOptions }) => {
        const tableName = sourceOptions[tableNameKey];
        const rows = await getSampleRows({ connection, tableName });
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
      key: aggregationMethodKey,
      required: true,
      description: "how we combine the data",
      type: "list",
      options: async () => {
        const out = [];
        for (const key in aggregationOptions) {
          out.push(Object.assign({ key }, aggregationOptions[key]));
        }
        return out;
      },
    },
    {
      key: sortColumnKey,
      required: false,
      description:
        "which column to sort by for most and least recent properties",
      type: "typeahead",
      options: async ({ connection, sourceOptions }) => {
        const tableName = sourceOptions[tableNameKey];
        const rows = await getSampleRows({ connection, tableName });
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
};

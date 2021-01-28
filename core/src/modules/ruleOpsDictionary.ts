import { config } from "actionhero";

const _boolean_ops = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
];

const _number_ops = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
  { op: "gt", description: "is greater than" },
  { op: "lt", description: "is less than" },
  { op: "gte", description: "is greater than or equal to" },
  { op: "lte", description: "is less than or equal to" },
];

const _string_ops = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
  { op: "like", description: "is like (case sensitive)" },
  { op: "notLike", description: "is not like (case sensitive)" },
  { op: "startsWith", description: "starts with" },
  { op: "endsWith", description: "ends with" },
  { op: "substring", description: "includes the string" },
];

const _date_ops = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
  { op: "gt", description: "is after" },
  { op: "lt", description: "is before" },
  { op: "gte", description: "is on or after" },
  { op: "lte", description: "is on or before" },
  { op: "relative_gt", description: "is in the past" },
  { op: "relative_lt", description: "is in the future" },
];

export function buildPropertyOpsDictionary(cfg?: any) {
  let stringOps = [..._string_ops];

  if (cfg?.sequelize?.dialect === "postgres") {
    stringOps.push({
      op: "iLike",
      description: "is like (case insensitive)",
    });
    stringOps.push({
      op: "notILike",
      description: "is not like (case insensitive)",
    });
  }

  return {
    // types
    boolean: _boolean_ops,
    date: _date_ops,
    email: stringOps,
    float: _number_ops,
    integer: _number_ops,
    phoneNumber: stringOps,
    string: stringOps,
    url: stringOps,
    // utils
    _relativeMatchUnits: ["days", "weeks", "months", "quarters", "years"],
    _convenientRules: {
      exists: { operation: { op: "ne" }, match: "null" },
      notExists: { operation: { op: "eq" }, match: "null" },
      relative_gt: {
        operation: { op: "gt" },
        relativeMatchDirection: "subtract",
      },
      relative_lt: {
        operation: { op: "lt" },
        relativeMatchDirection: "add",
      },
    },
  };
}

export const PropertyOpsDictionary = buildPropertyOpsDictionary(config || {});

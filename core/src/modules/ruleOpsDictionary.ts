import { config } from "actionhero";

const _boolean_ops = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
] as const;

const _number_ops = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
  { op: "gt", description: "is greater than" },
  { op: "lt", description: "is less than" },
  { op: "gte", description: "is greater than or equal to" },
  { op: "lte", description: "is less than or equal to" },
] as const;

const _string_ops_sqlite = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
  { op: "like", description: "is like (case sensitive)" },
  { op: "notLike", description: "is not like (case sensitive)" },
  { op: "startsWith", description: "starts with" },
  { op: "endsWith", description: "ends with" },
  { op: "substring", description: "includes the string" },
] as const;

const _string_ops_postgres = [
  { op: "exists", description: "exists with any value" },
  { op: "notExists", description: "does not exist" },
  { op: "eq", description: "is equal to" },
  { op: "ne", description: "is not equal to" },
  { op: "like", description: "is like (case sensitive)" },
  { op: "notLike", description: "is not like (case sensitive)" },
  { op: "startsWith", description: "starts with" },
  { op: "endsWith", description: "ends with" },
  { op: "substring", description: "includes the string" },
  { op: "iLike", description: "is like (case insensitive)" },
  { op: "notILike", description: "is not like (case insensitive)" },
] as const;

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
] as const;

const _relativeMatchUnits = [
  "days",
  "weeks",
  "months",
  "quarters",
  "years",
] as const;

export function buildPropertyOpsDictionary(cfg?: any) {
  const stringOps =
    cfg?.sequelize?.dialect === "postgres"
      ? _string_ops_postgres
      : _string_ops_sqlite;

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
    _relativeMatchUnits,
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

export type GroupRuleOpType =
  | typeof _boolean_ops[number]["op"]
  | typeof _number_ops[number]["op"]
  | typeof _string_ops_sqlite[number]["op"]
  | typeof _string_ops_postgres[number]["op"]
  | typeof _date_ops[number]["op"];
export type RelativeMatchUnitType = typeof _relativeMatchUnits[number];
export type RelativeMatchDirectionType = "add" | "subtract";

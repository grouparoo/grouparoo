import { SQLiteQueryParamValue } from "./sqlite";

type DataParam =
  | SQLiteQueryParamValue[]
  | Record<string, SQLiteQueryParamValue>;

export const buildKeyList = (data: DataParam): string[] => {
  const keys = Array.isArray(data) ? data : Object.keys(data);
  return keys.map((v) => `"${v}"`);
};

export const toValuesArray = (data: DataParam): SQLiteQueryParamValue[] =>
  Array.isArray(data) ? data : Object.values(data);

export const toValuePlaceholders = (
  values: SQLiteQueryParamValue[]
): string => {
  const placeholders = values.map(() => "?");
  return placeholders.length > 0 ? `(${placeholders})` : "";
};

import { Api } from "actionhero";

export namespace APIData {
  export function ensureArray(
    param: { [key: string]: any } | string,
    api?: Api
  ) {
    return ensureObjectOrArray<"array">(param, api);
  }

  export function ensureObject(
    param: { [key: string]: any } | string,
    api?: Api
  ) {
    return ensureObjectOrArray<"object">(param, api);
  }

  function ensureObjectOrArray<t extends "array" | "object">(
    param: { [key: string]: any } | string,
    api?: Api,
    recursing = false
  ): t extends "array" ? any[] : Record<string, any> {
    if (!param) {
      return null;
    } else if (Array.isArray(param)) {
      try {
        return param.map((row) => ensureObjectOrArray(row, api, true));
      } catch (error) {
        throw new Error(
          `${param} cannot be converted to JSON object (${error})`
        );
      }
    } else if (typeof param === "string") {
      try {
        return JSON.parse(param) as t extends "array"
          ? any[]
          : Record<string, any>;
      } catch (error) {
        if (recursing) {
          return param as unknown as t extends "array"
            ? any[]
            : Record<string, any>;
        } else {
          throw new Error(
            `${param} cannot be converted to JSON object (${error})`
          );
        }
      }
    } else {
      return param as t extends "array" ? any[] : Record<string, any>;
    }
  }

  export function ensureString<T extends string>(param: unknown) {
    return String(param) as T;
  }

  export function ensureBoolean(param: boolean | string | number) {
    if (param === true || param === false) return param;
    if (param === 1 || param === "1" || param === "true") return true;
    if (param === 0 || param === "0" || param === "false") return false;
    throw new Error(`${param} cannot be converted to a boolean`);
  }

  export function ensureNumber(param: string | number) {
    if (typeof param === "number") return param;
    try {
      const parsed = parseFloat(param);
      if (isNaN(parsed)) throw new Error("NaN");
      return parsed;
    } catch (error) {
      throw new Error(`${param} cannot be converted to number (${error})`);
    }
  }

  export function ensureDate(param: Date | string | number) {
    if (param instanceof Date) return param;

    if (typeof param === "string" || typeof param === "number") {
      const asNumber = Number(param);
      if (!isNaN(asNumber)) param = asNumber;

      const date = new Date(param);
      if (!isNaN(date.getTime())) return date;
    }

    throw new Error(`${param} cannot be converted to a date`);
  }

  export function formatDate(date: Date | string) {
    if (!date || date === "") return null;
    else if (date instanceof Date) return date.getTime();
    else if (typeof date === "string") {
      const asNumber = Number(date);
      if (!isNaN(asNumber)) return asNumber;
      return new Date(date).getTime();
    } else throw new Error(`${date} is not a date`);
  }
}

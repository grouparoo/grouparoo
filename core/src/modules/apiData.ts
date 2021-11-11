import { Api } from "actionhero";

export namespace APIData {
  export function ensureObject(
    param: { [key: string]: any } | string,
    api?: Api,
    recursing = false
  ) {
    if (!param) {
      return null;
    } else if (Array.isArray(param)) {
      try {
        return param.map((row) => APIData.ensureObject(row, api, true));
      } catch (error) {
        throw new Error(
          `${param} cannot be converted to JSON object (${error})`
        );
      }
    } else if (typeof param === "string") {
      try {
        return JSON.parse(param) as { [key: string]: any };
      } catch (error) {
        if (recursing) {
          return param;
        } else {
          throw new Error(
            `${param} cannot be converted to JSON object (${error})`
          );
        }
      }
    } else {
      return param;
    }
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

  export function formatDate(date: Date | string) {
    if (!date || date === "") return null;
    else if (date instanceof Date) return date.getTime();
    else if (typeof date === "string") return new Date(date).getTime();
    else throw new Error(`${date} is not a date`);
  }
}

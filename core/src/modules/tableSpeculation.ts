import { PropertyTypes } from "../models/Property";

export namespace TableSpeculation {
  const uniqueMatchers = [
    /email/,
    /^id$/,
    /^guid$/,
    /^uuid$/,
    /userid/,
    /user_id/,
    /phone/,
    /mobile/,
  ];

  export function isUniqueColumn(columnName: string) {
    if (!columnName) return false;

    for (const matcher of uniqueMatchers) {
      if (columnName.toLowerCase().match(matcher)) return true;
    }

    return false;
  }

  export function columnType(
    columnName: string,
    databaseType: typeof PropertyTypes[number]
  ): typeof PropertyTypes[number] {
    columnName = columnName.toLowerCase();

    if (databaseType !== "string") {
      return databaseType;
    }

    if (columnName.includes("email")) {
      return "email";
    }

    if (columnName.includes("phone") || columnName.includes("mobile")) {
      return "phoneNumber";
    }

    return "string";
  }
}

import { PropertyTypes } from "@grouparoo/core";

export namespace TableSpeculation {
  export function isUniqueColumn(columnName: string) {
    columnName = columnName.toLowerCase();

    if (
      [
        "email",
        "email_address",
        "id",
        "user_id",
        "userid",
        "uuid",
        "guid",
      ].includes(columnName)
    ) {
      return true;
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

    return "string";
  }
}

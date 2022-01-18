import { GrouparooModel } from "../models/GrouparooModel";
import { Property, PropertyTypes } from "../models/Property";
import { ConfigWriter } from "../modules/configWriter";

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
    samples: any[] = [],
    defaultDatabaseType: typeof PropertyTypes[number] = "string"
  ): typeof PropertyTypes[number] {
    let databaseType: typeof PropertyTypes[number] =
      defaultDatabaseType ?? "string";
    const name = columnName.toLowerCase();
    const value = samples.find((v) => v !== null && v !== undefined);
    const exists = value !== undefined && value !== null;

    if (exists && typeof value === "number") databaseType = "float";
    if (exists && (value === false || value === true)) databaseType = "boolean";
    if (exists && value instanceof Date) databaseType = "date";

    if (databaseType === "string") {
      if (name.includes("email")) return "email";
      if (name.includes("phone")) return "phoneNumber";
      if (name.includes("mobile")) return "phoneNumber";
    }

    if (databaseType === "float") {
      if (name === "id") return "integer";
      if (name === "guid") return "integer";
      if (name === "uuid") return "integer";
      if (name.match(/_id$/)) return "integer";
      if (name.match(/Id$/)) return "integer";
      if (name.match(/_guid$/)) return "integer";
      if (name.match(/Guid$/)) return "integer";
      if (name.match(/_uuid$/)) return "integer";
      if (name.match(/Uuid$/)) return "integer";
    }

    return databaseType;
  }

  export function suggestKey(
    key: string,
    model: GrouparooModel,
    existingProperties: Property[]
  ): string {
    const matchingProperty = existingProperties.find((p) => p.key === key);
    return matchingProperty
      ? `${ConfigWriter.generateId(model.name)}_${key}`
      : key;
  }
}

import { ExportArrayPropertiesMethod } from "@grouparoo/core";
import { IClient } from "../client/interfaces/iClient";
import { AirtablePropertyTypes, TableField } from "../client/models";

export const exportArrayProperties: ExportArrayPropertiesMethod<
  IClient
> = async ({ connection, destinationOptions }) => {
  const tableId = destinationOptions.tableId;
  if (!tableId) {
    return [];
  }
  const table = await connection.getTable(
    destinationOptions.tableId.toString()
  );
  return table.fields.filter(isArrayType).map((field) => field.name);
};

export function isArrayType(field: TableField): boolean {
  switch (field.type) {
    case AirtablePropertyTypes.multipleSelects:
      return true;
    default:
      return false;
  }
}

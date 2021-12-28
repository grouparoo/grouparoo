import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import { AirtablePropertyTypes, Table } from "../client/models";
import { IClient } from "../client/interfaces/iClient";
import { AirtableDestinationOptions } from "./destinationOptions";

export const destinationMappingOptions: DestinationMappingOptionsMethod<
  IClient
> = async ({ connection, destinationOptions }) => {
  const { tableId, primaryKey } =
    destinationOptions as AirtableDestinationOptions;
  const table: Table = await connection.getTable(tableId);
  const required = getRequiredFields(table, primaryKey);
  const requiredFieldsNames = required.map(
    (requiredField) => requiredField.key
  );
  const known = getTableFields(table, requiredFieldsNames);
  // don't know the column names!
  const allowOptionalFromProperties = table.fields.length === 0;
  return {
    labels: {
      property: {
        singular: "Airtable Record Property",
        plural: "Airtable Record Properties",
      },
    },
    properties: { required, known, allowOptionalFromProperties },
  };
};

function getRequiredFields(
  table: Table,
  primaryKey: string
): Array<{
  key: string;
  type: DestinationMappingOptionsResponseType;
}> {
  const field = table.fields.find((field) => field.name === primaryKey);
  const key = field?.name || primaryKey;
  const type = mapTypesFromAirtableToGrouparoo(field?.type) || "string";
  return [{ key, type }];
}

export const getTableFields = (
  table: Table,
  requiredFields: string[]
): Array<{
  key: string;
  type: DestinationMappingOptionsResponseType;
}> => {
  const out: Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
    important: boolean;
  }> = [];
  for (const field of table.fields) {
    if (!requiredFields.includes(field.name)) {
      const type = mapTypesFromAirtableToGrouparoo(field.type);
      if (type) {
        out.push({
          type: type,
          key: field.name,
          important: true,
        });
      }
    }
  }
  return out.sort((a, b) => a.key.localeCompare(b.key));
};

export function mapTypesFromAirtableToGrouparoo(
  airtableType: string
): DestinationMappingOptionsResponseType {
  if (!airtableType) {
    return null;
  }

  // TODO: probably many more here
  // TODO: check if editable (Permission?)
  switch (airtableType) {
    case AirtablePropertyTypes.multipleSelects:
      return "string";
    case AirtablePropertyTypes.checkbox:
      return "boolean";
    case AirtablePropertyTypes.date:
      return "date";
    case AirtablePropertyTypes.email:
      return "email";
    case AirtablePropertyTypes.multilineText:
      return "string";
    case AirtablePropertyTypes.singleLineText:
      return "string";
    case AirtablePropertyTypes.number:
      return "number";
    default:
      return null;
  }
}

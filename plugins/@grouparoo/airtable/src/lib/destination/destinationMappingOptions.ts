import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import { AirtablePropertyTypes, Table } from "../client/models";
import { IClient } from "../client/interfaces/iClient";
import { AirtableDestinationOptions } from "./destinationOptions";

const singleAirtableProperty = "Airtable Record Property";
const pluralAirtableProperty = "Airtable Record Properties";
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
  return {
    labels: {
      property: {
        singular: singleAirtableProperty,
        plural: pluralAirtableProperty,
      },
    },
    properties: {
      required: required,
      known: known,
      allowOptionalFromProperties: false,
    },
  };
};

function getRequiredFields(
  table: Table,
  primaryKey: string
): Array<{
  key: string;
  type: DestinationMappingOptionsResponseType;
}> {
  const requiredFields = [primaryKey];
  const requiredFieldsWithType: Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
  }> = [];
  requiredFields.map((requiredField) => {
    const field = table.fields.find((field) => field.name == requiredField);
    if (!field) {
      return;
    }
    requiredFieldsWithType.push({
      key: requiredField,
      type: mapTypesFromAirtableToGrouparoo(field.type),
    });
  });
  return requiredFieldsWithType.sort((a, b) => a.key.localeCompare(b.key));
}

export const getTableFields = (
  table: Table,
  requiredFields: string[]
): Array<{
  key: string;
  type: DestinationMappingOptionsResponseType;
}> => {
  const fields = table.fields;
  const out: Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
  }> = [];
  for (const field of fields) {
    if (!requiredFields.includes(field.name)) {
      const type: DestinationMappingOptionsResponseType =
        mapTypesFromAirtableToGrouparoo(field.type);
      if (type) {
        out.push({
          type: type,
          key: field.name,
        });
      }
    }
  }
  return out.sort((a, b) => a.key.localeCompare(b.key));
};

function mapTypesFromAirtableToGrouparoo(
  airtableType: string
): DestinationMappingOptionsResponseType {
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
    default:
      return null;
  }
}

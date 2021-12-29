import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import { AirtablePropertyTypes, Table, TableField } from "../client/models";
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
  const type = mapTypesFromAirtableToGrouparoo(field) || "string";
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
      const type = mapTypesFromAirtableToGrouparoo(field);
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
  field: TableField
): DestinationMappingOptionsResponseType {
  if (!field) {
    return null;
  }
  // TODO: check if editable (Permission?)

  const airtableType = field.type;
  if (!airtableType) {
    return null;
  }

  switch (airtableType) {
    case AirtablePropertyTypes.autoNumber:
    case AirtablePropertyTypes.button:
    case AirtablePropertyTypes.count:
    case AirtablePropertyTypes.createdBy:
    case AirtablePropertyTypes.createdTime:
    case AirtablePropertyTypes.externalSyncSource:
    case AirtablePropertyTypes.formula:
    case AirtablePropertyTypes.lastModifiedBy:
    case AirtablePropertyTypes.lastModifiedTime:
    case AirtablePropertyTypes.multipleLookupValues:
    case AirtablePropertyTypes.rollup:
      // computed
      return null;
    case AirtablePropertyTypes.multipleAttachments:
    case AirtablePropertyTypes.multipleCollaborators:
    case AirtablePropertyTypes.singleCollaborator:
    case AirtablePropertyTypes.barcode:
      // advanced
      return null;
    case AirtablePropertyTypes.checkbox:
      return "boolean";
    case AirtablePropertyTypes.url:
      return "url";
    case AirtablePropertyTypes.currency:
    case AirtablePropertyTypes.number:
    case AirtablePropertyTypes.percent:
    case AirtablePropertyTypes.rating:
      return "number";
    case AirtablePropertyTypes.duration:
      // number of seconds
      return "integer";
    case AirtablePropertyTypes.email:
      return "email";
    case AirtablePropertyTypes.phoneNumber:
      return "phoneNumber";
    case AirtablePropertyTypes.dateTime:
      return "date";
    case AirtablePropertyTypes.multilineText:
    case AirtablePropertyTypes.multipleSelects:
    case AirtablePropertyTypes.richText:
    case AirtablePropertyTypes.singleLineText:
    case AirtablePropertyTypes.singleSelect:
      return "string";
    case AirtablePropertyTypes.date:
      // can be adapted to string: 2021-12-25
      return "string";
    case AirtablePropertyTypes.multipleRecordLinks:
      // can be adapted to string: recXYZ
      return "string";
    default:
      // just let it happen and see
      return "string";
  }
}

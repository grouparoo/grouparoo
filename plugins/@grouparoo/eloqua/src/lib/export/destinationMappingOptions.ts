import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";

import { connect } from "../connect";

const importantFields = ["firstName", "lastName", "company"];

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions, appId }) => {
    const client = await connect(appOptions);
    const known = await getContactFields(client);
    const required = getRequiredFields();

    return {
      labels: {
        property: {
          singular: "Eloqua Field",
          plural: "Eloqua Fields",
        },
        group: {
          singular: "Eloqua List",
          plural: "Eloqua Lists",
        },
      },
      properties: {
        known: known,
        required,
        allowOptionalFromProperties: false,
      },
    };
  };

const mapTypesToGrouparoo = (
  eloquaType: string,
  fieldName: string
): DestinationMappingOptionsResponseTypes => {
  const overrides: Record<string, DestinationMappingOptionsResponseTypes> = {
    emailAddress: "email",
    businessPhone: "phoneNumber",
    mobilePhone: "phoneNumber",
  };
  if (overrides[fieldName]) return overrides[fieldName];

  const map: Record<string, DestinationMappingOptionsResponseTypes> = {
    string: "string",
    date: "date",
    number: "number",
  };
  const grouparooType = map[eloquaType];
  if (grouparooType) {
    return grouparooType;
  }
  return null;
};

export const getRequiredFields = (): Array<{
  key: string;
  type: DestinationMappingOptionsResponseTypes;
}> => {
  return [{ key: "emailAddress", type: "email" }];
};

const isImportant = (key): Boolean => {
  return importantFields.includes(key);
};

export const getContactFields = async (
  client: any
): Promise<
  Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
    statement: string;
    important?: boolean;
  }>
> => {
  const fields = await client.contacts.fields.getAll();

  const out = [];
  for (const field of fields["items"]) {
    const key = camelize(field["name"]);
    if (key !== "emailAddress" && !field["hasReadOnlyConstraint"]) {
      const type: DestinationMappingOptionsResponseTypes = mapTypesToGrouparoo(
        field["dataType"],
        key
      );
      if (type) {
        out.push({
          key,
          type,
          statement: field["statement"],
          fieldId: field["uri"],
          important: isImportant(key),
          isPrimary: isPrimaryField(key),
        });
      }
    }
  }
  return out;
};

function isPrimaryField(field: string) {
  const primaryFields = [
    "emailAddress",
    "currentStatus",
    "name",
    "description",
    "firstName",
    "lastName",
    "emailFormatPreference",
    "title",
    "address1",
    "address2",
    "address3",
    "city",
    "province",
    "postalCode",
    "country",
    "businessPhone",
    "mobilePhone",
    "fax",
    "salesPerson",
  ];
  return primaryFields.includes(field);
}

function camelize(str) {
  return str.replace(/^\w|[A-Z]|\b\w|\s+/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

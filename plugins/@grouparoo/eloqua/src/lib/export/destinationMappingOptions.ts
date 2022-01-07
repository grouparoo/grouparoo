import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
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
): DestinationMappingOptionsResponseType => {
  const overrides: Record<string, DestinationMappingOptionsResponseType> = {
    emailAddress: "email",
    businessPhone: "phoneNumber",
    mobilePhone: "phoneNumber",
  };
  if (overrides[fieldName]) return overrides[fieldName];

  const map: Record<string, DestinationMappingOptionsResponseType> = {
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

export const getRequiredFields = (): {
  key: string;
  type: DestinationMappingOptionsResponseType;
}[] => {
  return [{ key: "emailAddress", type: "email" }];
};

const isImportant = (key): Boolean => {
  return importantFields.includes(key);
};

export const getContactFields = async (
  client: any
): Promise<
  {
    key: string;
    type: DestinationMappingOptionsResponseType;
    statement: string;
    important?: boolean;
  }[]
> => {
  const out = await getAllContactFields(client);
  return out.filter((field, index, arr) => {
    return field.key !== "emailAddress";
  });
};

export const getAllContactFields = async (
  client: any
): Promise<
  {
    key: string;
    type: DestinationMappingOptionsResponseType;
    statement: string;
    important?: boolean;
  }[]
> => {
  const fields = await client.contacts.fields.getAll();
  const out = [];
  for (const field of fields["items"]) {
    const key = camelize(field["name"]);
    const keyValidation = new RegExp("^[_a-zA-Z][_0-9a-zA-Z]*$");
    if (!keyValidation.test(key)) {
      continue;
    }
    if (!field["hasReadOnlyConstraint"]) {
      const type: DestinationMappingOptionsResponseType = mapTypesToGrouparoo(
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

export const isPrimaryField = (field: string) => {
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
};

function camelize(str) {
  return str.replace(/^\w|[A-Z]|\b\w|\s+/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

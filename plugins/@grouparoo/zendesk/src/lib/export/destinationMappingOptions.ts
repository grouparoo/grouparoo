import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import { connect } from "./../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions }) => {
    const client = await connect(appOptions);
    const required = getRequiredFields();
    const userFields = await getUserFields(client);
    const known = getBuiltInFields().concat(userFields);

    return {
      labels: {
        property: {
          singular: "Zendesk User Field",
          plural: "Zendesk User Fields",
        },
        group: {
          singular: "Zendesk Tag",
          plural: "Zendesk Tags",
        },
      },
      properties: {
        required,
        known,
        allowOptionalFromProperties: false,
      },
    };
  };

const mapTypesFromZendeskToGrouparoo = (zendeskType) => {
  const map = {
    text: "string",
    textarea: "string",
    integer: "integer",
    decimal: "float",
    date: "date",
    checkbox: "boolean",
    regexp: "string",
    dropdown: "string",
  };
  const grouparooType = map[zendeskType];
  if (!grouparooType) {
    throw `Unknown zendesk type: ${zendeskType}`;
  }
  return grouparooType;
};

export const getRequiredFields = (): {
  key: string;
  type: DestinationMappingOptionsResponseType;
}[] => {
  return [{ key: "external_id", type: "string" }];
};
export const getBuiltInFields = (): {
  key: string;
  type: DestinationMappingOptionsResponseType;
  important?: boolean;
}[] => {
  return [
    { key: "name", type: "string", important: true },
    { key: "email", type: "email", important: true },
    { key: "notes", type: "string" },
    { key: "details", type: "string" },
    { key: "alias", type: "string" },
    { key: "phone", type: "phoneNumber" },
  ];

  // Can do with types later
  // locale: "locale"
  // time_zone: "timezone"
  // locale_id?
  // photo?
};

export const getUserFields = async (
  client: any
): Promise<
  {
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }[]
> => {
  const list = await client.userfields.list();
  const out = [];
  for (const field of list) {
    const type: DestinationMappingOptionsResponseType =
      mapTypesFromZendeskToGrouparoo(field.type);
    const key = field.key;
    out.push({ key, type, important: true });
  }
  return out;
};

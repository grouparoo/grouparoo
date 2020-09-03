import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";
import { connect } from "./../connect";
import { cache } from "./../cache";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const required = getRequiredFields();
  const userFields = await getUserFields(client);
  const known = getBuiltInFields().concat(userFields);

  return {
    labels: {
      profilePropertyRule: {
        singular: "Zendesk User Field",
        plural: "Zendesk User Fields",
      },
      group: {
        singular: "Zendesk Tag",
        plural: "Zendesk Tags",
      },
    },
    profilePropertyRules: {
      required,
      known,
      allowOptionalFromProfilePropertyRules: false,
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

export const getRequiredFields = (): Array<{
  key: string;
  type: DestinationMappingOptionsResponseTypes;
}> => {
  return [
    { key: "external_id", type: "string" },
    { key: "name", type: "string" },
  ];
};
export const getBuiltInFields = (): Array<{
  key: string;
  type: DestinationMappingOptionsResponseTypes;
  important?: boolean;
}> => {
  return [
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
  Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
    important?: boolean;
  }>
> => {
  const cacheKey = "grouparoo:zendesk:userfieldslist";
  const cacheDuration = 1000 * 60; // 1 minute
  const lockKey = "grouparoo:zendesk:userfieldslistlock";
  const list = await cache({ cacheKey, lockKey, cacheDuration }, async () => {
    return client.userfields.list();
  });
  const out = [];
  for (const field of list) {
    const type: DestinationMappingOptionsResponseTypes = mapTypesFromZendeskToGrouparoo(
      field.type
    );
    const key = field.key;
    out.push({ key, type, important: true });
  }
  return out;
};

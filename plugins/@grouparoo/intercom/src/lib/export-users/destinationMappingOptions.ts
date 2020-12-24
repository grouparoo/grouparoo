import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";
import { connect } from "../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const required = getRequiredFields();
  const known = await getKnownAttributes(client);

  return {
    labels: {
      property: {
        singular: "Intercom User Attribute",
        plural: "Intercom User Attributes",
      },
      group: {
        singular: "Intercom Tag",
        plural: "Intercom Tags",
      },
    },
    properties: {
      required,
      known,
      allowOptionalFromProperties: false,
    },
  };
};

const mapTypesFromIntercomToGrouparoo = (key, intercomType) => {
  switch (key) {
    case "phone":
      return "phoneNumber";
    case "avatar":
      return null; // TODO: make type for URL
  }

  const map = {
    string: "string",
    integer: "integer",
    float: "float",
    boolean: "boolean",
    date: "date",
  };
  const grouparooType = map[intercomType];
  if (!grouparooType) {
    throw `Unknown Intercom type: ${intercomType}`;
  }
  return grouparooType;
};

export const getRequiredFields = (): Array<{
  key: string;
  type: DestinationMappingOptionsResponseTypes;
}> => {
  return [
    { key: "external_id", type: "string" },
    { key: "email", type: "email" },
  ];
};

export const getKnownAttributes = async (
  client: any
): Promise<
  Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
    important?: boolean;
  }>
> => {
  const importantKeys = ["name"];
  const required = getRequiredFields().map((f) => f.key);

  const { body } = await client.dataAttributes.list({ model: "contact" });
  const list = body.data;

  const out = [];
  for (const field of list) {
    const key = field.full_name;
    const { api_writable, archived } = field;
    if (!api_writable) {
      continue;
    }
    if (archived) {
      continue;
    }
    if (required.includes(key)) {
      continue;
    }
    const important = field.custom || importantKeys.includes(key);
    const type: DestinationMappingOptionsResponseTypes = mapTypesFromIntercomToGrouparoo(
      key,
      field.data_type
    );
    if (type) {
      out.push({ key, type, important });
    }
  }

  return out;
};

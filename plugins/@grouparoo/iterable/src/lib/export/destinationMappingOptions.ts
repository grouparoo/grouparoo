import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import { connect } from "./../connect";

const importantFields = ["name", "phoneNumber", "userId", "signupDate"];

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions }) => {
    const client = await connect(appOptions);
    const required = getRequiredFields();

    const known = await getUserFields(client);

    return {
      labels: {
        property: {
          singular: "Iterable User Field",
          plural: "Iterable User Fields",
        },
        group: {
          singular: "Iterable List",
          plural: "Iterable Lists",
        },
      },
      properties: {
        required: required,
        known: known,
        allowOptionalFromProperties: true,
      },
    };
  };

export const getRequiredFields = (): Array<{
  key: string;
  type: DestinationMappingOptionsResponseType;
}> => {
  return [{ key: "email", type: "email" }];
};

const isImportant = (key): Boolean => {
  return importantFields.includes(key);
};

const mapTypesFromIterableToGrouparoo = (fieldKey, iterableType) => {
  // some default fields have known type
  switch (fieldKey) {
    case "phoneNumber":
      return "phoneNumber";
  }
  const map = {
    string: "string",
    long: "integer",
    date: "date",
    boolean: "boolean",
    double: "float",
  };
  const grouparooType = map[iterableType];
  if (grouparooType) {
    return grouparooType;
  }
  return null;
};

export const getUserFields = async (
  client: any
): Promise<
  Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }>
> => {
  const fields = await client.users.getFields();
  const out = [];

  for (const [key, value] of Object.entries(fields["fields"])) {
    if (value !== "object" && key !== "email") {
      const type: DestinationMappingOptionsResponseType =
        mapTypesFromIterableToGrouparoo(key, value);
      if (type) {
        out.push({ key, type, important: isImportant(key) });
      }
    }
  }
  return out;
};

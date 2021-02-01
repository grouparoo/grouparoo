import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";
import { connect } from "./../connect";

const importantFields = ["name", "phoneNumber", "userId", "signupDate"];

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const required = getRequiredFields();

  const builtInfields = getBuiltInFields();
  const userField = await getUserFields(client);
  const known = builtInfields.concat(userField);

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
  type: DestinationMappingOptionsResponseTypes;
}> => {
  return [{ key: "email", type: "email" }];
};

const isImportant = (key): Boolean => {
  return importantFields.includes(key);
};

export const getBuiltInFields = (): Array<{
  key: string;
  type: DestinationMappingOptionsResponseTypes;
  important?: boolean;
}> => {
  return [
    { key: "email", type: "email", important: true },
    { key: "phoneNumber", type: "phoneNumber", important: true },
  ];
};

const mapTypesFromIterableToGrouparoo = (iterableType) => {
  const map = {
    string: "string",
    long: "integer",
    date: "date",
    boolean: "boolean",
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
    type: DestinationMappingOptionsResponseTypes;
    important?: boolean;
  }>
> => {
  const fields = await client.users.getFields();
  const out = [];

  for (const [key, value] of Object.entries(fields["fields"])) {
    if (value !== "object" && key !== "email") {
      const type: DestinationMappingOptionsResponseTypes = mapTypesFromIterableToGrouparoo(
        value
      );
      if (type) {
        out.push({ key, type, important: isImportant(key) });
      }
    }
  }
  return out;
};

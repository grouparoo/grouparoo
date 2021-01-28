import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";
import { connect } from "./../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const required = getRequiredFields();
  const known = await getUserFields(client);

  return {
    labels: {
      property: {
        singular: "Iterable Contact Property",
        plural: "Iterable Contact Properties",
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

  for (const [key, value] of Object.entries(fields.fields)) {
    if (value !== "object" && key !== "email") {
      const type: DestinationMappingOptionsResponseTypes = mapTypesFromIterableToGrouparoo(
        value
      );
      if (type) {
        out.push({ key, type, important: true });
      }
    }
  }
  return out;
};

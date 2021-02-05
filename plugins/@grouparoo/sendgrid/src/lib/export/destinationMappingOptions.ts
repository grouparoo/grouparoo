import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";
import { connect } from "./../connect";

const importantFields = ["first_name", "phone_number", "created_at"];

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const required = getRequiredFields();

  const known = await getUserFields(client);

  return {
    labels: {
      property: {
        singular: "Sendgrid Contact Field",
        plural: "Sendgrid Contact Fields",
      },
      group: {
        singular: "Sendgrid List",
        plural: "Sendgrid Lists",
      },
    },
    properties: {
      required: required,
      known: known,
      allowOptionalFromProperties: false,
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

const mapTypesFromIterableToGrouparoo = (fieldKey, iterableType) => {
  switch (fieldKey) {
    case "phone_number":
      return "phoneNumber";
  }
  const map = {
    Text: "string",
    Date: "date",
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
  const fields = await client.getUserFields();
  const out = [];

  for (const field of fields) {
    if (field["name"] !== "email") {
      const type: DestinationMappingOptionsResponseTypes = mapTypesFromIterableToGrouparoo(
        field["name"],
        field["field_type"]
      );
      if (type) {
        out.push({
          key: field["name"],
          type,
          important: isImportant(field["name"]),
        });
      }
    }
  }
  return out;
};

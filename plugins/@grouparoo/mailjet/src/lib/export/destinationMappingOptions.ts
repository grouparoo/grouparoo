import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
  SimpleAppOptions,
} from "@grouparoo/core";
import { connect } from "./../connect";
import { MailjetClient } from "../client";

const importantFields = ["name", "firstname"];

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions }) => {
    const client = await connect(appOptions);
    const required = getRequiredFields();
    const known = await getUserFields(client);
    return {
      labels: {
        property: {
          singular: "Mailjet Contact Property",
          plural: "Mailjet Contact Properties",
        },
        group: {
          singular: "Mailjet List",
          plural: "Mailjet Lists",
        },
      },
      properties: {
        required: required,
        known: known,
        allowOptionalFromProperties: false,
      },
    };
  };

const mapTypesFromMailjetToGrouparoo = (fieldKey, mailjetType) => {
  switch (fieldKey) {
    case "phone":
      return "phoneNumber";
  }
  const map = {
    str: "string",
    int: "integer",
    datetime: "date",
    bool: "boolean",
    float: "float",
  };
  const grouparooType = map[mailjetType];
  if (grouparooType) {
    return grouparooType;
  }
  return null;
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

export const getUserFields = async (
  client: MailjetClient
): Promise<
  Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
    important?: boolean;
  }>
> => {
  const fields = await client.getAllContactsProperties();
  const out = [];
  for (const field of fields) {
    const type: DestinationMappingOptionsResponseTypes =
      mapTypesFromMailjetToGrouparoo(field["Name"], field["Datatype"]);
    if (type) {
      out.push({
        key: field["Name"],
        type,
        important: isImportant(field["Name"]),
      });
    }
  }
  return out;
};

import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
  SimpleAppOptions,
} from "@grouparoo/core";
import { connect } from "./../connect";

const importantFields = ["firstname", "lastname", "company"];

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
}) => {
  const client = await connect(appOptions);
  const required = getRequiredFields();
  const known = await getUserFields(client, appOptions);
  return {
    labels: {
      property: {
        singular: "Hubspot Contact Property",
        plural: "Hubspot Contact Properties",
      },
      group: {
        singular: "Hubspot List",
        plural: "Hubspot Lists",
      },
    },
    properties: {
      required: required,
      known: known,
      allowOptionalFromProperties: false,
    },
  };
};

const mapTypesFromHubspotToGrouparoo = (fieldKey, hubspotType) => {
  switch (fieldKey) {
    case "mobilephone":
    case "phone":
      return "phoneNumber";
  }

  // TODO: "date" (no time) are strings, but there are a few known names
  // date_of_birth, start_date
  // these are both for Facebook Ads

  const map = {
    string: "string",
    enumeration: "string",
    datetime: "date",
    bool: "boolean",
    number: "float",
  };
  const grouparooType = map[hubspotType];
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
  client: any,
  appOptions: SimpleAppOptions
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
    if (field["name"] !== "email" && !field["readOnlyValue"]) {
      const type: DestinationMappingOptionsResponseTypes = mapTypesFromHubspotToGrouparoo(
        field["name"],
        field["type"]
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

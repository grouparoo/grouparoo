import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
  SimpleAppOptions,
} from "@grouparoo/core";
import { connect } from "../connect";

const importantFields = ["firstname", "lastname", "company"];

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions, destinationOptions }) => {
    const client = await connect(appOptions);
    const required = getRequiredFields();

    if (destinationOptions?.companyKey) {
      let type: DestinationMappingOptionsResponseType = "string";
      switch (destinationOptions.companyKey) {
        case "hs_object_id":
          type = "integer";
          break;
        case "phone":
          type = "phoneNumber";
          break;
      }
      required.push({ key: `Company.${destinationOptions.companyKey}`, type });
    }
    const known = await getUserFields(client, appOptions);
    return {
      labels: {
        property: {
          singular: "HubSpot Contact Property",
          plural: "HubSpot Contact Properties",
        },
        group: {
          singular: "HubSpot List",
          plural: "HubSpot Lists",
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

  // TODO: some of the "date" fields (no time) are strings, but there are a few known names
  // date_of_birth, start_date
  // these are both for Facebook Ads

  const map = {
    string: "string",
    enumeration: "string",
    datetime: "date",
    date: "date",
    bool: "boolean",
    number: "float",
  };
  const grouparooType = map[hubspotType];
  if (grouparooType) {
    return grouparooType;
  }
  return null;
};

export const getRequiredFields = (): {
  key: string;
  type: DestinationMappingOptionsResponseType;
}[] => {
  return [{ key: "email", type: "email" }];
};

const isImportant = (key): Boolean => {
  return importantFields.includes(key);
};

export const getUserFields = async (
  client: any,
  appOptions: SimpleAppOptions
): Promise<
  {
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }[]
> => {
  const fields = await client.getAllContactsProperties();
  const out = [];
  for (const field of fields) {
    if (field["name"] !== "email" && !field["readOnlyValue"]) {
      const type: DestinationMappingOptionsResponseType =
        mapTypesFromHubspotToGrouparoo(field["name"], field["type"]);
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

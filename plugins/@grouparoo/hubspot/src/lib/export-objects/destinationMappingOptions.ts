import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";
import { connect } from "../connect";
import { HubspotClient } from "../client/client";
import { CustomObjectHandler } from "../export/customObject";

const importantFields = [
  "firstname",
  "first_name",
  "lastname",
  "last_name",
  "email",
];

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions, destinationOptions }) => {
    const { schemaId, primaryKey } = destinationOptions;
    const client: HubspotClient = await connect(appOptions);
    const customObject = new CustomObjectHandler(
      await client.objects.getSchema(schemaId)
    );
    const required = getRequiredFields(customObject, primaryKey as string);
    const known = getObjectFields(customObject, primaryKey as string);
    return {
      labels: {
        property: {
          singular: "Hubspot Custom Object Property",
          plural: "Hubspot Custom Object Properties",
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
    case "email":
      return "email";
  }

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

export const getRequiredFields = (
  customObject: CustomObjectHandler,
  primaryKey: string
): Array<{
  key: string;
  type: DestinationMappingOptionsResponseType;
}> => {
  const property = customObject.getPropertyByName(primaryKey);
  if (property) {
    return [
      {
        key: primaryKey,
        type: mapTypesFromHubspotToGrouparoo(primaryKey, property.type),
      },
    ];
  }
  return [{ key: primaryKey, type: "string" }];
};

const isImportant = (key): Boolean => {
  return importantFields.includes(key.toLowerCase());
};

export const getObjectFields = (
  customObject: CustomObjectHandler,
  primaryKey: string
): Array<{
  key: string;
  type: DestinationMappingOptionsResponseType;
  important?: boolean;
}> => {
  const properties = customObject.getProperties();
  const out = [];
  for (const property of properties) {
    if (
      property["name"] !== primaryKey &&
      !property["archived"] &&
      !property["calculated"]
    ) {
      const type: DestinationMappingOptionsResponseType =
        mapTypesFromHubspotToGrouparoo(property["name"], property["type"]);
      if (type) {
        out.push({
          key: property["name"],
          type,
          important: isImportant(property["name"]),
        });
      }
    }
  }
  return out;
};

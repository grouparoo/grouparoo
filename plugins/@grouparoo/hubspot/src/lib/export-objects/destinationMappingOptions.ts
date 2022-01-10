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
  "name",
];

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions, destinationOptions }) => {
    const { schemaId, primaryKey } = destinationOptions;
    const client: HubspotClient = await connect(appOptions);
    const customObject = new CustomObjectHandler(
      await client.objects.getSchema(schemaId)
    );
    const required = getRequiredFields(customObject, primaryKey as string);
    const requiredFieldsNames = required.map(
      (requiredField) => requiredField.key
    );
    const known = getObjectFields(customObject, requiredFieldsNames);
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
): {
  key: string;
  type: DestinationMappingOptionsResponseType;
}[] => {
  const requiredFields = customObject.getRequiredProperties();
  if (!requiredFields.includes(primaryKey)) {
    requiredFields.push(primaryKey);
  }
  const requiredFieldsWithType = [];
  requiredFields.map((field) => {
    const property = customObject.getPropertyByName(field);
    requiredFieldsWithType.push({
      key: field,
      type: mapTypesFromHubspotToGrouparoo(field, property.type),
    });
  });
  return requiredFieldsWithType.sort((a, b) => a.key.localeCompare(b.key));
};

const isImportant = (customObject: CustomObjectHandler, key): Boolean => {
  const searchableProperties = customObject.getSearchableProperties();
  return importantFields.includes(key) || searchableProperties.includes(key);
};

export const getObjectFields = (
  customObject: CustomObjectHandler,
  requiredFields: string[]
): {
  key: string;
  type: DestinationMappingOptionsResponseType;
  important?: boolean;
}[] => {
  const properties = customObject.getProperties();
  const out = [];
  for (const property of properties) {
    if (
      !requiredFields.includes(property["name"]) &&
      customObject.shouldShowProperty(property)
    ) {
      const type: DestinationMappingOptionsResponseType =
        mapTypesFromHubspotToGrouparoo(property["name"], property["type"]);
      if (type) {
        out.push({
          key: property["name"],
          type,
          important: isImportant(customObject, property["name"]),
        });
      }
    }
  }
  return out.sort((a, b) => a.key.localeCompare(b.key));
};

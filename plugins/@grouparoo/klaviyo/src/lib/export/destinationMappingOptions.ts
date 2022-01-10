import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";

type KnownKlaviyoField = {
  key: string;
  klaviyoKey: string;
  type: DestinationMappingOptionsResponseType;
  required: boolean;
};

export const fetchKnownFields = async (): Promise<KnownKlaviyoField[]> => {
  const required: Record<string, DestinationMappingOptionsResponseType> = {
    email: "email",
  };
  const allowedFields: Record<string, DestinationMappingOptionsResponseType> = {
    ...required,
    first_name: "string",
    last_name: "string",
    phone_number: "phoneNumber",
    city: "string",
    region: "string",
    country: "string",
    zip: "string",
    image: "url",
    address1: "string",
    address2: "string",
    latitude: "number",
    longitude: "number",
    organization: "string",
    title: "string",
    timezone: "string",
  };

  return Object.entries(allowedFields).map(([field, type]) => ({
    key: field,
    klaviyoKey: `$${field}`,
    type: type,
    required: required.hasOwnProperty(field),
  }));
};

export const getKnownFieldMap = async () => {
  const known = await fetchKnownFields();
  const out = {};
  for (const field of known) {
    out[field.key] = field.klaviyoKey;
  }
  return out;
};

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({}) => {
    const allKnown = await fetchKnownFields();
    const required = allKnown.filter((field) => field.required);

    // Filter out required fields and those that we create to manage group membership
    const knownNotRequired = allKnown.filter((field) => !field.required);

    return {
      labels: {
        property: {
          singular: "Klaviyo Field",
          plural: "Klaviyo Fields",
        },
        group: {
          singular: "Klaviyo List",
          plural: "Klaviyo Lists",
        },
      },
      properties: {
        known: knownNotRequired,
        required,
        allowOptionalFromProperties: true,
      },
    };
  };

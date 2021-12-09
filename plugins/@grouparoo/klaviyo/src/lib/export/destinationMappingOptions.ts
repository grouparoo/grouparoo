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

const fetchKnownFields = async (): Promise<KnownKlaviyoField[]> => {
  const required = ["email"];
  const allowedFields = [
    ...required,
    "first_name",
    "last_name",
    "phone_number",
    "city",
    "region",
    "country",
    "zip",
    "image",
    // "consent",
  ];
  return allowedFields.map((field) => ({
    key: field,
    klaviyoKey: `$${field}`,
    type: "string",
    required: required.includes(field),
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

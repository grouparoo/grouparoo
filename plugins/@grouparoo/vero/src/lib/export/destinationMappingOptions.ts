import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
} from "@grouparoo/core";

interface KnownVeroField {
  key: string;
  type: DestinationMappingOptionsResponseType;
  required?: boolean;
  important?: boolean;
}

export const getKnownFields = (): KnownVeroField[] => {
  return [
    {
      key: "id",
      type: "string",
      required: true,
    },
    {
      key: "email",
      type: "email",
      important: true,
    },
  ];
};

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async () => {
    const allKnown = getKnownFields();
    const required = allKnown.filter((field) => field.required);
    const knownNotRequired = allKnown.filter((field) => !field.required);

    return {
      labels: {
        property: {
          singular: "Vero Field",
          plural: "Vero Fields",
        },
        group: {
          singular: "Vero Filter",
          plural: "Vero Filters",
        },
      },
      properties: {
        known: knownNotRequired,
        required,
        allowOptionalFromProperties: true,
      },
    };
  };

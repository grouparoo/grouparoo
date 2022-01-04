import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async () => ({
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
      known: [
        {
          key: "email",
          type: "email",
        },
      ],
      required: [
        {
          key: "id",
          type: "string",
        },
      ],
      allowOptionalFromProperties: true,
    },
  });

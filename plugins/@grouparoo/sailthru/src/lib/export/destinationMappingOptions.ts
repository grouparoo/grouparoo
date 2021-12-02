import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async () => {
    return {
      labels: {
        property: {
          singular: "Sailthru Var",
          plural: "Sailthru Vars",
        },
        group: {
          singular: "Sailthru List",
          plural: "Sailthru Lists",
        },
      },
      properties: {
        required: [{ key: "email", type: "email" }],
        known: [{ key: "extid", type: "string", important: true }],
        allowOptionalFromProperties: true,
      },
    };
  };

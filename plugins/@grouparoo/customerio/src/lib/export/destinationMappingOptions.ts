import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async () => {
    return {
      labels: {
        property: {
          singular: "Customer.io Attribute",
          plural: "Customer.io Attributes",
        },
        group: {
          singular: "Customer.io Group Attribute",
          plural: "Customer.io Group Attributes",
        },
      },
      properties: {
        required: [{ key: "customer_id", type: "string" }],
        known: [
          { key: "email", type: "email", important: true },
          { key: "created_at", type: "date", important: true },
        ],
        allowOptionalFromProperties: true,
      },
    };
  };

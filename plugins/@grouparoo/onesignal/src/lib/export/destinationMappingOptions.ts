import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async () => {
    return {
      labels: {
        property: {
          singular: "OneSignal Tag",
          plural: "OneSignal Tags",
        },
        group: {
          singular: "OneSignal Group Tag",
          plural: "OneSignal Group Tags",
        },
      },
      properties: {
        required: [{ key: "external_user_id", type: "string" }],
        known: [
          { key: "first_name", type: "string", important: true },
          { key: "last_name", type: "string", important: true },
          { key: "user_name", type: "string", important: true },
        ],
        allowOptionalFromProperties: true,
      },
    };
  };

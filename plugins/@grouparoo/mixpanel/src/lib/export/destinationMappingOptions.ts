import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async () => {
    return {
      labels: {
        property: {
          singular: "Mixpanel Property",
          plural: "Mixpanel Properties",
        },
        group: {
          singular: "Mixpanel Group",
          plural: "Mixpanel Groups",
        },
      },
      properties: {
        required: [{ key: "$distinct_id", type: "string" }],
        known: [
          { key: "$email", type: "email", important: true },
          { key: "$phone", type: "phoneNumber", important: false },
          { key: "$first_name", type: "string", important: true },
          { key: "$last_name", type: "string", important: true },
          { key: "$name", type: "string", important: true },
          { key: "$timezone", type: "string", important: false },
          { key: "$country_code", type: "string", important: false },
          { key: "$region", type: "string", important: false },
          { key: "$city", type: "string", important: false },
          { key: "$latitude", type: "number", important: false },
          { key: "$longitude", type: "number", important: false },
          { key: "$ip", type: "number", important: false },
        ],
        allowOptionalFromProperties: true,
      },
    };
  };

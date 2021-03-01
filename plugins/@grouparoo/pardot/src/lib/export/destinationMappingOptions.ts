import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async () => {
  return {
    labels: {
      property: {
        singular: "Pardot Field",
        plural: "Pardot Fields",
      },
      group: {
        singular: "Pardot List",
        plural: "Pardot Lists",
      },
    },
    properties: {
      //todo
      required: [{ key: "customer_id", type: "string" }],
      known: [
        { key: "email", type: "email", important: true },
        { key: "created_at", type: "date", important: true },
      ],
      allowOptionalFromProperties: true,
    },
  };
};

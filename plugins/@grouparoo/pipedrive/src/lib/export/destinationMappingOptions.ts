import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async () => {
  return {
    labels: {
      property: {
        singular: "Pipedrive Field",
        plural: "Pipedrive Fields",
      },
      group: {
        singular: "Pipedrive Filter", // TODO not sure yet
        plural: "Pipedrive Filters",
      },
    },
    properties: {
      required: [{ key: "email", type: "string" }],
      known: [], // TODO get from API
      allowOptionalFromProperties: false,
    },
  };
};

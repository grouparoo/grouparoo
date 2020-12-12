import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async () => {
  return {
    labels: {
      property: {
        singular: "Logger Profile Property Rule",
        plural: "Logger Profile Property Rules",
      },
      group: {
        singular: "Logger Tag",
        plural: "Logger Tags",
      },
    },
    properties: {
      required: [{ key: "primary id", type: "string" }],
      known: [{ key: "secondary id", type: "string", important: true }],
      allowOptionalFromProperties: true,
    },
  };
};

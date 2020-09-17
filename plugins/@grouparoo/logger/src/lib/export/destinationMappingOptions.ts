import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async () => {
  return {
    labels: {
      profilePropertyRule: {
        singular: "Logger Profile Property Rule",
        plural: "Logger Profile Property Rules",
      },
      group: {
        singular: "Logger Tag",
        plural: "Logger Tags",
      },
    },
    profilePropertyRules: {
      required: [{ key: "primary id", type: "string" }],
      known: [{ key: "secondary id", type: "string", important: true }],
      allowOptionalFromProfilePropertyRules: true,
    },
  };
};

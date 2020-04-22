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
      required: ["primary id"],
      known: ["secondary id"],
      allowOptionalFromProfilePropertyRules: true,
    },
  };
};

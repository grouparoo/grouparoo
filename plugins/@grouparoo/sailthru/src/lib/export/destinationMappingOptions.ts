import { DestinationMappingOptionsMethod } from "@grouparoo/core";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async () => {
  return {
    labels: {
      profilePropertyRule: {
        singular: "Sailthru Var",
        plural: "Sailthru Vars",
      },
      group: {
        singular: "Sailthru List",
        plural: "Sailthru Lists",
      },
    },
    profilePropertyRules: {
      required: [{ key: "email", type: "email" }],
      known: [{ key: "extid", type: "any" }],
      allowOptionalFromProfilePropertyRules: true,
    },
  };
};

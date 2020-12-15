import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { getMappingFields } from "./options";
import { destinationOptions } from "./destinationOptions";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  destinationOptions,
}) => {
  const { known, required } = getMappingFields(destinationOptions);

  return {
    labels: {
      profilePropertyRule: {
        singular: "Facebook Key",
        plural: "Facebook Keys",
      },
      group: {
        singular: "Facebook Audience",
        plural: "Facebook Audiences",
      },
    },
    profilePropertyRules: {
      required,
      known,
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};

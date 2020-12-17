import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsMethodResponse,
  SimpleAppOptions,
} from "@grouparoo/core";
import { getMappingFields } from "./fields";
import { FacebookModel } from "./model";

export interface FacebookDestinationMappingOptionsMethod {
  (argument: {
    model: FacebookModel;
  }): Promise<DestinationMappingOptionsMethodResponse>;
}

export const getDestinationMappingOptions: FacebookDestinationMappingOptionsMethod = async ({
  model,
}) => {
  const { known, required } = getMappingFields(model);

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

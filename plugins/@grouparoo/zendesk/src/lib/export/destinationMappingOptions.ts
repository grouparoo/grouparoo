import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { connect } from "./../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const client = await connect(appOptions);
  const merge_fields = {}; // await client.get(`/lists/${listId}/merge-fields`);

  return {
    labels: {
      profilePropertyRule: {
        singular: "Zendesk User Field",
        plural: "Zendesk User Fields",
      },
      group: {
        singular: "Zendesk Tag",
        plural: "Zendesk Tags",
      },
    },
    profilePropertyRules: {
      required: [
        { key: "email_address", type: "email" },
        { key: "external_id", type: "string" },
      ],
      known: [],
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};

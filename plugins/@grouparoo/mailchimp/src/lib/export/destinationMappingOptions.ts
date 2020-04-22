import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { connect } from "./../connect";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const client = await connect(appOptions);
  const { listId } = destinationOptions;
  const { merge_fields } = await client.get(`/lists/${listId}/merge-fields`);

  return {
    labels: {
      profilePropertyRule: {
        singular: "Mailchimp Merge Var",
        plural: "Mailchimp Merge Vars",
      },
      group: {
        singular: "Mailchimp Tag",
        plural: "Mailchimp Tags",
      },
    },
    profilePropertyRules: {
      required: ["email_address"],
      known: merge_fields.map((mergeField) => mergeField.tag),
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};

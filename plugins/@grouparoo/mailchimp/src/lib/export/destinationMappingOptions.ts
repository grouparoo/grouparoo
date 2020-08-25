import { DestinationMappingOptionsMethod } from "@grouparoo/core";
import { connect } from "./../connect";

type MailchimpMergeField = {
  merge_id: number;
  tag: string;
  name: string;
  type: string;
  required: boolean;
  default_value: string | number | boolean;
};

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const client = await connect(appOptions);
  const { listId } = destinationOptions;
  const {
    merge_fields,
  }: {
    merge_fields: Array<MailchimpMergeField>;
  } = await client.get(`/lists/${listId}/merge-fields`);

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
      required: [{ key: "email_address", type: "email" }],
      known: merge_fields.map((mergeField) => {
        const { type, important } = toGrouparooDestinationType(mergeField.type);
        return { key: mergeField.tag, type, important };
      }),
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};

function toGrouparooDestinationType(mailchimpType: string) {
  // currently unsupported: birthday, radio, drop down

  switch (mailchimpType) {
    case "email":
      return { type: "email", important: true };
    case "text":
      return { type: "string", important: true };
    case "address":
      return { type: "string", important: true };
    case "number":
      return { type: "number", important: true };
    case "phone":
      return { type: "phoneNumber", important: true };
    case "zip":
      return { type: "string", important: true };
    case "imageurl":
      return { type: "url", important: true };
    case "url":
      return { type: "url", important: true };
    default:
      return { type: "any", important: false };
  }
}

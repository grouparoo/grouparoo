import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseProfilePropertyRule,
  DestinationMappingOptionsResponseProfilePropertyRules,
} from "@grouparoo/core";
import { connect } from "./../connect";
import { getMergeVars, GrouparooMergeVar } from "./getMergeVars";

export type MailchimpMappingKey = "email" | "id";
export interface GetDestinationMappingOptionsMethod {
  (mappingKey: MailchimpMappingKey): DestinationMappingOptionsMethod;
}

export const getDestinationMappingOptions: GetDestinationMappingOptionsMethod = (
  mappingKey
) => {
  const destinationMappingOptionsMethod: DestinationMappingOptionsMethod = async ({
    appOptions,
    destinationOptions,
  }) => {
    const client = await connect(appOptions);
    const { listId } = destinationOptions;
    const mergeVars = await getMergeVars(client, listId);
    const profilePropertyRules = getProfilePropertyRules(mergeVars, mappingKey);

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
      profilePropertyRules,
    };
  };

  return destinationMappingOptionsMethod;
};

function getProfilePropertyRules(
  mergeVars: GrouparooMergeVar[],
  mappingKey: MailchimpMappingKey
): DestinationMappingOptionsResponseProfilePropertyRules {
  const grouparooFields = {};
  for (const field of mergeVars) {
    const { key, type, important } = field;
    grouparooFields[key] = { key, type, important };
  }

  const known: DestinationMappingOptionsResponseProfilePropertyRule[] = Object.values(
    grouparooFields
  );

  let requiredField = null;
  switch (mappingKey) {
    case "email":
      requiredField = { key: "email_address", type: "email" };
      break;
    case "id":
      requiredField = { key: "mailchimp_id", type: "string" };
      // can still set email, but hide it a bit
      known.push({ key: "email_address", type: "email", important: false });
      break;
  }

  if (!requiredField) {
    throw new Error(`Unknown profile mapping key: ${mappingKey}`);
  }

  return {
    known,
    required: [requiredField],
    allowOptionalFromProfilePropertyRules: false,
  };
}

import {
  SimpleDestinationOptions,
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseProfilePropertyRules,
} from "@grouparoo/core";
import { connect } from "./../connect";
import { getMergeVars, GrouparooMergeVar } from "./getMergeVars";

export type MailchimpMappingKey = "email" | "setting";
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

    const profilePropertyRules = getProfilePropertyRules(
      mergeVars,
      mappingKey,
      destinationOptions
    );

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
  mappingKey: MailchimpMappingKey,
  destinationOptions: SimpleDestinationOptions
): DestinationMappingOptionsResponseProfilePropertyRules {
  const grouparooFields = {};
  for (const field of mergeVars) {
    const { key, type, important } = field;
    grouparooFields[key] = { key, type, important };
  }

  let requiredField = null;
  switch (mappingKey) {
    case "email":
      requiredField = { key: "email_address", type: "email" };
      break;
    case "setting":
      requiredField = grouparooFields[destinationOptions.mergeVarMatch];
      // remove so it's not included below
      delete grouparooFields[destinationOptions.mergeVarMatch];
      break;
  }

  if (!requiredField) {
    throw new Error(
      `Unknown MergeVar for profile mapping: ${mappingKey} - ${destinationOptions.mergeVarMatch}`
    );
  }

  return {
    required: [requiredField],
    known: Object.values(grouparooFields),
    allowOptionalFromProfilePropertyRules: false,
  };
}

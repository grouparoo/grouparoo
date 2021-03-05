import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseProperty,
  DestinationMappingOptionsResponseProperties,
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
    const listId = destinationOptions.listId?.toString();
    const mergeVars = await getMergeVars(client, listId);
    const properties = getProperties(mergeVars, mappingKey);

    return {
      labels: {
        property: {
          singular: "Mailchimp Merge Var",
          plural: "Mailchimp Merge Vars",
        },
        group: {
          singular: "Mailchimp Tag",
          plural: "Mailchimp Tags",
        },
      },
      properties,
    };
  };

  return destinationMappingOptionsMethod;
};

function getProperties(
  mergeVars: GrouparooMergeVar[],
  mappingKey: MailchimpMappingKey
): DestinationMappingOptionsResponseProperties {
  const grouparooFields = {};
  for (const field of mergeVars) {
    const { key, type, important } = field;
    grouparooFields[key] = { key, type, important };
  }

  const known: DestinationMappingOptionsResponseProperty[] = Object.values(
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
    allowOptionalFromProperties: false,
  };
}

import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";
import { connect } from "../connect";
import { getMergeVars } from "./getMergeVars";

export type MailchimpOptionKey = "listId" | "mergeVarMatch";
export interface GetDestinationOptionsMethod {
  (optionKeys: MailchimpOptionKey[]): DestinationOptionsMethod;
}

export const getDestinationOptions: GetDestinationOptionsMethod = (
  optionKeys
) => {
  const destinationOptionsMethod: DestinationOptionsMethod = async ({
    appOptions,
    destinationOptions,
  }) => {
    const response: DestinationOptionsMethodResponse = {};

    const client = await connect(appOptions);

    if (optionKeys.includes("listId")) {
      response.listId = { type: "list", options: [], descriptions: [] };
      const { lists } = await client.get(`/lists`);
      lists.map((list) => {
        response.listId.options.push(list.id);
        response.listId.descriptions.push(list.name);
      });
    }

    if (optionKeys.includes("mergeVarMatch")) {
      response.mergeVarMatch = {
        type: "pending",
        options: [],
        descriptions: [],
      };
      const listId: string = destinationOptions.listId;
      if (listId) {
        response.mergeVarMatch.type = "list";
        const mergeVars = await getMergeVars(client, listId);
        for (const field of mergeVars) {
          response.mergeVarMatch.options.push(field.key);
          response.mergeVarMatch.descriptions.push(field.name);
        }
      }
    }

    return response;
  };

  return destinationOptionsMethod;
};

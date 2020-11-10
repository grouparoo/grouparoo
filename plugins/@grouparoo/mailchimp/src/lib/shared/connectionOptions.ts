import {
  DestinationOptionsMethod,
  SourceOptionsMethod,
  SimpleAppOptions,
  SimpleSourceOptions,
  SimpleDestinationOptions,
  PluginOptionTypes,
  App,
} from "@grouparoo/core";
import { connect } from "../connect";
import { getMergeVars } from "./getMergeVars";

export type MailchimpOptionKey = "listId" | "mergeVarMatch";
export interface ConnectionOptionsMethod {
  (argument: {
    connection: any;
    app: App;
    appGuid: string;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    destinationOptions?: SimpleDestinationOptions;
  }): Promise<ConnectionMethodResponse>;
}
export interface ConnectionMethodResponse {
  [optionName: string]: {
    type: PluginOptionTypes;
    options?: string[];
    descriptions?: string[];
  };
}
export interface GetConnectionOptionsMethod {
  (
    optionKeys: MailchimpOptionKey[],
    optionsName: "destinationOptions" | "sourceOptions"
  ): ConnectionOptionsMethod;
}
export interface GetDestinationOptionsMethod {
  (optionKeys: MailchimpOptionKey[]): DestinationOptionsMethod;
}
export interface GetSourceOptionsMethod {
  (optionKeys: MailchimpOptionKey[]): SourceOptionsMethod;
}

export const getDestinationOptions: GetDestinationOptionsMethod = (
  optionKeys
) => {
  return getConnectionOptions(optionKeys, "destinationOptions");
};

export const getSourceOptions: GetSourceOptionsMethod = (optionKeys) => {
  return getConnectionOptions(optionKeys, "sourceOptions");
};

export const getConnectionOptions: GetConnectionOptionsMethod = (
  optionKeys,
  optionsName
) => {
  const destinationOptionsMethod: ConnectionOptionsMethod = async (input) => {
    const appOptions = input.appOptions;
    const connectionOptions = input[optionsName];
    const response: ConnectionMethodResponse = {};

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
      const listId: string = connectionOptions.listId;
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

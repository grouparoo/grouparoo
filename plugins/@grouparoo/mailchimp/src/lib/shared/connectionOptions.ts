import {
  DestinationOptionsMethod,
  SourceOptionsMethod,
  SimpleAppOptions,
  SimpleSourceOptions,
  SimpleDestinationOptions,
  PluginOptionType,
  App,
} from "@grouparoo/core";
import { connect } from "../connect";

export type MailchimpOptionKey = "listId";
export interface ConnectionOptionsMethod {
  (argument: {
    connection: any;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    sourceOptions?: SimpleSourceOptions;
    destinationOptions?: SimpleDestinationOptions;
  }): Promise<ConnectionMethodResponse>;
}
export interface ConnectionMethodResponse {
  [optionName: string]: {
    type: PluginOptionType;
    options?: string[];
    descriptions?: string[];
  };
}
export interface GetConnectionOptionsMethod {
  (optionKeys: MailchimpOptionKey[]): ConnectionOptionsMethod;
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
  return getConnectionOptions(optionKeys);
};

export const getSourceOptions: GetSourceOptionsMethod = (optionKeys) => {
  return getConnectionOptions(optionKeys);
};

export const getConnectionOptions: GetConnectionOptionsMethod = (
  optionKeys
) => {
  const destinationOptionsMethod: ConnectionOptionsMethod = async (input) => {
    const appOptions = input.appOptions;
    const response: ConnectionMethodResponse = {};

    const client = await connect(appOptions);

    if (optionKeys.includes("listId")) {
      response.listId = { type: "list", options: [], descriptions: [] };
      const { lists } = await client.get("/lists?count=1000");
      lists.map((list) => {
        response.listId.options.push(list.id);
        response.listId.descriptions.push(list.name);
      });
    }

    return response;
  };

  return destinationOptionsMethod;
};

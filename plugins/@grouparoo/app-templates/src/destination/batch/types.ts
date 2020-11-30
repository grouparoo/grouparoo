import {
  ExportedProfile,
  App,
  SimpleAppOptions,
  Destination,
  SimpleDestinationOptions,
  ErrorWithProfileGuid,
} from "@grouparoo/core";

export enum BatchAction {
  Delete = "DELETE",
  ForeignKeyChange = "FOREIGNKEYCHANGE",
  Update = "UPDATE",
}
export enum BatchGroupMode {
  WithinGroup = "WITHINGROUP",
  TotalMembers = "TOTALMEMBERS",
}

export interface BatchExport extends ExportedProfile {
  foreignKeyValue?: string;
  oldForeignKeyValue?: string;
  destinationId?: string;
  addedGroups?: string[];
  removedGroups?: string[];
  action?: BatchAction;
  result?: any; // result from find
  data?: any; // can stick other things on here
  processed?: boolean;
  error?: any;
}

export declare type ForeignKeyMap = { [value: string]: BatchExport };
export declare type DestinationIdMap = { [value: string]: BatchExport };
export declare type GroupNameListMap = { [groupName: string]: BatchExport[] };

export interface BatchConfig {
  batchSize: number; // max number to update, create, delete
  findSize: number; // max query parameters to send to findAndSetDestinationIds
  groupMode: BatchGroupMode;
  foreignKey: string;
  connection?: any;
  app?: App;
  appOptions?: SimpleAppOptions;
  destination?: Destination;
  destinationOptions?: SimpleDestinationOptions;
  data?: any; // set any object you want on here
}

export interface BuildBatchExportMethod {
  (exports: ExportedProfile[]): BatchExport[];
}

export interface ProfileBatchProfilesPluginMethod {
  (
    exports: BatchExport[],
    config: BatchConfig,
    methods: BatchMethods
  ): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}

export interface ExportBatchProfilesPluginMethod {
  (
    exports: BatchExport[],
    config: BatchConfig,
    methods: BatchMethods
  ): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}

export interface GetForeignKeyMapMethod {
  (key: string): any;
}
export interface SetForeignKeyMapMethod {
  (key: string, value: any): void;
}

export interface BatchMethodGetClient {
  // return an object that you can connect with
  (argument: { config: BatchConfig }): Promise<any>;
}

export interface BatchMethodFindAndSetDestinationIds {
  // fetch using the keys to set destinationId and result on BatchExports
  // use the getByForeignKey to lookup results
  (argument: {
    client: any;
    users: BatchExport[];
    foreignKeys: string[]; // has newValue and oldValue of foreignKey
    getByForeignKey: GetForeignKeyMapMethod;
    config: BatchConfig;
  }): Promise<void>;
}

export interface BatchMethodDeleteByDestinationIds {
  // delete the given destinationIds
  (argument: {
    client: any;
    users: BatchExport[];
    destIdMap: DestinationIdMap;
    getByForeignKey: GetForeignKeyMapMethod;
    config: BatchConfig;
  }): Promise<void>;
}

export interface BatchMethodUpdateByDestinationIds {
  // update these users by destinationId
  (argument: {
    client: any;
    users: BatchExport[];
    destIdMap: DestinationIdMap;
    getByForeignKey: GetForeignKeyMapMethod;
    config: BatchConfig;
  }): Promise<void>;
}

export interface BatchMethodCreateByForeignKeyAndSetDestinationIds {
  // usually this is creating them. ideally upsert. set the destinationId on each when done
  (argument: {
    client: any;
    users: BatchExport[];
    getByForeignKey: GetForeignKeyMapMethod;
    config: BatchConfig;
  }): Promise<void>;
}

export interface BatchMethodAddToGroups {
  // make sure these user are in these groups (keys of map are group names)
  (argument: {
    client: any;
    users: BatchExport[];
    groupMap: GroupNameListMap;
    destIdMap: DestinationIdMap;
    config: BatchConfig;
  }): Promise<void>;
}

export interface BatchMethodRemoveFromGroups {
  // make sure these users are not in these groups (keys of map are group names)
  (argument: {
    client: any;
    users: BatchExport[];
    groupMap: GroupNameListMap;
    destIdMap: DestinationIdMap;
    config: BatchConfig;
  }): Promise<void>;
}

export interface BatchMethodNormalizeForeignKeyValue {
  // mess with the keys (lowercase emails, for example)
  (argument: { keyValue: any; config: BatchConfig }): string;
}

export interface BatchMethodNormalizeGroupName {
  // mess with the names of groups (tags with no spaces, for example)
  (argument: { groupName: string; config: BatchConfig }): string;
}

export interface BatchMethods {
  getClient: BatchMethodGetClient;
  findAndSetDestinationIds: BatchMethodFindAndSetDestinationIds;
  deleteByDestinationIds: BatchMethodDeleteByDestinationIds;
  updateByDestinationIds: BatchMethodUpdateByDestinationIds;
  createByForeignKeyAndSetDestinationIds: BatchMethodCreateByForeignKeyAndSetDestinationIds;
  addToGroups: BatchMethodAddToGroups;
  removeFromGroups: BatchMethodRemoveFromGroups;
  normalizeForeignKeyValue?: BatchMethodNormalizeForeignKeyValue;
  // mess with the names of groups (tags with no spaces, for example)
  normalizeGroupName?: BatchMethodNormalizeGroupName;
}

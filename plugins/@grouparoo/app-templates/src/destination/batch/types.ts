import {
  ExportedProfile,
  App,
  SimpleAppOptions,
  Destination,
  SimpleDestinationOptions,
  ErrorWithProfileGuid,
} from "@grouparoo/core";

export enum BatchGroupMode {
  WithinGroup = "WithinGroup", // update group by group
  TotalMembers = "TotalMembers", // update all groups at once
}

export enum BatchSyncMode {
  // these values actually used in destinationOptions settings
  Sync = "Sync", // create, update, delete (default)
  Enrich = "Enrich", // update only (no create or delete)
  Additive = "Additive", // create or update (no delete)
}

export const BatchSyncModeData = {
  [BatchSyncMode.Sync]: {
    create: true,
    update: true,
    delete: true,
    description: "Sync all profiles (create, update, delete)",
  },
  [BatchSyncMode.Enrich]: {
    create: false,
    update: true,
    delete: false,
    description: "Only update existing objects (update)",
  },
  [BatchSyncMode.Additive]: {
    create: true,
    update: true,
    delete: false,
    description: "Sync all profiles, but do not delete (create, update)",
  },
};

export interface BatchExport extends ExportedProfile {
  foreignKeyValue?: string;
  oldForeignKeyValue?: string;
  destinationId?: string;
  addedGroups?: string[];
  removedGroups?: string[];
  shouldCreate?: boolean;
  shouldUpdate?: boolean;
  shouldDelete?: boolean;
  shouldGroups?: boolean;
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
  syncMode: BatchSyncMode;
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
  (key: string): BatchExport;
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

import {
  ExportedRecord,
  App,
  SimpleAppOptions,
  Destination,
  DestinationSyncOperations,
  SimpleDestinationOptions,
  ErrorWithRecordId,
} from "@grouparoo/core";

export enum BatchGroupMode {
  WithinGroup = "WithinGroup", // update group by group
  TotalMembers = "TotalMembers", // update all groups at once
}

export enum BatchSyncMode {
  // these values actually used in destinationOptions settings
  Append = "Append", // create
  Create = "Create", // create only if it doesn't exist
  Sync = "Sync", // create, update, delete (default)
  Update = "Update", // update only (no create or delete)
  Upsert = "Upsert", // create or update (no delete)
}

export const BatchSyncModeData: Record<
  BatchSyncMode,
  {
    create: boolean;
    update: boolean;
    delete: boolean;
    description: string;
  }
> = {
  [BatchSyncMode.Append]: {
    create: true,
    update: false,
    delete: false,
    description: "Create new records (create)",
  },
  [BatchSyncMode.Create]: {
    create: true,
    update: false,
    delete: false,
    description: "Create new records, but only when they don't exist (create)",
  },
  [BatchSyncMode.Sync]: {
    create: true,
    update: true,
    delete: true,
    description: "Sync all records (create, update, delete)",
  },
  [BatchSyncMode.Update]: {
    create: false,
    update: true,
    delete: false,
    description: "Only update existing objects (update)",
  },
  [BatchSyncMode.Upsert]: {
    create: true,
    update: true,
    delete: false,
    description: "Sync all records, but do not delete (create, update)",
  },
};

export interface BatchExport extends ExportedRecord {
  foreignKeyValue?: string;
  oldForeignKeyValue?: string;
  destinationId?: string;
  addedGroups?: string[];
  removedGroups?: string[];
  shouldCreate?: boolean;
  shouldUpdate?: boolean;
  shouldDelete?: boolean;
  shouldGroups?: boolean;
  skippedMessage?: string;
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
  syncMode?: BatchSyncMode; // New plugins should pass syncOperations instead
  syncOperations?: DestinationSyncOperations;
  foreignKey: string;
  connection?: any;
  app?: App;
  appOptions?: SimpleAppOptions;
  destination?: Destination;
  destinationOptions?: SimpleDestinationOptions;
  data?: any; // set any object you want on here
}

export interface BuildBatchExportMethod {
  (exports: ExportedRecord[]): BatchExport[];
}

export interface RecordBatchRecordsPluginMethod {
  (
    exports: BatchExport[],
    config: BatchConfig,
    methods: BatchMethods
  ): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithRecordId[];
  }>;
}

export interface ExportBatchRecordsPluginMethod {
  (
    exports: BatchExport[],
    config: BatchConfig,
    methods: BatchMethods
  ): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithRecordId[];
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

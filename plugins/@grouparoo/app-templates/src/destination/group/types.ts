import {
  ExportedRecord,
  App,
  SimpleAppOptions,
  Destination,
  SimpleDestinationOptions,
  ErrorWithRecordId,
  DestinationSyncOperations,
} from "@grouparoo/core";
export { ExportedRecord } from "@grouparoo/core";

export enum GroupSizeMode {
  WithinGroup = "WithinGroup", // update group by group
  TotalMembers = "TotalMembers", // update all groups at once
}

export declare type ForeignKeyMap = { [value: string]: GroupExport };
export declare type GroupNameListMap = { [groupName: string]: GroupExport[] };

export interface GroupConfig {
  batchSize: number; // max number to manipulate groups
  groupMode: GroupSizeMode;
  syncOperations: DestinationSyncOperations;
  foreignKey: string;
  connection?: any;
  app?: App;
  appOptions?: SimpleAppOptions;
  destination?: Destination;
  destinationOptions?: SimpleDestinationOptions;
  data?: any; // set any object you want on here
}

export interface GroupMethodGetClient {
  // return an object that you can connect with
  (argument: { config: GroupConfig }): Promise<any>;
}

export interface GroupMethodAddToGroups {
  // make sure these user are in these groups (keys of map are group names)
  (argument: {
    client: any;
    users: GroupExport[];
    groupMap: GroupNameListMap;
    foreignKeyMap: ForeignKeyMap;
    config: GroupConfig;
  }): Promise<void>;
}

export interface GroupMethodRemoveFromGroups {
  // make sure these users are not in these groups (keys of map are group names)
  (argument: {
    client: any;
    users: GroupExport[];
    groupMap: GroupNameListMap;
    foreignKeyMap: ForeignKeyMap;
    config: GroupConfig;
  }): Promise<void>;
}

export interface GroupMethodNormalizeForeignKeyValue {
  // mess with the keys (lowercase emails, for example)
  (argument: { keyValue: any; config: GroupConfig }): string;
}

export interface GroupMethodNormalizeGroupName {
  // mess with the names of groups (tags with no spaces, for example)
  (argument: { groupName: string; config: GroupConfig }): string;
}

export interface GroupMethods {
  getClient: GroupMethodGetClient;
  addToGroups: GroupMethodAddToGroups;
  removeFromGroups: GroupMethodRemoveFromGroups;
  normalizeForeignKeyValue?: GroupMethodNormalizeForeignKeyValue;
  // mess with the names of groups (tags with no spaces, for example)
  normalizeGroupName?: GroupMethodNormalizeGroupName;
}

export interface RecordGroupRecordsPluginMethod {
  (
    exports: ExportedRecord[],
    config: GroupConfig,
    methods: GroupMethods
  ): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithRecordId[];
  }>;
}

export type GroupExportType = "new" | "old";

export interface GroupExport extends ExportedRecord {
  foreignKeyValue?: string; // could be old or new one
  addedGroups?: string[];
  removedGroups?: string[];
  skippedMessage?: string;
  type?: GroupExportType;
  data?: any; // can stick other things on here
  error?: any;
}

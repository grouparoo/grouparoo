import { App, SimpleAppOptions } from "../models/App";
import { Source, SimpleSourceOptions, SourceMapping } from "../models/Source";
import { Errors } from "../modules/errors";
import {
  Destination,
  DestinationSyncOperations,
  DestinationSyncMode,
  SimpleDestinationOptions,
} from "../models/Destination";
import { Run } from "../models/Run";
import {
  SimplePropertyOptions,
  PropertyFiltersWithKey,
} from "../models/Property";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { HighWaterMark } from "../models/Run";
import { Property } from "../models/Property";
import {
  Schedule,
  SimpleScheduleOptions,
  PluginConnectionScheduleOption,
  ScheduleFiltersWithKey,
} from "../models/Schedule";
import { ConfigTemplate } from "./configTemplate";

/**
 * The plugin class
 */
export interface GrouparooPlugin {
  name: string;
  icon?: string;
  apps?: Array<PluginApp>;
  connections?: Array<PluginConnection>;
  templates?: Array<ConfigTemplateConstructor | ConfigTemplate>;
}

/**
 * A plugin's App
 */
export interface PluginApp {
  name: string;
  displayName: string;
  options: AppOptionsOption[];
  minInstances?: number;
  maxInstances?: number;
  methods: {
    connect?: ConnectPluginAppMethod;
    disconnect?: DisconnectPluginAppMethod;
    test: TestPluginMethod;
    appQuery?: AppQueryMethod;
    appOptions?: AppOptionsMethod;
    parallelism?: AppParallelismMethod;
  };
}

export interface AppOptionsOption {
  key: string;
  type?: PluginOptionType;
  displayName?: string;
  required: boolean;
  description?: string;
  placeholder?: string;
  defaultValue?: string | number | boolean;
}

export interface ConnectionOptionsOption extends AppOptionsOption {}

/**
 * A plugin's Connection
 */
export interface PluginConnection {
  name: string;
  displayName: string;
  description: string;
  direction: "import" | "export";
  skipSourceMapping?: boolean;
  apps: string[];
  options: ConnectionOptionsOption[];
  syncModes?: DestinationSyncMode[];
  defaultSyncMode?: DestinationSyncMode;
  groupAggregations?: AggregationMethod[];
  methods?: {
    sourceOptions?: SourceOptionsMethod;
    sourcePreview?: SourcePreviewMethod;
    sourceFilters?: SourceFilterMethod;
    sourceRunPercentComplete?: SourceRunPercentCompleteMethod;
    uniquePropertyBootstrapOptions?: UniquePropertyBootstrapOptions;
    scheduleOptions?: ScheduleOptionsMethod;
    propertyOptions?: PropertyOptionsMethod;
    records?: RecordsPluginMethod;
    recordProperty?: RecordPropertyPluginMethod;
    recordProperties?: RecordPropertiesPluginMethod;
    destinationOptions?: DestinationOptionsMethod;
    destinationMappingOptions?: DestinationMappingOptionsMethod;
    exportRecord?: ExportRecordPluginMethod;
    exportRecords?: ExportRecordsPluginMethod;
    processExportedRecords?: ProcessExportedRecordsPluginMethod;
    exportArrayProperties?: ExportArrayPropertiesMethod;
  };
}

export enum AggregationMethod {
  Exact = "exact",
  Average = "average",
  Count = "count",
  Sum = "sum",
  Min = "min",
  Max = "max",
  MostRecentValue = "most recent value",
  LeastRecentValue = "least recent value",
}

export enum FilterOperation {
  Equal = "eq",
  NotEqual = "ne",
  GreaterThan = "gt",
  GreaterThanOrEqual = "gte",
  LessThan = "lt",
  LessThanOrEqual = "lte",
  Contain = "substring",
  NotContain = "notSubstring",
  In = "in",
  // TO DO: make these work...
  // Exists = "exists",
  // NotExists = "notExists", 
}

export type PluginOptionType =
  | "list"
  | "typeahead"
  | "text"
  | "textarea"
  | "password"
  | "pending";

/**
 * Method to get one or many records to be saved/updated.
 * Only returns the nextHighWaterMark and a count of how many records were imported.
 * Within this method you should call plugin.createImport()
 */
export interface RecordsPluginMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    schedule: Schedule;
    scheduleId: string;
    scheduleOptions: SimpleScheduleOptions;
    scheduleFilters: ScheduleFiltersWithKey[];
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    properties: Property[];
    run: Run;
    runId: string;
    limit: number;
    highWaterMark: HighWaterMark;
    sourceOffset: number | string;
  }): Promise<RecordsPluginMethodResponse>;
}

export interface RecordsPluginMethodResponse {
  importsCount: number;
  highWaterMark: HighWaterMark;
  sourceOffset: number | string;
}

/**
 * Method to load a single record property for a single record.
 * It returns a key/value hash for the new Record Property values
 */
export interface RecordPropertyPluginMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    property: Property;
    propertyId: string;
    propertyOptions: SimplePropertyOptions;
    propertyFilters: PropertyFiltersWithKey[];
    record: GrouparooRecord;
    recordId: string;
  }): Promise<RecordPropertyPluginMethodResponse>;
}

export type RecordPropertyPluginMethodResponse = Array<
  string | number | boolean | Date
>;

/**
 * Method to load many record properties for a many records.
 * It returns an array of key/value hashes for the new Record Property values, ordered by the record inputs
 */
export interface RecordPropertiesPluginMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    properties: Property[];
    propertyIds: string[];
    propertyOptions: { [key: string]: SimplePropertyOptions };
    propertyFilters: { [key: string]: PropertyFiltersWithKey[] };
    records: GrouparooRecord[];
    recordIds: string[];
  }): Promise<RecordPropertiesPluginMethodResponse>;
}

export type RecordPropertiesPluginMethodResponse = {
  [recordId: string]: {
    [key: string]: RecordPropertyPluginMethodResponse;
  };
};

/**
 * The record data that a Destination will receive.
 * Comprised of data from the Record and Export models.
 */
export interface ExportedRecord {
  record: GrouparooRecord;
  recordId: string;
  oldRecordProperties: { [key: string]: any };
  newRecordProperties: { [key: string]: any };
  oldGroups: Array<string>;
  newGroups: Array<string>;
  toDelete: boolean;
}

/**
 * Method to export a single record to a destination
 * Should only return a boolean indicating success, or throw an error if something went wrong.
 */
export interface ExportRecordPluginMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    syncOperations?: DestinationSyncOperations;
    destination: Destination;
    destinationId: string;
    destinationOptions: SimpleDestinationOptions;
    export: ExportedRecord;
  }): Promise<{ success: boolean; retryDelay?: number; error?: Error }>;
}

export interface ProcessExportsForRecordIds {
  remoteKey: string;
  recordIds: string[];
  processDelay: number;
}

export interface ExportRecordsPluginMethodResponse {
  success: boolean;
  retryDelay?: number;
  errors?: ErrorWithRecordId[];
  processExports?: ProcessExportsForRecordIds;
}

/**
 * Method to export many records to a destination
 * Should only return a boolean indicating success, or throw an error if something went wrong.
 * Can optionally return a `processExports` object to indicate exports will be processed asynchronously.
 * Errors is an Array of Error objects with an additional `recordId` property so we can link the error to the specific export that caused the error.
 * If there's a general error with the batch, just throw a single error.
 */
export interface ExportRecordsPluginMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    syncOperations?: DestinationSyncOperations;
    destination: Destination;
    destinationId: string;
    destinationOptions: SimpleDestinationOptions;
    exports: ExportedRecord[];
  }): Promise<ExportRecordsPluginMethodResponse>;
}

/**
 * Method to check on the status of asynchronously processed exports
 * If exports aren't ready yet, return the `processExports` object again to check back later
 * Should return a boolean indicating success, or throw an error if something went wrong
 * Errors is an Array of Error objects with an additional `recordId` property so we can link the error to the specific export that caused the error.
 * If there's a general error with the export processor, just throw a single error
 */
export interface ProcessExportedRecordsPluginMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationId: string;
    destinationOptions: SimpleDestinationOptions;
    exports: ExportedRecord[];
    remoteKey: string;
    syncOperations?: DestinationSyncOperations;
  }): Promise<ExportRecordsPluginMethodResponse>;
}

export interface ErrorWithRecordId extends Error {
  recordId: string;
  errorLevel: Errors.ErrorLevel;
}

/**
 * Method to return the options available to this app.
 * Returns a collection of data to display to the user.
 */
export interface AppOptionsMethod {
  (): Promise<{
    [optionName: string]: {
      type: PluginOptionType;
      options?: string[];
      descriptions?: string[];
    };
  }>;
}

/**
 * Method to return the number of parallel tasks that can be running for this job at a time
 */
export interface AppParallelismMethod {
  (argument: { app: App; appOptions: SimpleAppOptions }): Promise<number>;
}

/**
 * This method is used to build a connection object for this App.  It will be shared with multiple sources & destinations related to this app on the same server.
 * This is useful when your App has a kept-alive wire connection, like mySQL or Postgres, or you need an API token to reuse.
 * The connection itself should be able to handle reconnection attempts, keep-alive, etc,
 */
export interface ConnectPluginAppMethod<AppConnection = any> {
  (argument: {
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
  }): Promise<AppConnection>;
}

/**
 * Disconnect this app's persistent connection
 */
export interface DisconnectPluginAppMethod<AppConnection = any> {
  (argument: {
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    connection: AppConnection;
  }): Promise<void>;
}

/**
 * Method is used to test the connection options for the app.  Returns either a boolean or throws an error to be displayed to the user.
 * The test method will disconnect and connect before use, if those methods are present for this app type.
 */
export interface TestPluginMethod<AppConnection = any> {
  (argument: {
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    connection: AppConnection;
  }): Promise<{ success: boolean; message?: string }>;
}

/**
 * Method is used to run arbitrary queries against the app.  AppRefreshQuery uses this.  It returns arrays of "rows", whatever that means to the App
 */
export interface AppQueryMethod<AppConnection = any> {
  (argument: {
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    connection: AppConnection;
    refreshQuery: string;
  }): Promise<Array<unknown>>;
}

/**
 * Method to return the options available to this source.
 * Returns a collection of data to display to the user.
 */
export interface SourceOptionsMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    sourceOptions: SimpleSourceOptions;
  }): Promise<SourceOptionsMethodResponse>;
}

export interface SourceOptionsMethodResponse {
  [optionName: string]: {
    type: PluginOptionType;
    options?: string[];
    descriptions?: string[];
  };
}

/**
 * Render a preview of the data present in the source.
 * The response should be an array of objects where each object is a record record with the keys matching that of the source, ie:
 * [{id: 1, firstName: "Mario"}, {id: 2, firstName: "Luigi"}]
 */
export interface SourcePreviewMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
  }): Promise<Array<SourcePreviewMethodResponseRow>>;
}

export interface SourcePreviewMethodResponseRow {
  [column: string]: any;
}

/**
 * Return a list of things that this property can be filtered by
 * [{key: createdAt, ops: ['greater than', 'less than'], canHaveRelativeMatch: true}]
 */
export interface SourceFilterMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    property?: Property;
    propertyId?: string;
    propertyOptions?: SimplePropertyOptions;
    schedule?: Schedule;
    scheduleId?: string;
    scheduleOptions?: SimpleScheduleOptions;
  }): Promise<Array<SourceFilterMethodResponseRow>>;
}

export interface SourceFilterMethodResponseRow {
  key: string;
  ops: Array<string>;
  canHaveRelativeMatch: boolean;
}

/**
 * Return a percentage (0-100) for the completion status of this run
 */
export interface SourceRunPercentCompleteMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    schedule: Schedule;
    scheduleId: string;
    scheduleOptions: SimpleScheduleOptions;
    scheduleFilters: ScheduleFiltersWithKey[];
    highWaterMark: HighWaterMark;
    run: Run;
    runId: string;
  }): Promise<number>;
}

/**
 * Method to return the options available to this Schedule.
 */
export interface ScheduleOptionsMethod {
  (argument: {
    schedule: Schedule;
    scheduleId: string;
    scheduleOptions: SimpleScheduleOptions;
  }): Promise<PluginConnectionScheduleOption[]>;
}

/**
 * Method to return the options available to this Property.
 */
export interface PropertyOptionsMethod {
  (argument: {
    property: Property;
    propertyId: string;
    propertyOptions: SimplePropertyOptions;
  }): Promise<PluginConnectionPropertyOption[]>;
}

/**
 * Metadata and methods to return the options a Property for this connection/app.
 * Options is a method which will poll the source for available options to select (ie: names of tables or columns)
 */
export interface PluginConnectionPropertyOption<AppConnection = any> {
  key: string;
  displayName?: string;
  required: boolean;
  description: string;
  type: PluginOptionType;
  primary?: boolean;
  options: (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    property: Property;
    propertyId: string;
  }) => Promise<
    Array<{
      key: string;
      description?: string;
      default?: boolean;
      examples?: Array<any>;
    }>
  >;
}

/**
 * If a Property is created within the source creation workflow, what default options should that new rule get?
 */
export interface UniquePropertyBootstrapOptions<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    mappedColumn: string;
  }): Promise<SimplePropertyOptions>;
}

/**
 * Method to return the options available to this destination.
 * Returns a collection of data to display to the user.
 */
export interface DestinationOptionsMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<DestinationOptionsMethodResponse>;
}

export interface DestinationOptionsMethodResponse {
  [optionName: string]: {
    type: PluginOptionType;
    options?: string[];
    descriptions?: string[];
  };
}

/**
 * Method to return the details of how this destination wants to map it's property
 */
export interface DestinationMappingOptionsMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationId: string;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<DestinationMappingOptionsMethodResponse>;
}

export type DestinationMappingOptionsResponseType =
  | "any"
  | "boolean"
  | "date"
  | "email"
  | "float"
  | "integer"
  | "number"
  | "phoneNumber"
  | "string"
  | "url";
export interface DestinationMappingOptionsResponseProperty {
  key: string;
  type: DestinationMappingOptionsResponseType;
  important?: boolean;
}
export interface DestinationMappingOptionsResponseProperties {
  required: Array<DestinationMappingOptionsResponseProperty>;
  known: Array<DestinationMappingOptionsResponseProperty>;
  allowOptionalFromProperties: boolean;
}
export interface DestinationMappingOptionsMethodResponse {
  properties: DestinationMappingOptionsResponseProperties;
  labels: {
    property: {
      singular: string; // merge var
      plural: string; // merge vars
    };
    group?: {
      singular: string; // mailchimp tag
      plural: string; // mailchimp tags
    };
  };
}

/**
 * Method to return the list of destination record properties which can accept array values.
 * '*' can be used as a wildcard to accept all properties as arrays
 */
export interface ExportArrayPropertiesMethod<AppConnection = any> {
  (argument: {
    connection: AppConnection;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationId: string;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<ExportArrayPropertiesMethodResponse>;
}

export type ExportArrayPropertiesMethodResponse = Array<string>;

/** Template Utils */

export interface ConfigTemplateConstructor {
  new (): ConfigTemplate;
}

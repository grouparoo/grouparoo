import { App, AppOption, SimpleAppOptions } from "../models/App";
import { Source, SimpleSourceOptions, SourceMapping } from "../models/Source";
import { Destination, SimpleDestinationOptions } from "../models/Destination";
import { Run } from "../models/Run";
import {
  PluginConnectionProfilePropertyRuleOption,
  SimpleProfilePropertyRuleOptions,
  ProfilePropertyRuleFiltersWithKey,
} from "../models/ProfilePropertyRule";
import { Profile } from "../models/Profile";
import { HighWaterMark } from "../models/Run";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import {
  Schedule,
  SimpleScheduleOptions,
  PluginConnectionScheduleOption,
} from "../models/Schedule";

export type {
  SimpleProfilePropertyRuleOptions,
  PluginConnectionProfilePropertyRuleOption,
  ProfilePropertyRuleFiltersWithKey,
} from "../models/ProfilePropertyRule";
export type { PluginConnectionScheduleOption } from "../models/Schedule";
export type { SimpleAppOptions } from "../models/App";
export type { SimpleSourceOptions } from "../models/Source";
export type { SimpleDestinationOptions } from "../models/Destination";
export type { HighWaterMark } from "../models/Run";

/**
 * The plugin class
 */
export interface GrouparooPlugin {
  name: string;
  icon?: string;
  apps?: Array<PluginApp>;
  connections?: Array<PluginConnection>;
}

/**
 * A plugin's App
 */
export interface PluginApp {
  name: string;
  options: AppOption[];
  addible?: boolean;
  methods: {
    connect?: ConnectPluginAppMethod;
    disconnect?: DisconnectPluginAppMethod;
    test: TestPluginMethod;
    appOptions?: AppOptionsMethod;
    parallelism?: AppParallelismMethod;
  };
}

/**
 * A plugin's Connection
 */
export interface PluginConnection {
  name: string;
  description: string;
  direction: "import" | "export";
  skipSourceMapping?: boolean;
  app: string;
  options: ConnectionOption[];
  profilePropertyRuleOptions?: PluginConnectionProfilePropertyRuleOption[];
  scheduleOptions?: PluginConnectionScheduleOption[];
  methods?: {
    sourceOptions?: SourceOptionsMethod;
    sourcePreview?: SourcePreviewMethod;
    sourceFilters?: SourceFilterMethod;
    sourceRunPercentComplete?: SourceRunPercentCompleteMethod;
    uniqueProfilePropertyRuleBootstrapOptions?: UniqueProfilePropertyRuleBootstrapOptions;
    profiles?: ProfilesPluginMethod;
    profileProperty?: ProfilePropertyPluginMethod;
    destinationOptions?: DestinationOptionsMethod;
    destinationMappingOptions?: DestinationMappingOptionsMethod;
    exportProfile?: ExportProfilePluginMethod;
    exportProfiles?: ExportProfilesPluginMethod;
    exportArrayProperties?: ExportArrayPropertiesMethod;
  };
}

/**
 * Method to get one or many profiles to be saved/updated.
 * Only returns the nextHighWaterMark and a count of how many profiles were imported.
 * Within this method you should call plugin.createImport()
 */
export interface ProfilesPluginMethod {
  (argument: {
    connection: any;
    schedule: Schedule;
    scheduleOptions: SimpleScheduleOptions;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    run: Run;
    limit: number;
    highWaterMark: HighWaterMark;
    sourceOffset: number | string;
  }): Promise<ProfilesPluginMethodResponse>;
}

export interface ProfilesPluginMethodResponse {
  importsCount: number;
  highWaterMark: HighWaterMark;
  sourceOffset: number | string;
}

/**
 * Method to load a single profile property for a single profile.
 * It returns a key/value hash for the new Profile Property values
 */
export interface ProfilePropertyPluginMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    profilePropertyRule: ProfilePropertyRule;
    profilePropertyRuleOptions: SimpleProfilePropertyRuleOptions;
    profilePropertyRuleFilters: ProfilePropertyRuleFiltersWithKey[];
    profile: Profile;
  }): Promise<ProfilePropertyPluginMethodResponse>;
}

export type ProfilePropertyPluginMethodResponse = Array<
  string | number | boolean | Date
>;

/**
 * The profile data that a Destination will receive.
 * Comprised of data from the Profile and Export models.
 */
export interface ExportedProfile {
  profile: Profile;
  oldProfileProperties: { [key: string]: any };
  newProfileProperties: { [key: string]: any };
  oldGroups: Array<string>;
  newGroups: Array<string>;
  toDelete: boolean;
}

/**
 * Method to export a single profile to a destination
 * Should only return a boolean indicating success, or throw an error if something went wrong.
 */
export interface ExportProfilePluginMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationOptions: SimpleDestinationOptions;
    export: ExportedProfile;
  }): Promise<{ success: boolean; retryDelay?: number; error?: Error }>;
}

/**
 * Method to export many profiles to a destination
 * Should only return a boolean indicating success, or throw an error if something went wrong.
 * Errors is an Array of Error objects with an additional `exportGuid` property so we can link the error to the specific export that caused the error.
 * If there's a general error with the batch, just throw a single error.
 */
export interface ExportProfilesPluginMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationOptions: SimpleDestinationOptions;
    exports: ExportedProfile[];
  }): Promise<{
    success: boolean;
    retryDelay?: number;
    errors?: ErrorWithProfileGuid[];
  }>;
}

export interface ErrorWithProfileGuid extends Error {
  profileGuid: string;
}

export interface ConnectionOption extends AppOption {}

/**
 * Method to return the options available to this app.
 * Returns a collection of data to display to the user.
 */
export interface AppOptionsMethod {
  (): Promise<{
    [optionName: string]: {
      type: PluginOptionTypes;
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
export interface ConnectPluginAppMethod {
  (argument: { app: App; appOptions: SimpleAppOptions }): Promise<any>;
}

/**
 * Disconnect this app's persistent connection
 */
export interface DisconnectPluginAppMethod {
  (argument: {
    app: App;
    appOptions: SimpleAppOptions;
    connection: any;
  }): Promise<void>;
}

/**
 * Method is used to test the connection options for the app.  Returns either a boolean or throws an error to be displayed to the user.
 * The test method will disconnect and connect before use, if those methods are present for this app type.
 */
export interface TestPluginMethod {
  (argument: {
    app: App;
    appOptions: SimpleAppOptions;
    connection: any;
  }): Promise<{ success: boolean; message?: string }>;
}

/**
 * Method to return the options available to this source.
 * Returns a collection of data to display to the user.
 */
export interface SourceOptionsMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    sourceOptions: SimpleSourceOptions;
  }): Promise<SourceOptionsMethodResponse>;
}

export interface SourceOptionsMethodResponse {
  [optionName: string]: {
    type: PluginOptionTypes;
    options?: string[];
    descriptions?: string[];
  };
}

/**
 * Render a preview of the data present in the source.
 * The response should be an array of objects where each object is a profile record with the keys matching that of the source, ie:
 * [{id: 1, firstName: "Mario"}, {id: 2, firstName: "Luigi"}]
 */
export interface SourcePreviewMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
  }): Promise<Array<SourcePreviewMethodResponseRow>>;
}

export interface SourcePreviewMethodResponseRow {
  [column: string]: any;
}

/**
 * Return a list of things that this profile property rule can be filtered by
 * [{key: createdAt, ops: ['greater than', 'less than'], canHaveRelativeMatch: true}]
 */
export interface SourceFilterMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    profilePropertyRule: ProfilePropertyRule;
    profilePropertyRuleOptions: SimpleProfilePropertyRuleOptions;
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
export interface SourceRunPercentCompleteMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    schedule: Schedule;
    scheduleOptions: SimpleScheduleOptions;
    highWaterMark: HighWaterMark;
    run: Run;
  }): Promise<number>;
}

/**
 * If a Profile Property Rule is created within the source creation workflow, what default options should that new rule get?
 */
export interface UniqueProfilePropertyRuleBootstrapOptions {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    mappedColumn: string;
  }): Promise<SimpleProfilePropertyRuleOptions>;
}

/**
 * Method to return the options available to this destination.
 * Returns a collection of data to display to the user.
 */
export interface DestinationOptionsMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<DestinationOptionsMethodResponse>;
}

export interface DestinationOptionsMethodResponse {
  [optionName: string]: {
    type: PluginOptionTypes;
    options?: string[];
    descriptions?: string[];
  };
}

/**
 * Method to return the details of how this destination wants to map it's profile property rules
 */
export interface DestinationMappingOptionsMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<DestinationMappingOptionsMethodResponse>;
}

export type DestinationMappingOptionsResponseTypes =
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

export interface DestinationMappingOptionsMethodResponse {
  profilePropertyRules: {
    required: Array<{
      key: string;
      type: DestinationMappingOptionsResponseTypes;
    }>;
    known: Array<{
      key: string;
      type: DestinationMappingOptionsResponseTypes;
      important?: boolean;
    }>;
    allowOptionalFromProfilePropertyRules: boolean;
  };
  labels: {
    profilePropertyRule: {
      singular: string; // merge var
      plural: string; // merge vars
    };
    group: {
      singular: string; // mailchimp tag
      plural: string; // mailchimp tags
    };
  };
}

/**
 * Method to return the list of destination profile properties which can accept array values.
 * '*' can be used as a wildcard to accept all properties as arrays
 */
export interface ExportArrayPropertiesMethod {
  (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<ExportArrayPropertiesMethodResponse>;
}

export type ExportArrayPropertiesMethodResponse = Array<string>;

export type PluginOptionTypes = "string" | "list" | "typeahead" | "pending";

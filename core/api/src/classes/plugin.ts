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
import { RunFilter } from "../models/Run";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import {
  Schedule,
  SimpleScheduleOptions,
  PluginConnectionScheduleOption,
} from "../models/Schedule";

export {
  SimpleProfilePropertyRuleOptions,
  PluginConnectionProfilePropertyRuleOption,
  ProfilePropertyRuleFiltersWithKey,
} from "../models/ProfilePropertyRule";
export { PluginConnectionScheduleOption } from "../models/Schedule";
export { SimpleAppOptions } from "../models/App";
export { SimpleSourceOptions } from "../models/Source";
export { SimpleDestinationOptions } from "../models/Destination";

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
    test: TestPluginMethod;
    appOptions?: AppOptionsMethod;
  };
}

/**
 * Method to return the options available to this app.
 * Returns a collection of data to display to the user.
 */
export interface AppOptionsMethod {
  (): Promise<{
    [optionName: string]: {
      type: string;
      options?: string[];
      descriptions?: string[];
    };
  }>;
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
    uniqueProfilePropertyRuleBootstrapOptions?: UniqueProfilePropertyRuleBootstrapOptions;
    profiles?: ProfilesPluginMethod;
    profileProperty?: ProfilePropertyPluginMethod;
    nextFilter?: NextFilterPluginMethod;
    destinationOptions?: DestinationOptionsMethod;
    destinationMappingOptions?: DestinationMappingOptionsMethod;
    exportProfile?: ExportProfilePluginMethod;
  };
}

/**
 * Method to get one or many profiles to be saved/updated.
 * Only returns the nextHighWaterMark and a count of how many profiles were imported.
 * Within this method you should call plugin.createImport()
 */
export interface ProfilesPluginMethod {
  (argument: {
    schedule: Schedule;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    run: Run;
    limit: number;
    filter: RunFilter;
    highWaterMark: string | number;
  }): Promise<ProfilesPluginMethodResponse>;
}

export interface ProfilesPluginMethodResponse {
  importsCount: number;
  nextHighWaterMark: string | number;
}

/**
 * Method to load a single profile property for a single profile.
 * It returns a key/value hash for the new Profile Property values
 */
export interface ProfilePropertyPluginMethod {
  (argument: {
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

export type ProfilePropertyPluginMethodResponse =
  | string
  | number
  | boolean
  | Date;

/**
 * Used by a Schedule to determine the maximum value/timestamp of a source that was imported by this run.
 * Will be used as the stating point for the next run.
 * Ie: `select MAX(updated_at) from users`
 */
export interface NextFilterPluginMethod {
  (argument: {
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    schedule: Schedule;
    scheduleOptions: SimpleScheduleOptions;
    run: Run;
  }): Promise<RunFilter>;
}

/**
 * Method to export a single profile to a destination
 * Should only return a boolean indicating success, or throw an error if something went wrong.
 */
export interface ExportProfilePluginMethod {
  (argument: {
    app: App;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationOptions: SimpleDestinationOptions;
    profile: Profile;
    oldProfileProperties: { [key: string]: any };
    newProfileProperties: { [key: string]: any };
    oldGroups: Array<string>;
    newGroups: Array<string>;
    toDelete: boolean;
  }): Promise<boolean>;
}

export interface ConnectionOption extends AppOption {}

/**
 * Method is used to test the connection options for the app.  Returns either a boolean or throws an error to be displayed to the user
 */
export interface TestPluginMethod {
  (argument: { app: App; appOptions: SimpleAppOptions }): Promise<boolean>;
}

/**
 * Method to return the options available to this source.
 * Returns a collection of data to display to the user.
 */
export interface SourceOptionsMethod {
  (argument: { app: App; appOptions: SimpleAppOptions }): Promise<
    SourceOptionsMethodResponse
  >;
}

export interface SourceOptionsMethodResponse {
  [optionName: string]: {
    type: string;
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
 * If a Profile Property Rule is created within the source creation workflow, what default options should that new rule get?
 */
export interface UniqueProfilePropertyRuleBootstrapOptions {
  (argument: {
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
  (argument: { app: App; appOptions: SimpleAppOptions }): Promise<
    DestinationOptionsMethodResponse
  >;
}

export interface DestinationOptionsMethodResponse {
  [optionName: string]: {
    type: string;
    options?: string[];
    descriptions?: string[];
  };
}

/**
 * Method to return the details of how this destination wants to map it's profile property rules
 */
export interface DestinationMappingOptionsMethod {
  (argument: {
    app: App;
    appOptions: SimpleAppOptions;
    destination: Destination;
    destinationOptions: SimpleDestinationOptions;
  }): Promise<DestinationMappingOptionsMethodResponse>;
}

export interface DestinationMappingOptionsMethodResponse {
  profilePropertyRules: {
    required: Array<{ key: string; type: string }>;
    known: Array<{ key: string; type: string }>;
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

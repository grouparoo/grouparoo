import { App, AppOption, SimpleAppOptions } from "../models/App";
import { Source, SimpleSourceOptions, SourceMapping } from "../models/Source";
import { Destination, SimpleDestinationOptions } from "../models/Destination";
import { Run } from "../models/Run";
import {
  PluginConnectionProfilePropertyRuleOption,
  SimpleProfilePropertyRuleOptions,
} from "../models/ProfilePropertyRule";
import { Profile } from "../models/Profile";
import { RunFilter } from "../models/Run";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import {
  Schedule,
  SimpleScheduleOptions,
  PluginConnectionScheduleOption,
} from "../models/Schedule";

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
  app: string;
  options: ConnectionOption[];
  profilePropertyRuleOptions?: PluginConnectionProfilePropertyRuleOption[];
  scheduleOptions?: PluginConnectionScheduleOption[];
  ignoreMapping?: boolean;
  methods?: {
    sourceOptions?: SourceOptionsMethod;
    sourcePreview?: SourcePreviewMethod;
    profiles?: ProfilesPluginMethod;
    profileProperty?: ProfilePropertyPluginMethod;
    nextFilter?: NextFilterPluginMethod;
    destinationOptions?: DestinationOptionsMethod;
    destinationPreview?: DestinationPreviewMethod;
    exportProfile?: ExportProfilePluginMethod;
  };
}

/**
 * Method to get one or many profiles to be saved/updated.
 * Only returns the nextHighWaterMark and a count of how many profiles were imported.
 * Within this method you should call plugin.createImport()
 */
export interface ProfilesPluginMethod {
  (
    schedule: Schedule,
    app: App,
    appOptions: SimpleAppOptions,
    source: Source,
    sourceOptions: SimpleSourceOptions,
    sourceMapping: SourceMapping,
    run: Run,
    limit: number,
    filter: RunFilter,
    highWaterMark: string | number
  ): Promise<{ importsCount: number; nextHighWaterMark: string | number }>;
}

/**
 * Method to load a single profile property for a single profile.
 * It returns a key/value hash for the new Profile Property values
 */
export interface ProfilePropertyPluginMethod {
  (
    app: App,
    appOptions: SimpleAppOptions,
    source: Source,
    sourceOptions: SimpleSourceOptions,
    sourceMapping: SourceMapping,
    profilePropertyRule: ProfilePropertyRule,
    profilePropertyRuleOptions: SimpleProfilePropertyRuleOptions,
    profile: Profile
  ): Promise<any>;
}

/**
 * Used by a Schedule to determine the maximum value/timestamp of a source that was imported by this run.
 * Will be used as the stating point for the next run.
 * Ie: `select MAX(updated_at) from users`
 */
export interface NextFilterPluginMethod {
  (
    app: App,
    appOptions: SimpleAppOptions,
    source: Source,
    sourceOptions: SimpleSourceOptions,
    sourceMapping: SourceMapping,
    schedule: Schedule,
    scheduleOptions: SimpleScheduleOptions,
    run: Run
  ): Promise<RunFilter>;
}

/**
 * Method to export a single profile to a destination
 * Should only return a boolean indicating success, or throw an error if something went wrong.
 */
export interface ExportProfilePluginMethod {
  (
    app: App,
    appOptions: SimpleAppOptions,
    destination: Destination,
    destinationOptions: SimpleDestinationOptions,
    profile: Profile,
    oldProfileProperties: { [key: string]: any },
    newProfileProperties: { [key: string]: any },
    oldGroups: Array<string>,
    newGroups: Array<string>,
    toDelete: boolean
  ): Promise<boolean>;
}

export interface ConnectionOption extends AppOption {}

/**
 * Method is used to test the connection options for the app.  Returns either a boolean or throws an error to be displayed to the user
 */
export interface TestPluginMethod {
  (app: App, appOptions: SimpleAppOptions): Promise<boolean>;
}

/**
 * Method to return the options available to this source.
 * Returns a collection of data to display to the user.
 */
export interface SourceOptionsMethod {
  (app: App, appOptions: SimpleAppOptions): Promise<{
    [optionName: string]: {
      type: string;
      options?: string[];
      descriptions?: string[];
    };
  }>;
}

/**
 * Given SimpleSourceOptions, render a preview of the data present in the source.
 * The response should be an array of objects where each object is a profile record with the keys matching that of the source, ie:
 * [{id: 1, firstName: "Mario"}, {id: 2, firstName: "Luigi"}]
 */
export interface SourcePreviewMethod {
  (
    app: App,
    appOptions: SimpleAppOptions,
    source: Source,
    sourceOptions: SimpleSourceOptions
  ): Promise<Array<{ [column: string]: any }>>;
}

/**
 * Method to return the options available to this destination.
 * Returns a collection of data to display to the user.
 */
export interface DestinationOptionsMethod {
  (app: App, appOptions: SimpleAppOptions): Promise<{
    [optionName: string]: {
      type: string;
      options?: string[];
      descriptions?: string[];
    };
  }>;
}

/**
 * Given SimpleDestinationOptions, render a preview of the data present in the destination.
 */
export interface DestinationPreviewMethod {
  (
    app: App,
    appOptions: SimpleAppOptions,
    destination: Destination,
    destinationOptions: SimpleDestinationOptions
  ): Promise<Array<{ [column: string]: any }>>;
}

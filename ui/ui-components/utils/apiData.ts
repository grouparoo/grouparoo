import { AsyncReturnType } from "type-fest";

// -----------------------------------------

import {
  ApiKey,
  App,
  Destination,
  DestinationGroupMembership,
  Export,
  File,
  Group,
  GroupMember,
  GroupRule,
  Import,
  Log,
  Notification,
  Permission,
  Profile,
  ProfileProperty,
  Property,
  Run,
  Setting,
  SetupStep,
  Schedule,
  Source,
  Team,
  TeamMember,
  Event,
} from "@grouparoo/core";

export namespace Models {
  export type ApiKeyType = Partial<AsyncReturnType<ApiKey["apiData"]>>;
  export type AppType = Partial<AsyncReturnType<App["apiData"]>>;
  export type DestinationType = Partial<
    AsyncReturnType<Destination["apiData"]>
  >;
  export type DestinationGroupMembershipType = Partial<
    AsyncReturnType<DestinationGroupMembership["apiData"]>
  >;
  export type FileType = Partial<AsyncReturnType<File["apiData"]>>;
  export type ExportType = Partial<AsyncReturnType<Export["apiData"]>>;
  export type EventType = Partial<AsyncReturnType<Event["apiData"]>>;
  export type GroupType = Partial<AsyncReturnType<Group["apiData"]>>;
  export type GroupMemberType = Partial<
    AsyncReturnType<GroupMember["apiData"]>
  >;
  export type GroupRuleType = Partial<AsyncReturnType<GroupRule["apiData"]>>;
  export type ImportType = Partial<AsyncReturnType<Import["apiData"]>>;
  export type LogType = Partial<AsyncReturnType<Log["apiData"]>>;
  export type NotificationType = Partial<
    AsyncReturnType<Notification["apiData"]>
  >;
  export type PermissionType = Partial<AsyncReturnType<Permission["apiData"]>>;
  export type ProfileType = Partial<AsyncReturnType<Profile["apiData"]>>;
  export type ProfilePropertyType = Partial<
    AsyncReturnType<ProfileProperty["apiData"]>
  >;
  export type PropertyType = Partial<AsyncReturnType<Property["apiData"]>>;
  export type SettingType = Partial<AsyncReturnType<Setting["apiData"]>>;
  export type SetupStepType = Partial<AsyncReturnType<SetupStep["apiData"]>>;
  export type RunType = Partial<AsyncReturnType<Run["apiData"]>>;
  export type ScheduleType = Partial<AsyncReturnType<Schedule["apiData"]>>;
  export type SourceType = Partial<AsyncReturnType<Source["apiData"]>>;
  export type TeamType = Partial<AsyncReturnType<Team["apiData"]>>;
  export type TeamMemberType = Partial<AsyncReturnType<TeamMember["apiData"]>>;
}

// -----------------------------------------

import {
  ApiKeyCreate,
  ApiKeyDestroy,
  ApiKeyEdit,
  ApiKeyView,
  ApiKeysList,
} from "@grouparoo/core/src/actions/apiKeys";
import { AccountEdit, AccountView } from "@grouparoo/core/src/actions/account";
import {
  AppCreate,
  AppDestroy,
  AppEdit,
  AppOptionOptions,
  AppOptions,
  AppTest,
  AppView,
  AppsList,
} from "@grouparoo/core/src/actions/apps";
import {
  ResetCluster,
  ResetData,
  ResetCache,
} from "@grouparoo/core/src/actions/reset";
import {
  DestinationsList,
  DestinationConnectionApps,
  DestinationConnectionOptions,
  DestinationCreate,
  DestinationDestroy,
  DestinationEdit,
  DestinationExport,
  DestinationExportArrayProperties,
  DestinationMappingOptions,
  DestinationProfilePreview,
  DestinationView,
} from "@grouparoo/core/src/actions/destinations";
import {
  EventAutocompleteType,
  EventCreate,
  EventDestroy,
  EventView,
  EventsCounts,
  EventsList,
  EventsTypes,
} from "@grouparoo/core/src/actions/events";
import {
  ExportView,
  ExportsTotals,
  ExportsList,
} from "@grouparoo/core/src/actions/exports";
import {
  FileCreate,
  FileDestroy,
  FileDetails,
  FileOptions,
  FileView,
  FilesList,
} from "@grouparoo/core/src/actions/files";
import {
  GroupAddProfile,
  GroupCountComponentMembers,
  GroupCountPotentialMembers,
  GroupCreate,
  GroupDestroy,
  GroupEdit,
  GroupExport,
  GroupListDestinations,
  GroupRemoveProfile,
  GroupRun,
  GroupView,
  GroupsList,
  GroupsRuleOptions,
} from "@grouparoo/core/src/actions/groups";
import {
  ImportsList,
  ImportCreate,
  ImportView,
} from "@grouparoo/core/src/actions/imports";
import { LogsList } from "@grouparoo/core/src/actions/logs";
import {
  NotificationsList,
  NotificationView,
} from "@grouparoo/core/src/actions/notifications";
import { NavigationList } from "@grouparoo/core/src/actions/navigation";
import {
  PluginsInstalledList,
  PluginsAvailableList,
} from "@grouparoo/core/src/actions/plugins";
import {
  PropertyCreate,
  PropertyDestroy,
  PropertyEdit,
  PropertyMakeIdentifying,
  PropertyFilterOptions,
  PropertyGroups,
  PropertyPluginOptions,
  PropertyProfilePreview,
  PropertyTest,
  PropertyView,
  PropertiesList,
  PropertiesOptions,
} from "@grouparoo/core/src/actions/properties";
import {
  ProfileAutocompleteProfileProperty,
  ProfileCreate,
  ProfileDestroy,
  ProfileEdit,
  ProfileImportAndExport,
  ProfileView,
  ProfilesImportAndUpdate,
  ProfilesList,
} from "@grouparoo/core/src/actions/profiles";
import {
  ResqueDelDelayed,
  ResqueDelLock,
  ResqueDelQueue,
  ResqueDelayedJobs,
  ResqueFailedCount,
  ResqueForceCleanWorker,
  ResqueLoadWorkerQueues,
  ResqueLocks,
  ResqueQueued,
  ResqueRedisInfo,
  ResqueRemoveAllFailed,
  ResqueRemoveFailed,
  ResqueResqueDetails,
  ResqueResqueFailed,
  ResqueRetryAndRemoveAllFailed,
  ResqueRetryAndRemoveFailed,
  ResqueRunDelayed,
} from "@grouparoo/core/src/actions/resque";
import { RunEdit, RunView, RunsList } from "@grouparoo/core/src/actions/runs";
import {
  ScheduleCreate,
  ScheduleDestroy,
  ScheduleEdit,
  ScheduleRun,
  ScheduleView,
  SchedulesList,
} from "@grouparoo/core/src/actions/schedules";
import {
  SessionCreate,
  SessionDestroy,
  SessionView,
} from "@grouparoo/core/src/actions/session";
import {
  SettingEdit,
  SettingsList,
} from "@grouparoo/core/src/actions/settings";
import {
  SetupStepEdit,
  SetupStepsList,
} from "@grouparoo/core/src/actions/setupSteps";
import {
  SourceBootstrapUniqueProperty,
  SourceConnectionApps,
  SourceCreate,
  SourceDestroy,
  SourceEdit,
  SourceView,
  SourcesList,
  sourceConnectionOptions,
  SourcePreview,
} from "@grouparoo/core/src/actions/sources";
import {
  PublicStatus,
  PrivateStatus,
} from "@grouparoo/core/src/actions/status";
import { Swagger } from "@grouparoo/core/src/actions/swagger";
import {
  TeamMemberCreate,
  TeamMemberDestroy,
  TeamMemberEdit,
  TeamMemberView,
  TeamMembersList,
} from "@grouparoo/core/src/actions/teamMembers";
import {
  TeamCreate,
  TeamDestroy,
  TeamEdit,
  TeamInitialize,
  TeamView,
  TeamsList,
} from "@grouparoo/core/src/actions/teams";
import { TotalsAction } from "@grouparoo/core/src/actions/totals";
import { ObjectFind } from "@grouparoo/core/src/actions/object";

export namespace Actions {
  export type ApiKeyCreate = AsyncReturnType<
    typeof ApiKeyCreate.prototype.runWithinTransaction
  >;
  export type ApiKeyDestroy = AsyncReturnType<
    typeof ApiKeyDestroy.prototype.runWithinTransaction
  >;
  export type ApiKeyEdit = AsyncReturnType<
    typeof ApiKeyEdit.prototype.runWithinTransaction
  >;
  export type ApiKeyView = AsyncReturnType<
    typeof ApiKeyView.prototype.runWithinTransaction
  >;
  export type ApiKeysList = AsyncReturnType<
    typeof ApiKeysList.prototype.runWithinTransaction
  >;

  export type AppCreate = AsyncReturnType<
    typeof AppCreate.prototype.runWithinTransaction
  >;
  export type AppDestroy = AsyncReturnType<
    typeof AppDestroy.prototype.runWithinTransaction
  >;
  export type AppEdit = AsyncReturnType<
    typeof AppEdit.prototype.runWithinTransaction
  >;
  export type AppOptionOptions = AsyncReturnType<
    typeof AppOptionOptions.prototype.runWithinTransaction
  >;
  export type AppOptions = AsyncReturnType<
    typeof AppOptions.prototype.runWithinTransaction
  >;
  export type AppTest = AsyncReturnType<
    typeof AppTest.prototype.runWithinTransaction
  >;
  export type AppView = AsyncReturnType<
    typeof AppView.prototype.runWithinTransaction
  >;
  export type AppsList = AsyncReturnType<
    typeof AppsList.prototype.runWithinTransaction
  >;

  export type AccountView = AsyncReturnType<
    typeof AccountView.prototype.runWithinTransaction
  >;
  export type AccountEdit = AsyncReturnType<
    typeof AccountEdit.prototype.runWithinTransaction
  >;

  export type ResetCluster = AsyncReturnType<
    typeof ResetCluster.prototype.runWithinTransaction
  >;
  export type ResetData = AsyncReturnType<
    typeof ResetData.prototype.runWithinTransaction
  >;
  export type ResetCache = AsyncReturnType<
    typeof ResetCache.prototype.runWithinTransaction
  >;

  export type DestinationsList = AsyncReturnType<
    typeof DestinationsList.prototype.runWithinTransaction
  >;
  export type DestinationConnectionApps = AsyncReturnType<
    typeof DestinationConnectionApps.prototype.runWithinTransaction
  >;
  export type DestinationConnectionOptions = AsyncReturnType<
    typeof DestinationConnectionOptions.prototype.runWithinTransaction
  >;
  export type DestinationCreate = AsyncReturnType<
    typeof DestinationCreate.prototype.runWithinTransaction
  >;
  export type DestinationDestroy = AsyncReturnType<
    typeof DestinationDestroy.prototype.runWithinTransaction
  >;
  export type DestinationEdit = AsyncReturnType<
    typeof DestinationEdit.prototype.runWithinTransaction
  >;
  export type DestinationExport = AsyncReturnType<
    typeof DestinationExport.prototype.runWithinTransaction
  >;
  export type DestinationExportArrayProperties = AsyncReturnType<
    typeof DestinationExportArrayProperties.prototype.runWithinTransaction
  >;
  export type DestinationMappingOptions = AsyncReturnType<
    typeof DestinationMappingOptions.prototype.runWithinTransaction
  >;
  export type DestinationProfilePreview = AsyncReturnType<
    typeof DestinationProfilePreview.prototype.runWithinTransaction
  >;
  export type DestinationView = AsyncReturnType<
    typeof DestinationView.prototype.runWithinTransaction
  >;

  export type EventAutocompleteType = AsyncReturnType<
    typeof EventAutocompleteType.prototype.runWithinTransaction
  >;
  export type EventCreate = AsyncReturnType<
    typeof EventCreate.prototype.runWithinTransaction
  >;
  export type EventView = AsyncReturnType<
    typeof EventView.prototype.runWithinTransaction
  >;
  export type EventDestroy = AsyncReturnType<
    typeof EventDestroy.prototype.runWithinTransaction
  >;
  export type EventsCounts = AsyncReturnType<
    typeof EventsCounts.prototype.runWithinTransaction
  >;
  export type EventsList = AsyncReturnType<
    typeof EventsList.prototype.runWithinTransaction
  >;
  export type EventsTypes = AsyncReturnType<
    typeof EventsTypes.prototype.runWithinTransaction
  >;

  export type ExportView = AsyncReturnType<
    typeof ExportView.prototype.runWithinTransaction
  >;
  export type ExportsTotals = AsyncReturnType<
    typeof ExportsTotals.prototype.runWithinTransaction
  >;
  export type ExportsList = AsyncReturnType<
    typeof ExportsList.prototype.runWithinTransaction
  >;

  export type FileCreate = AsyncReturnType<
    typeof FileCreate.prototype.runWithinTransaction
  >;
  export type FileDestroy = AsyncReturnType<
    typeof FileDestroy.prototype.runWithinTransaction
  >;
  export type FileDetails = AsyncReturnType<
    typeof FileDetails.prototype.runWithinTransaction
  >;
  export type FileOptions = AsyncReturnType<
    typeof FileOptions.prototype.runWithinTransaction
  >;
  export type FileView = AsyncReturnType<
    typeof FileView.prototype.runWithinTransaction
  >;
  export type FilesList = AsyncReturnType<
    typeof FilesList.prototype.runWithinTransaction
  >;

  export type GroupAddProfile = AsyncReturnType<
    typeof GroupAddProfile.prototype.runWithinTransaction
  >;
  export type GroupCountComponentMembers = AsyncReturnType<
    typeof GroupCountComponentMembers.prototype.runWithinTransaction
  >;
  export type GroupCountPotentialMembers = AsyncReturnType<
    typeof GroupCountPotentialMembers.prototype.runWithinTransaction
  >;
  export type GroupCreate = AsyncReturnType<
    typeof GroupCreate.prototype.runWithinTransaction
  >;
  export type GroupDestroy = AsyncReturnType<
    typeof GroupDestroy.prototype.runWithinTransaction
  >;
  export type GroupEdit = AsyncReturnType<
    typeof GroupEdit.prototype.runWithinTransaction
  >;
  export type GroupExport = AsyncReturnType<
    typeof GroupExport.prototype.runWithinTransaction
  >;
  export type GroupListDestinations = AsyncReturnType<
    typeof GroupListDestinations.prototype.runWithinTransaction
  >;
  export type GroupRemoveProfile = AsyncReturnType<
    typeof GroupRemoveProfile.prototype.runWithinTransaction
  >;
  export type GroupRun = AsyncReturnType<
    typeof GroupRun.prototype.runWithinTransaction
  >;
  export type GroupView = AsyncReturnType<
    typeof GroupView.prototype.runWithinTransaction
  >;
  export type GroupsList = AsyncReturnType<
    typeof GroupsList.prototype.runWithinTransaction
  >;
  export type GroupsRuleOptions = AsyncReturnType<
    typeof GroupsRuleOptions.prototype.runWithinTransaction
  >;

  export type ImportsList = AsyncReturnType<
    typeof ImportsList.prototype.runWithinTransaction
  >;
  export type ImportCreate = AsyncReturnType<
    typeof ImportCreate.prototype.runWithinTransaction
  >;
  export type ImportView = AsyncReturnType<
    typeof ImportView.prototype.runWithinTransaction
  >;

  export type LogsList = AsyncReturnType<
    typeof LogsList.prototype.runWithinTransaction
  >;

  export type NotificationsList = AsyncReturnType<
    typeof NotificationsList.prototype.runWithinTransaction
  >;
  export type NotificationView = AsyncReturnType<
    typeof NotificationView.prototype.runWithinTransaction
  >;

  export type NavigationList = AsyncReturnType<
    typeof NavigationList.prototype.runWithinTransaction
  >;

  export type PluginsInstalledList = AsyncReturnType<
    typeof PluginsInstalledList.prototype.runWithinTransaction
  >;
  export type PluginsAvailableList = AsyncReturnType<
    typeof PluginsAvailableList.prototype.runWithinTransaction
  >;

  export type PropertyCreate = AsyncReturnType<
    typeof PropertyCreate.prototype.runWithinTransaction
  >;
  export type PropertyDestroy = AsyncReturnType<
    typeof PropertyDestroy.prototype.runWithinTransaction
  >;
  export type PropertyEdit = AsyncReturnType<
    typeof PropertyEdit.prototype.runWithinTransaction
  >;
  export type PropertyMakeIdentifying = AsyncReturnType<
    typeof PropertyMakeIdentifying.prototype.runWithinTransaction
  >;
  export type PropertyFilterOptions = AsyncReturnType<
    typeof PropertyFilterOptions.prototype.runWithinTransaction
  >;
  export type PropertyGroups = AsyncReturnType<
    typeof PropertyGroups.prototype.runWithinTransaction
  >;
  export type PropertyPluginOptions = AsyncReturnType<
    typeof PropertyPluginOptions.prototype.runWithinTransaction
  >;
  export type PropertyProfilePreview = AsyncReturnType<
    typeof PropertyProfilePreview.prototype.runWithinTransaction
  >;
  export type PropertyTest = AsyncReturnType<
    typeof PropertyTest.prototype.runWithinTransaction
  >;
  export type PropertyView = AsyncReturnType<
    typeof PropertyView.prototype.runWithinTransaction
  >;
  export type PropertiesList = AsyncReturnType<
    typeof PropertiesList.prototype.runWithinTransaction
  >;
  export type PropertiesOptions = AsyncReturnType<
    typeof PropertiesOptions.prototype.runWithinTransaction
  >;

  export type ProfileAutocompleteProfileProperty = AsyncReturnType<
    typeof ProfileAutocompleteProfileProperty.prototype.runWithinTransaction
  >;
  export type ProfileCreate = AsyncReturnType<
    typeof ProfileCreate.prototype.runWithinTransaction
  >;
  export type ProfileDestroy = AsyncReturnType<
    typeof ProfileDestroy.prototype.runWithinTransaction
  >;
  export type ProfileEdit = AsyncReturnType<
    typeof ProfileEdit.prototype.runWithinTransaction
  >;
  export type ProfileImportAndExport = AsyncReturnType<
    typeof ProfileImportAndExport.prototype.runWithinTransaction
  >;
  export type ProfileView = AsyncReturnType<
    typeof ProfileView.prototype.runWithinTransaction
  >;
  export type ProfilesImportAndUpdate = AsyncReturnType<
    typeof ProfilesImportAndUpdate.prototype.runWithinTransaction
  >;
  export type ProfilesList = AsyncReturnType<
    typeof ProfilesList.prototype.runWithinTransaction
  >;

  export type ResqueDelDelayed = AsyncReturnType<
    typeof ResqueDelDelayed.prototype.runWithinTransaction
  >;
  export type ResqueDelLock = AsyncReturnType<
    typeof ResqueDelLock.prototype.runWithinTransaction
  >;
  export type ResqueDelQueue = AsyncReturnType<
    typeof ResqueDelQueue.prototype.runWithinTransaction
  >;
  export type ResqueDelayedJobs = AsyncReturnType<
    typeof ResqueDelayedJobs.prototype.runWithinTransaction
  >;
  export type ResqueFailedCount = AsyncReturnType<
    typeof ResqueFailedCount.prototype.runWithinTransaction
  >;
  export type ResqueForceCleanWorker = AsyncReturnType<
    typeof ResqueForceCleanWorker.prototype.runWithinTransaction
  >;
  export type ResqueLoadWorkerQueues = AsyncReturnType<
    typeof ResqueLoadWorkerQueues.prototype.runWithinTransaction
  >;
  export type ResqueLocks = AsyncReturnType<
    typeof ResqueLocks.prototype.runWithinTransaction
  >;
  export type ResqueQueued = AsyncReturnType<
    typeof ResqueQueued.prototype.runWithinTransaction
  >;
  export type ResqueRedisInfo = AsyncReturnType<
    typeof ResqueRedisInfo.prototype.runWithinTransaction
  >;
  export type ResqueRemoveAllFailed = AsyncReturnType<
    typeof ResqueRemoveAllFailed.prototype.runWithinTransaction
  >;
  export type ResqueRemoveFailed = AsyncReturnType<
    typeof ResqueRemoveFailed.prototype.runWithinTransaction
  >;
  export type ResqueResqueDetails = AsyncReturnType<
    typeof ResqueResqueDetails.prototype.runWithinTransaction
  >;
  export type ResqueResqueFailed = AsyncReturnType<
    typeof ResqueResqueFailed.prototype.runWithinTransaction
  >;
  export type ResqueRetryAndRemoveAllFailed = AsyncReturnType<
    typeof ResqueRetryAndRemoveAllFailed.prototype.runWithinTransaction
  >;
  export type ResqueRetryAndRemoveFailed = AsyncReturnType<
    typeof ResqueRetryAndRemoveFailed.prototype.runWithinTransaction
  >;
  export type ResqueRunDelayed = AsyncReturnType<
    typeof ResqueRunDelayed.prototype.runWithinTransaction
  >;

  export type RunEdit = AsyncReturnType<
    typeof RunEdit.prototype.runWithinTransaction
  >;
  export type RunView = AsyncReturnType<
    typeof RunView.prototype.runWithinTransaction
  >;
  export type RunsList = AsyncReturnType<
    typeof RunsList.prototype.runWithinTransaction
  >;

  export type ScheduleCreate = AsyncReturnType<
    typeof ScheduleCreate.prototype.runWithinTransaction
  >;
  export type ScheduleDestroy = AsyncReturnType<
    typeof ScheduleDestroy.prototype.runWithinTransaction
  >;
  export type ScheduleEdit = AsyncReturnType<
    typeof ScheduleEdit.prototype.runWithinTransaction
  >;
  export type ScheduleRun = AsyncReturnType<
    typeof ScheduleRun.prototype.runWithinTransaction
  >;
  export type ScheduleView = AsyncReturnType<
    typeof ScheduleView.prototype.runWithinTransaction
  >;
  export type SchedulesList = AsyncReturnType<
    typeof SchedulesList.prototype.runWithinTransaction
  >;

  export type SessionCreate = AsyncReturnType<
    typeof SessionCreate.prototype.runWithinTransaction
  >;
  export type SessionDestroy = AsyncReturnType<
    typeof SessionDestroy.prototype.run
  >;
  export type SessionView = AsyncReturnType<
    typeof SessionView.prototype.runWithinTransaction
  >;

  export type SettingEdit = AsyncReturnType<
    typeof SettingEdit.prototype.runWithinTransaction
  >;
  export type SettingsList = AsyncReturnType<
    typeof SettingsList.prototype.runWithinTransaction
  >;

  export type SetupStepEdit = AsyncReturnType<
    typeof SetupStepEdit.prototype.runWithinTransaction
  >;
  export type SetupStepsList = AsyncReturnType<
    typeof SetupStepsList.prototype.runWithinTransaction
  >;

  export type SourceBootstrapUniqueProperty = AsyncReturnType<
    typeof SourceBootstrapUniqueProperty.prototype.runWithinTransaction
  >;
  export type SourceConnectionApps = AsyncReturnType<
    typeof SourceConnectionApps.prototype.runWithinTransaction
  >;
  export type SourceCreate = AsyncReturnType<
    typeof SourceCreate.prototype.runWithinTransaction
  >;
  export type SourceDestroy = AsyncReturnType<
    typeof SourceDestroy.prototype.runWithinTransaction
  >;
  export type SourceEdit = AsyncReturnType<
    typeof SourceEdit.prototype.runWithinTransaction
  >;
  export type SourceView = AsyncReturnType<
    typeof SourceView.prototype.runWithinTransaction
  >;
  export type SourcesList = AsyncReturnType<
    typeof SourcesList.prototype.runWithinTransaction
  >;
  export type sourceConnectionOptions = AsyncReturnType<
    typeof sourceConnectionOptions.prototype.runWithinTransaction
  >;
  export type SourcePreview = AsyncReturnType<
    typeof SourcePreview.prototype.runWithinTransaction
  >;

  export type PublicStatus = AsyncReturnType<
    typeof PublicStatus.prototype.runWithinTransaction
  >;
  export type PrivateStatus = AsyncReturnType<
    typeof PrivateStatus.prototype.runWithinTransaction
  >;

  export type Swagger = AsyncReturnType<typeof Swagger.prototype.run>;

  export type TeamMemberCreate = AsyncReturnType<
    typeof TeamMemberCreate.prototype.runWithinTransaction
  >;
  export type TeamMemberDestroy = AsyncReturnType<
    typeof TeamMemberDestroy.prototype.runWithinTransaction
  >;
  export type TeamMemberEdit = AsyncReturnType<
    typeof TeamMemberEdit.prototype.runWithinTransaction
  >;
  export type TeamMemberView = AsyncReturnType<
    typeof TeamMemberView.prototype.runWithinTransaction
  >;
  export type TeamMembersList = AsyncReturnType<
    typeof TeamMembersList.prototype.runWithinTransaction
  >;

  export type TeamCreate = AsyncReturnType<
    typeof TeamCreate.prototype.runWithinTransaction
  >;
  export type TeamDestroy = AsyncReturnType<
    typeof TeamDestroy.prototype.runWithinTransaction
  >;
  export type TeamEdit = AsyncReturnType<
    typeof TeamEdit.prototype.runWithinTransaction
  >;
  export type TeamInitialize = AsyncReturnType<
    typeof TeamInitialize.prototype.runWithinTransaction
  >;
  export type TeamView = AsyncReturnType<
    typeof TeamView.prototype.runWithinTransaction
  >;
  export type TeamsList = AsyncReturnType<
    typeof TeamsList.prototype.runWithinTransaction
  >;

  export type TotalsAction = AsyncReturnType<
    typeof TotalsAction.prototype.runWithinTransaction
  >;

  export type ObjectFind = AsyncReturnType<
    typeof ObjectFind.prototype.runWithinTransaction
  >;
}

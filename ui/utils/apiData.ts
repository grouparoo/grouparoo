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
  ProfilePropertyRule,
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
  export type ProfilePropertyRuleType = Partial<
    AsyncReturnType<ProfilePropertyRule["apiData"]>
  >;
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
  ClusterClearCache,
  ClusterReset,
} from "@grouparoo/core/src/actions/cluster";
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
  DestinationTrackGroup,
  DestinationUnTrackGroup,
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
  GroupsListByNewestMember,
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
import { PluginsList } from "@grouparoo/core/src/actions/plugins";
import {
  ProfilePropertyRuleCreate,
  ProfilePropertyRuleDestroy,
  ProfilePropertyRuleEdit,
  ProfilePropertyRuleMakeIdentifying,
  ProfilePropertyRuleFilterOptions,
  ProfilePropertyRuleGroups,
  ProfilePropertyRulePluginOptions,
  ProfilePropertyRuleProfilePreview,
  ProfilePropertyRuleTest,
  ProfilePropertyRuleView,
  ProfilePropertyRulesList,
  ProfilePropertyRulesOptions,
} from "@grouparoo/core/src/actions/profilePropertyRules";
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
  SourceBootstrapUniqueProfilePropertyRule,
  SourceConnectionApps,
  SourceCreate,
  SourceDestroy,
  SourceEdit,
  SourceView,
  SourcesList,
  SourcesCountPending,
  sourceConnectionOptions,
  SourcePreview,
} from "@grouparoo/core/src/actions/sources";
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

export namespace Actions {
  export type ApiKeyCreate = AsyncReturnType<typeof ApiKeyCreate.prototype.run>;
  export type ApiKeyDestroy = AsyncReturnType<
    typeof ApiKeyDestroy.prototype.run
  >;
  export type ApiKeyEdit = AsyncReturnType<typeof ApiKeyEdit.prototype.run>;
  export type ApiKeyView = AsyncReturnType<typeof ApiKeyView.prototype.run>;
  export type ApiKeysList = AsyncReturnType<typeof ApiKeysList.prototype.run>;

  export type AppCreate = AsyncReturnType<typeof AppCreate.prototype.run>;
  export type AppDestroy = AsyncReturnType<typeof AppDestroy.prototype.run>;
  export type AppEdit = AsyncReturnType<typeof AppEdit.prototype.run>;
  export type AppOptionOptions = AsyncReturnType<
    typeof AppOptionOptions.prototype.run
  >;
  export type AppOptions = AsyncReturnType<typeof AppOptions.prototype.run>;
  export type AppTest = AsyncReturnType<typeof AppTest.prototype.run>;
  export type AppView = AsyncReturnType<typeof AppView.prototype.run>;
  export type AppsList = AsyncReturnType<typeof AppsList.prototype.run>;

  export type AccountView = AsyncReturnType<typeof AccountView.prototype.run>;
  export type AccountEdit = AsyncReturnType<typeof AccountEdit.prototype.run>;

  export type ClusterClearCache = AsyncReturnType<
    typeof ClusterClearCache.prototype.run
  >;
  export type ClusterReset = AsyncReturnType<typeof ClusterReset.prototype.run>;

  export type DestinationsList = AsyncReturnType<
    typeof DestinationsList.prototype.run
  >;
  export type DestinationConnectionApps = AsyncReturnType<
    typeof DestinationConnectionApps.prototype.run
  >;
  export type DestinationConnectionOptions = AsyncReturnType<
    typeof DestinationConnectionOptions.prototype.run
  >;
  export type DestinationCreate = AsyncReturnType<
    typeof DestinationCreate.prototype.run
  >;
  export type DestinationDestroy = AsyncReturnType<
    typeof DestinationDestroy.prototype.run
  >;
  export type DestinationEdit = AsyncReturnType<
    typeof DestinationEdit.prototype.run
  >;
  export type DestinationExport = AsyncReturnType<
    typeof DestinationExport.prototype.run
  >;
  export type DestinationExportArrayProperties = AsyncReturnType<
    typeof DestinationExportArrayProperties.prototype.run
  >;
  export type DestinationMappingOptions = AsyncReturnType<
    typeof DestinationMappingOptions.prototype.run
  >;
  export type DestinationProfilePreview = AsyncReturnType<
    typeof DestinationProfilePreview.prototype.run
  >;
  export type DestinationTrackGroup = AsyncReturnType<
    typeof DestinationTrackGroup.prototype.run
  >;
  export type DestinationUnTrackGroup = AsyncReturnType<
    typeof DestinationUnTrackGroup.prototype.run
  >;
  export type DestinationView = AsyncReturnType<
    typeof DestinationView.prototype.run
  >;

  export type EventAutocompleteType = AsyncReturnType<
    typeof EventAutocompleteType.prototype.run
  >;
  export type EventCreate = AsyncReturnType<typeof EventCreate.prototype.run>;
  export type EventView = AsyncReturnType<typeof EventView.prototype.run>;
  export type EventDestroy = AsyncReturnType<typeof EventDestroy.prototype.run>;
  export type EventsCounts = AsyncReturnType<typeof EventsCounts.prototype.run>;
  export type EventsList = AsyncReturnType<typeof EventsList.prototype.run>;
  export type EventsTypes = AsyncReturnType<typeof EventsTypes.prototype.run>;

  export type ExportView = AsyncReturnType<typeof ExportView.prototype.run>;
  export type ExportsTotals = AsyncReturnType<
    typeof ExportsTotals.prototype.run
  >;
  export type ExportsList = AsyncReturnType<typeof ExportsList.prototype.run>;

  export type FileCreate = AsyncReturnType<typeof FileCreate.prototype.run>;
  export type FileDestroy = AsyncReturnType<typeof FileDestroy.prototype.run>;
  export type FileDetails = AsyncReturnType<typeof FileDetails.prototype.run>;
  export type FileOptions = AsyncReturnType<typeof FileOptions.prototype.run>;
  export type FileView = AsyncReturnType<typeof FileView.prototype.run>;
  export type FilesList = AsyncReturnType<typeof FilesList.prototype.run>;

  export type GroupAddProfile = AsyncReturnType<
    typeof GroupAddProfile.prototype.run
  >;
  export type GroupCountComponentMembers = AsyncReturnType<
    typeof GroupCountComponentMembers.prototype.run
  >;
  export type GroupCountPotentialMembers = AsyncReturnType<
    typeof GroupCountPotentialMembers.prototype.run
  >;
  export type GroupCreate = AsyncReturnType<typeof GroupCreate.prototype.run>;
  export type GroupDestroy = AsyncReturnType<typeof GroupDestroy.prototype.run>;
  export type GroupEdit = AsyncReturnType<typeof GroupEdit.prototype.run>;
  export type GroupExport = AsyncReturnType<typeof GroupExport.prototype.run>;
  export type GroupListDestinations = AsyncReturnType<
    typeof GroupListDestinations.prototype.run
  >;
  export type GroupRemoveProfile = AsyncReturnType<
    typeof GroupRemoveProfile.prototype.run
  >;
  export type GroupRun = AsyncReturnType<typeof GroupRun.prototype.run>;
  export type GroupView = AsyncReturnType<typeof GroupView.prototype.run>;
  export type GroupsList = AsyncReturnType<typeof GroupsList.prototype.run>;
  export type GroupsListByNewestMember = AsyncReturnType<
    typeof GroupsListByNewestMember.prototype.run
  >;
  export type GroupsRuleOptions = AsyncReturnType<
    typeof GroupsRuleOptions.prototype.run
  >;

  export type ImportsList = AsyncReturnType<typeof ImportsList.prototype.run>;
  export type ImportCreate = AsyncReturnType<typeof ImportCreate.prototype.run>;
  export type ImportView = AsyncReturnType<typeof ImportView.prototype.run>;

  export type LogsList = AsyncReturnType<typeof LogsList.prototype.run>;

  export type NotificationsList = AsyncReturnType<
    typeof NotificationsList.prototype.run
  >;
  export type NotificationView = AsyncReturnType<
    typeof NotificationView.prototype.run
  >;

  export type NavigationList = AsyncReturnType<
    typeof NavigationList.prototype.run
  >;

  export type PluginsList = AsyncReturnType<typeof PluginsList.prototype.run>;

  export type ProfilePropertyRuleCreate = AsyncReturnType<
    typeof ProfilePropertyRuleCreate.prototype.run
  >;
  export type ProfilePropertyRuleDestroy = AsyncReturnType<
    typeof ProfilePropertyRuleDestroy.prototype.run
  >;
  export type ProfilePropertyRuleEdit = AsyncReturnType<
    typeof ProfilePropertyRuleEdit.prototype.run
  >;
  export type ProfilePropertyRuleMakeIdentifying = AsyncReturnType<
    typeof ProfilePropertyRuleMakeIdentifying.prototype.run
  >;
  export type ProfilePropertyRuleFilterOptions = AsyncReturnType<
    typeof ProfilePropertyRuleFilterOptions.prototype.run
  >;
  export type ProfilePropertyRuleGroups = AsyncReturnType<
    typeof ProfilePropertyRuleGroups.prototype.run
  >;
  export type ProfilePropertyRulePluginOptions = AsyncReturnType<
    typeof ProfilePropertyRulePluginOptions.prototype.run
  >;
  export type ProfilePropertyRuleProfilePreview = AsyncReturnType<
    typeof ProfilePropertyRuleProfilePreview.prototype.run
  >;
  export type ProfilePropertyRuleTest = AsyncReturnType<
    typeof ProfilePropertyRuleTest.prototype.run
  >;
  export type ProfilePropertyRuleView = AsyncReturnType<
    typeof ProfilePropertyRuleView.prototype.run
  >;
  export type ProfilePropertyRulesList = AsyncReturnType<
    typeof ProfilePropertyRulesList.prototype.run
  >;
  export type ProfilePropertyRulesOptions = AsyncReturnType<
    typeof ProfilePropertyRulesOptions.prototype.run
  >;

  export type ProfileAutocompleteProfileProperty = AsyncReturnType<
    typeof ProfileAutocompleteProfileProperty.prototype.run
  >;
  export type ProfileCreate = AsyncReturnType<
    typeof ProfileCreate.prototype.run
  >;
  export type ProfileDestroy = AsyncReturnType<
    typeof ProfileDestroy.prototype.run
  >;
  export type ProfileEdit = AsyncReturnType<typeof ProfileEdit.prototype.run>;
  export type ProfileImportAndExport = AsyncReturnType<
    typeof ProfileImportAndExport.prototype.run
  >;
  export type ProfileView = AsyncReturnType<typeof ProfileView.prototype.run>;
  export type ProfilesImportAndUpdate = AsyncReturnType<
    typeof ProfilesImportAndUpdate.prototype.run
  >;
  export type ProfilesList = AsyncReturnType<typeof ProfilesList.prototype.run>;

  export type ResqueDelDelayed = AsyncReturnType<
    typeof ResqueDelDelayed.prototype.run
  >;
  export type ResqueDelLock = AsyncReturnType<
    typeof ResqueDelLock.prototype.run
  >;
  export type ResqueDelQueue = AsyncReturnType<
    typeof ResqueDelQueue.prototype.run
  >;
  export type ResqueDelayedJobs = AsyncReturnType<
    typeof ResqueDelayedJobs.prototype.run
  >;
  export type ResqueFailedCount = AsyncReturnType<
    typeof ResqueFailedCount.prototype.run
  >;
  export type ResqueForceCleanWorker = AsyncReturnType<
    typeof ResqueForceCleanWorker.prototype.run
  >;
  export type ResqueLoadWorkerQueues = AsyncReturnType<
    typeof ResqueLoadWorkerQueues.prototype.run
  >;
  export type ResqueLocks = AsyncReturnType<typeof ResqueLocks.prototype.run>;
  export type ResqueQueued = AsyncReturnType<typeof ResqueQueued.prototype.run>;
  export type ResqueRedisInfo = AsyncReturnType<
    typeof ResqueRedisInfo.prototype.run
  >;
  export type ResqueRemoveAllFailed = AsyncReturnType<
    typeof ResqueRemoveAllFailed.prototype.run
  >;
  export type ResqueRemoveFailed = AsyncReturnType<
    typeof ResqueRemoveFailed.prototype.run
  >;
  export type ResqueResqueDetails = AsyncReturnType<
    typeof ResqueResqueDetails.prototype.run
  >;
  export type ResqueResqueFailed = AsyncReturnType<
    typeof ResqueResqueFailed.prototype.run
  >;
  export type ResqueRetryAndRemoveAllFailed = AsyncReturnType<
    typeof ResqueRetryAndRemoveAllFailed.prototype.run
  >;
  export type ResqueRetryAndRemoveFailed = AsyncReturnType<
    typeof ResqueRetryAndRemoveFailed.prototype.run
  >;
  export type ResqueRunDelayed = AsyncReturnType<
    typeof ResqueRunDelayed.prototype.run
  >;

  export type RunEdit = AsyncReturnType<typeof RunEdit.prototype.run>;
  export type RunView = AsyncReturnType<typeof RunView.prototype.run>;
  export type RunsList = AsyncReturnType<typeof RunsList.prototype.run>;

  export type ScheduleCreate = AsyncReturnType<
    typeof ScheduleCreate.prototype.run
  >;
  export type ScheduleDestroy = AsyncReturnType<
    typeof ScheduleDestroy.prototype.run
  >;
  export type ScheduleEdit = AsyncReturnType<typeof ScheduleEdit.prototype.run>;
  export type ScheduleRun = AsyncReturnType<typeof ScheduleRun.prototype.run>;
  export type ScheduleView = AsyncReturnType<typeof ScheduleView.prototype.run>;
  export type SchedulesList = AsyncReturnType<
    typeof SchedulesList.prototype.run
  >;

  export type SessionCreate = AsyncReturnType<
    typeof SessionCreate.prototype.run
  >;
  export type SessionDestroy = AsyncReturnType<
    typeof SessionDestroy.prototype.run
  >;
  export type SessionView = AsyncReturnType<typeof SessionView.prototype.run>;

  export type SettingEdit = AsyncReturnType<typeof SettingEdit.prototype.run>;
  export type SettingsList = AsyncReturnType<typeof SettingsList.prototype.run>;

  export type SetupStepEdit = AsyncReturnType<
    typeof SetupStepEdit.prototype.run
  >;
  export type SetupStepsList = AsyncReturnType<
    typeof SetupStepsList.prototype.run
  >;

  export type SourceBootstrapUniqueProfilePropertyRule = AsyncReturnType<
    typeof SourceBootstrapUniqueProfilePropertyRule.prototype.run
  >;
  export type SourceConnectionApps = AsyncReturnType<
    typeof SourceConnectionApps.prototype.run
  >;
  export type SourceCreate = AsyncReturnType<typeof SourceCreate.prototype.run>;
  export type SourceDestroy = AsyncReturnType<
    typeof SourceDestroy.prototype.run
  >;
  export type SourceEdit = AsyncReturnType<typeof SourceEdit.prototype.run>;
  export type SourceView = AsyncReturnType<typeof SourceView.prototype.run>;
  export type SourcesList = AsyncReturnType<typeof SourcesList.prototype.run>;
  export type SourcesCountPending = AsyncReturnType<
    typeof SourcesCountPending.prototype.run
  >;
  export type sourceConnectionOptions = AsyncReturnType<
    typeof sourceConnectionOptions.prototype.run
  >;
  export type SourcePreview = AsyncReturnType<
    typeof SourcePreview.prototype.run
  >;

  export type Swagger = AsyncReturnType<typeof Swagger.prototype.run>;

  export type TeamMemberCreate = AsyncReturnType<
    typeof TeamMemberCreate.prototype.run
  >;
  export type TeamMemberDestroy = AsyncReturnType<
    typeof TeamMemberDestroy.prototype.run
  >;
  export type TeamMemberEdit = AsyncReturnType<
    typeof TeamMemberEdit.prototype.run
  >;
  export type TeamMemberView = AsyncReturnType<
    typeof TeamMemberView.prototype.run
  >;
  export type TeamMembersList = AsyncReturnType<
    typeof TeamMembersList.prototype.run
  >;

  export type TeamCreate = AsyncReturnType<typeof TeamCreate.prototype.run>;
  export type TeamDestroy = AsyncReturnType<typeof TeamDestroy.prototype.run>;
  export type TeamEdit = AsyncReturnType<typeof TeamEdit.prototype.run>;
  export type TeamInitialize = AsyncReturnType<
    typeof TeamInitialize.prototype.run
  >;
  export type TeamView = AsyncReturnType<typeof TeamView.prototype.run>;
  export type TeamsList = AsyncReturnType<typeof TeamsList.prototype.run>;

  export type TotalsAction = AsyncReturnType<typeof TotalsAction.prototype.run>;
}

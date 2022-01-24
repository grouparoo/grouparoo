import { AsyncReturnType } from "type-fest";

// -----------------------------------------

import {
  ApiKey,
  App,
  AppRefreshQuery,
  Destination,
  DestinationGroupMembership,
  Export,
  ExportProcessor,
  Group,
  GroupMember,
  GroupRule,
  Import,
  Log,
  Notification,
  Option,
  OAuthRequest,
  Permission,
  GrouparooModel,
  GrouparooRecord,
  RecordProperty,
  Property,
  Run,
  Setting,
  SetupStep,
  Schedule,
  Source,
  Team,
  TeamMember,
  StatusMetric,
  oAuthIdentity,
  oAuthProvider,
} from "@grouparoo/core";

export namespace Models {
  export type ApiKeyType = Partial<AsyncReturnType<ApiKey["apiData"]>>;
  export type AppType = Partial<AsyncReturnType<App["apiData"]>>;
  export type AppRefreshQueryType = Partial<
    AsyncReturnType<AppRefreshQuery["apiData"]>
  >;
  export type DestinationType = Partial<
    AsyncReturnType<Destination["apiData"]>
  >;
  export type DestinationGroupMembershipType = Partial<
    AsyncReturnType<DestinationGroupMembership["apiData"]>
  >;
  export type DestinationRecordPreviewType = Partial<
    AsyncReturnType<Destination["recordPreview"]>
  >;
  export type ExportType = Partial<AsyncReturnType<Export["apiData"]>>;
  export type ExportProcessorType = Partial<
    AsyncReturnType<ExportProcessor["apiData"]>
  >;
  export type GroupType = Partial<AsyncReturnType<Group["apiData"]>>;
  export type GroupMemberType = Partial<
    AsyncReturnType<GroupMember["apiData"]>
  >;
  export type GroupRuleType = Partial<AsyncReturnType<GroupRule["apiData"]>>;
  export type ImportType = Partial<AsyncReturnType<Import["apiData"]>>;
  export type LogType = Partial<AsyncReturnType<Log["apiData"]>>;
  export type OptionType = Partial<AsyncReturnType<Option["apiData"]>>;
  export type OAuthRequestType = Partial<
    AsyncReturnType<OAuthRequest["apiData"]>
  >;
  export type NotificationType = Partial<
    AsyncReturnType<Notification["apiData"]>
  >;
  export type PermissionType = Partial<AsyncReturnType<Permission["apiData"]>>;
  export type GrouparooRecordType = Partial<
    AsyncReturnType<GrouparooRecord["apiData"]>
  >;
  export type GrouparooModelType = Partial<
    AsyncReturnType<GrouparooModel["apiData"]>
  >;
  export type RecordPropertyType = Partial<
    AsyncReturnType<RecordProperty["apiData"]>
  >;
  export type PropertyType = Partial<AsyncReturnType<Property["apiData"]>>;
  export type SettingType = Partial<AsyncReturnType<Setting["apiData"]>>;
  export type SetupStepType = Partial<AsyncReturnType<SetupStep["apiData"]>>;
  export type RunType = Partial<AsyncReturnType<Run["apiData"]>>;
  export type ScheduleType = Partial<AsyncReturnType<Schedule["apiData"]>>;
  export type SourceType = Partial<AsyncReturnType<Source["apiData"]>>;
  export type TeamType = Partial<AsyncReturnType<Team["apiData"]>>;
  export type TeamMemberType = Partial<AsyncReturnType<TeamMember["apiData"]>>;
  export type EntityTypes =
    | AppType
    | SourceType
    | DestinationType
    | ScheduleType
    | GroupType;
}

// -----------------------------------------

export namespace OAuth {
  export type oAuthIdentityType = oAuthIdentity;
  export type oAuthProviderType = oAuthProvider;
}

// -----------------------------------------

export namespace Misc {
  export type StatusMetricType = StatusMetric;
}

// -----------------------------------------

import {
  ModelCreate,
  ModelDestroy,
  ModelEdit,
  ModelView,
  ModelsList,
  ModelOptions,
} from "@grouparoo/core/src/actions/models";
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
  AppOptions,
  AppTest,
  AppView,
  AppsList,
} from "@grouparoo/core/src/actions/apps";
import {
  AppRefreshQueryCreate,
  AppRefreshQueryDestroy,
  AppRefreshQueryEdit,
  AppRefreshQueryRun,
  AppRefreshQueryTest,
  AppRefreshQueryView,
} from "@grouparoo/core/src/actions/appRefreshQuery";
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
  DestinationRecordPreview,
  DestinationView,
} from "@grouparoo/core/src/actions/destinations";
import {
  ExportView,
  ExportsTotals,
  ExportsList,
  ExportsRetryFailed,
} from "@grouparoo/core/src/actions/exports";
import {
  ExportProcessorView,
  ExportProcessorsList,
} from "@grouparoo/core/src/actions/exportProcessors";
import {
  GroupCountComponentMembers,
  GroupCountPotentialMembers,
  GroupCreate,
  GroupDestroy,
  GroupEdit,
  GroupListDestinations,
  GroupRun,
  GroupView,
  GroupsList,
  GroupsRuleOptions,
} from "@grouparoo/core/src/actions/groups";
import { ImportsList, ImportView } from "@grouparoo/core/src/actions/imports";
import { LogsList } from "@grouparoo/core/src/actions/logs";
import {
  NotificationsList,
  NotificationView,
} from "@grouparoo/core/src/actions/notifications";
import { NavigationList } from "@grouparoo/core/src/actions/navigation";
import {
  PluginsList,
  PluginInstall,
  PluginUninstall,
} from "@grouparoo/core/src/actions/plugins";
import {
  ConfigValidate,
  ConfigApply,
  ConfigGenerate,
  ConfigUserCreate,
} from "@grouparoo/core/src/actions/config";
import {
  OAuthListProviders,
  OAuthClientStart,
  OAuthClientView,
  OAuthClientEdit,
} from "@grouparoo/core/src/actions/oAuth";
import {
  PropertyCreate,
  PropertyDestroy,
  PropertyEdit,
  PropertyFilterOptions,
  PropertyGroups,
  PropertyPluginOptions,
  PropertyRecordPreview,
  PropertyTest,
  PropertyView,
  PropertiesList,
  PropertiesOptions,
} from "@grouparoo/core/src/actions/properties";
import {
  RecordAutocompleteRecordProperty,
  RecordCreate,
  RecordDestroy,
  RecordImport,
  RecordsImport,
  RecordExport,
  RecordView,
  RecordsImportAndUpdate,
  RecordsList,
} from "@grouparoo/core/src/actions/records";
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
  SchedulesRun,
  ScheduleView,
  ScheduleFilterOptions,
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
  SettingCoreClusterName,
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
  SourceConnectionOptions,
  SourceGenerateSampleRecords,
  SourceDefaultPropertyOptions,
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
  export type ModelCreate = AsyncReturnType<
    typeof ModelCreate.prototype.runWithinTransaction
  >;
  export type ModelDestroy = AsyncReturnType<
    typeof ModelDestroy.prototype.runWithinTransaction
  >;
  export type ModelEdit = AsyncReturnType<
    typeof ModelEdit.prototype.runWithinTransaction
  >;
  export type ModelView = AsyncReturnType<
    typeof ModelView.prototype.runWithinTransaction
  >;
  export type ModelsList = AsyncReturnType<
    typeof ModelsList.prototype.runWithinTransaction
  >;
  export type ModelOptions = AsyncReturnType<
    typeof ModelOptions.prototype.runWithinTransaction
  >;

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
  export type AppRefreshQueryCreate = AsyncReturnType<
    typeof AppRefreshQueryCreate.prototype.runWithinTransaction
  >;
  export type AppRefreshQueryDestroy = AsyncReturnType<
    typeof AppRefreshQueryDestroy.prototype.runWithinTransaction
  >;
  export type AppRefreshQueryEdit = AsyncReturnType<
    typeof AppRefreshQueryEdit.prototype.runWithinTransaction
  >;
  export type AppRefreshQueryView = AsyncReturnType<
    typeof AppRefreshQueryView.prototype.runWithinTransaction
  >;

  export type AppRefreshQueryRun = AsyncReturnType<
    typeof AppRefreshQueryRun.prototype.runWithinTransaction
  >;
  export type AppRefreshQueryTest = AsyncReturnType<
    typeof AppRefreshQueryTest.prototype.runWithinTransaction
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
  export type DestinationRecordPreview = AsyncReturnType<
    typeof DestinationRecordPreview.prototype.runWithinTransaction
  >;
  export type DestinationView = AsyncReturnType<
    typeof DestinationView.prototype.runWithinTransaction
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
  export type ExportsRetryFailed = AsyncReturnType<
    typeof ExportsRetryFailed.prototype.runWithinTransaction
  >;

  export type ExportProcessorView = AsyncReturnType<
    typeof ExportProcessorView.prototype.runWithinTransaction
  >;
  export type ExportProcessorsList = AsyncReturnType<
    typeof ExportProcessorsList.prototype.runWithinTransaction
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
  export type GroupListDestinations = AsyncReturnType<
    typeof GroupListDestinations.prototype.runWithinTransaction
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

  export type PluginsList = AsyncReturnType<
    typeof PluginsList.prototype.runWithinTransaction
  >;
  export type PluginInstall = AsyncReturnType<
    typeof PluginInstall.prototype.runWithinTransaction
  >;
  export type PluginUninstall = AsyncReturnType<
    typeof PluginUninstall.prototype.runWithinTransaction
  >;

  export type ConfigValidate = AsyncReturnType<
    typeof ConfigValidate.prototype.runWithinTransaction
  >;
  export type ConfigApply = AsyncReturnType<
    typeof ConfigApply.prototype.runWithinTransaction
  >;
  export type ConfigGenerate = AsyncReturnType<
    typeof ConfigGenerate.prototype.runWithinTransaction
  >;
  export type ConfigUserCreate = AsyncReturnType<
    typeof ConfigUserCreate.prototype.runWithinTransaction
  >;

  export type OAuthListProviders = AsyncReturnType<
    typeof OAuthListProviders.prototype.run
  >;
  export type OAuthClientStart = AsyncReturnType<
    typeof OAuthClientStart.prototype.run
  >;
  export type OAuthClientView = AsyncReturnType<
    typeof OAuthClientView.prototype.run
  >;
  export type OAuthClientEdit = AsyncReturnType<
    typeof OAuthClientEdit.prototype.run
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
  export type PropertyFilterOptions = AsyncReturnType<
    typeof PropertyFilterOptions.prototype.runWithinTransaction
  >;
  export type PropertyGroups = AsyncReturnType<
    typeof PropertyGroups.prototype.runWithinTransaction
  >;
  export type PropertyPluginOptions = AsyncReturnType<
    typeof PropertyPluginOptions.prototype.runWithinTransaction
  >;
  export type PropertyRecordPreview = AsyncReturnType<
    typeof PropertyRecordPreview.prototype.runWithinTransaction
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

  export type RecordAutocompleteRecordProperty = AsyncReturnType<
    typeof RecordAutocompleteRecordProperty.prototype.runWithinTransaction
  >;
  export type RecordCreate = AsyncReturnType<
    typeof RecordCreate.prototype.runWithinTransaction
  >;
  export type RecordDestroy = AsyncReturnType<
    typeof RecordDestroy.prototype.runWithinTransaction
  >;
  export type RecordImport = AsyncReturnType<typeof RecordImport.prototype.run>;
  export type RecordsImport = AsyncReturnType<
    typeof RecordsImport.prototype.run
  >;
  export type RecordExport = AsyncReturnType<
    typeof RecordExport.prototype.runWithinTransaction
  >;
  export type RecordView = AsyncReturnType<
    typeof RecordView.prototype.runWithinTransaction
  >;
  export type RecordsImportAndUpdate = AsyncReturnType<
    typeof RecordsImportAndUpdate.prototype.runWithinTransaction
  >;
  export type RecordsList = AsyncReturnType<
    typeof RecordsList.prototype.runWithinTransaction
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
  export type SchedulesRun = AsyncReturnType<
    typeof SchedulesRun.prototype.runWithinTransaction
  >;
  export type ScheduleView = AsyncReturnType<
    typeof ScheduleView.prototype.runWithinTransaction
  >;
  export type ScheduleFilterOptions = AsyncReturnType<
    typeof ScheduleFilterOptions.prototype.runWithinTransaction
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
  export type SettingCoreClusterName = AsyncReturnType<
    typeof SettingCoreClusterName.prototype.runWithinTransaction
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
  export type SourceConnectionOptions = AsyncReturnType<
    typeof SourceConnectionOptions.prototype.runWithinTransaction
  >;
  export type SourceGenerateSampleRecords = AsyncReturnType<
    typeof SourceGenerateSampleRecords.prototype.runWithinTransaction
  >;
  export type SourceDefaultPropertyOptions = AsyncReturnType<
    typeof SourceDefaultPropertyOptions.prototype.runWithinTransaction
  >;
  export type SourcePreview = AsyncReturnType<
    typeof SourcePreview.prototype.runWithinTransaction
  >;

  export type PublicStatus = AsyncReturnType<typeof PublicStatus.prototype.run>;
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

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
} from "../../";

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
} from "../../api/src/actions/apiKeys";
import { AccountEdit, AccountView } from "../../api/src/actions/account";
import {
  AppCreate,
  AppDestroy,
  AppEdit,
  AppOptionOptions,
  AppOptions,
  AppTest,
  AppView,
  AppsList,
} from "../../api/src/actions/apps";
import {} from "../../api/src/actions/cluster";
import {} from "../../api/src/actions/destinations";
import {} from "../../api/src/actions/events";
import {} from "../../api/src/actions/exports";
import {} from "../../api/src/actions/files";
import {} from "../../api/src/actions/groups";
import {} from "../../api/src/actions/imports";
import {} from "../../api/src/actions/logs";
import {} from "../../api/src/actions/navigation";
import {} from "../../api/src/actions/plugins";
import {} from "../../api/src/actions/profilePropertyRules";
import {} from "../../api/src/actions/profiles";
import {} from "../../api/src/actions/resque";
import {} from "../../api/src/actions/runs";
import {} from "../../api/src/actions/schedules";
import {} from "../../api/src/actions/session";
import {} from "../../api/src/actions/settings";
import {} from "../../api/src/actions/setupSteps";
import {} from "../../api/src/actions/sources";
import {} from "../../api/src/actions/swagger";
import {} from "../../api/src/actions/teamMembers";
import {} from "../../api/src/actions/teams";
import {} from "../../api/src/actions/totals";

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
}

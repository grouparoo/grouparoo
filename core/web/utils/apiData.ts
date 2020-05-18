import { AsyncReturnType } from "type-fest";

import {
  ApiKey,
  App,
  Destination,
  DestinationGroup,
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
  Schedule,
  Source,
  Team,
  TeamMember,
  EventArgs,
} from "../../";

export type ApiKeyAPIData = Partial<AsyncReturnType<ApiKey["apiData"]>>;
export type AppAPIData = Partial<AsyncReturnType<App["apiData"]>>;
export type DestinationAPIData = Partial<
  AsyncReturnType<Destination["apiData"]>
>;
export type DestinationGroupAPIData = Partial<
  AsyncReturnType<DestinationGroup["apiData"]>
>;
export type DestinationGroupMembershipAPIData = Partial<
  AsyncReturnType<DestinationGroupMembership["apiData"]>
>;
export type FileAPIData = Partial<AsyncReturnType<File["apiData"]>>;
export type ExportAPIData = Partial<AsyncReturnType<Export["apiData"]>>;
export type GroupAPIData = Partial<AsyncReturnType<Group["apiData"]>>;
export type GroupMemberAPIData = Partial<
  AsyncReturnType<GroupMember["apiData"]>
>;
export type GroupRuleAPIData = Partial<AsyncReturnType<GroupRule["apiData"]>>;
export type ImportAPIData = Partial<AsyncReturnType<Import["apiData"]>>;
export type LogAPIData = Partial<AsyncReturnType<Log["apiData"]>>;
export type PermissionAPIData = Partial<AsyncReturnType<Permission["apiData"]>>;
export type ProfileAPIData = Partial<AsyncReturnType<Profile["apiData"]>>;
export type ProfilePropertyAPIData = Partial<
  AsyncReturnType<ProfileProperty["apiData"]>
>;
export type ProfilePropertyRuleAPIData = Partial<
  AsyncReturnType<ProfilePropertyRule["apiData"]>
>;
export type RunAPIData = Partial<AsyncReturnType<Run["apiData"]>>;
export type ScheduleAPIData = Partial<AsyncReturnType<Schedule["apiData"]>>;
export type SourceAPIData = Partial<AsyncReturnType<Source["apiData"]>>;
export type TeamAPIData = Partial<AsyncReturnType<Team["apiData"]>>;
export type TeamMemberAPIData = Partial<AsyncReturnType<TeamMember["apiData"]>>;
export type EventAPIData = Partial<EventArgs>;

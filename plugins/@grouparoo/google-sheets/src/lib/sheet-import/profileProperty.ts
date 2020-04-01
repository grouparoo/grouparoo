import {
  App,
  SimpleAppOptions,
  Source,
  SimpleSourceOptions,
  Profile,
  ProfilePropertyRule,
  SimpleProfilePropertyRuleOptions,
} from "@grouparoo/core";

export async function profileProperty(
  app: App,
  appOptions: SimpleAppOptions,
  source: Source,
  sourceOptions: SimpleSourceOptions,
  sourceMapping: SimpleSourceOptions,
  profilePropertyRule: ProfilePropertyRule,
  profilePropertyRuleOptions: SimpleProfilePropertyRuleOptions,
  profile: Profile
) {
  // we always do nothing when called by profile update... we only exist to be used by the schedule & runs
  // TODO: should this be made optional in the plugin definition?
  return {};
}

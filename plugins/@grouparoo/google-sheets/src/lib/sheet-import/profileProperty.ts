import { ProfilePropertyPluginMethod } from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async () => {
  // we always do nothing when called by profile update... we only exist to be used by the schedule & runs
  // TODO: should this be made optional in the plugin definition?
  return null;
};

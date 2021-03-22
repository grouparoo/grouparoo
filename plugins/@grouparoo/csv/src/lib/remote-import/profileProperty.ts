import { ProfilePropertyPluginMethod } from "@grouparoo/core";
import { profileProperties } from "./profileProperties";

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  const multiArgs = Object.assign({}, args, {
    profiles: [args.profile],
    profileIds: [args.profile.id],
  });
  const profilePropertiesResponse = await profileProperties(multiArgs);
  return profilePropertiesResponse[args.profile.id];
};

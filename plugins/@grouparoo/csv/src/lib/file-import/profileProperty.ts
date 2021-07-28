import { ProfilePropertyPluginMethod } from "@grouparoo/core";
import { profileProperties } from "./profileProperties";

export const profileProperty: ProfilePropertyPluginMethod = async (args) => {
  const multiArgs = Object.assign({}, args, {
    profiles: [args.profile],
    profileIds: [args.profile.id],
    properties: [args.property],
    propertyIds: [args.property.id],
    propertyOptions: { [args.property.id]: args.propertyOptions },
    propertyFilters: { [args.property.id]: args.propertyFilters },
  });

  const profilePropertiesResponse = await profileProperties(multiArgs);
  return profilePropertiesResponse[args.profile.id] &&
    profilePropertiesResponse[args.profile.id][args.property.id]
    ? profilePropertiesResponse[args.profile.id][args.property.id]
    : [undefined];
};

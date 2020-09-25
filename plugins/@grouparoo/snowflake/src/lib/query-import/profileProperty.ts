import { getProfileProperty } from "../query";
import { ProfilePropertyPluginMethod } from "@grouparoo/core";

export const profileProperty: ProfilePropertyPluginMethod = async ({
  connection,
  profile,
  profilePropertyRule,
  profilePropertyRuleOptions,
}) => {
  const executeQuery = async (query: string) => {
    return connection.execute(query);
  };
  return getProfileProperty({
    profile,
    profilePropertyRule,
    profilePropertyRuleOptions,
    executeQuery,
  });
};

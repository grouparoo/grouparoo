import { PluginConnectionProfilePropertyRuleOption } from "@grouparoo/core";
import { queryKey } from "./pluginMethods";

export interface GetProfilePropertyRuleOptionsMethod {
  (): PluginConnectionProfilePropertyRuleOption[];
}

export const getProfilePropertyRuleOptions: GetProfilePropertyRuleOptionsMethod = () => {
  return [
    {
      key: queryKey,
      required: true,
      description: "The query to run, with mustache template variables",
      type: "textarea",
      options: async () => {
        return [];
      },
    },
  ];
};

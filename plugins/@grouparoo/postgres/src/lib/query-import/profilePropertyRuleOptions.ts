import { PluginConnectionProfilePropertyRuleOption } from "@grouparoo/core";

export const profilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = [
  {
    key: "query",
    required: true,
    description: "the query to run, with mustache template variables",
    type: "textarea",
    options: async () => {
      return [];
    },
  },
];

export const profilePropertyRuleOptions = [
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

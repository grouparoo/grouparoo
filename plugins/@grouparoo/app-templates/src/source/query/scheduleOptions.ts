import { PluginConnectionScheduleOption } from "@grouparoo/core";

export const getScheduleOptions = () => {
  const options: PluginConnectionScheduleOption[] = [
    {
      key: "query",
      required: true,
      description: "What query should I run?",
      type: "textarea",
      options: async () => {
        return [];
      },
    },
  ];

  return options;
};

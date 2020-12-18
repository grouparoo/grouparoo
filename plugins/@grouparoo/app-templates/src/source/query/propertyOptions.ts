import { PluginConnectionPropertyOption } from "@grouparoo/core";
import { queryKey } from "./pluginMethods";

export interface GetPropertyOptionsMethod {
  (): PluginConnectionPropertyOption[];
}

export const getPropertyOptions: GetPropertyOptionsMethod = () => {
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

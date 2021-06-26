import { PluginConnectionPropertyOption } from "@grouparoo/core";
import { GetPropertyOptionsMethodInputs } from "../shared/types";
import { queryKey } from "./pluginMethods";

export interface GetPropertyOptionsMethod {
  (args: GetPropertyOptionsMethodInputs): Promise<
    PluginConnectionPropertyOption[]
  >;
}

export const getPropertyOptions: GetPropertyOptionsMethod = async (args) => {
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

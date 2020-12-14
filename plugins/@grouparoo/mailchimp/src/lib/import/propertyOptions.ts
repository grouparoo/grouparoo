import { PluginConnectionPropertyOption } from "@grouparoo/core";
import { getFieldsAndExamples } from "./members";

export const propertyOptions: PluginConnectionPropertyOption[] = [
  {
    key: "field",
    required: true,
    description: "Data to record for each a member",
    type: "list",
    options: async ({ appOptions, sourceOptions }) => {
      return getFieldsAndExamples({ appOptions, sourceOptions });
    },
  },
];

import { PluginConnectionScheduleOption } from "@grouparoo/core";
import { GetScheduleOptionsMethodInputs } from "../shared/types";

export const getScheduleOptions = async (
  args: GetScheduleOptionsMethodInputs
) => {
  const options: PluginConnectionScheduleOption[] = [
    {
      key: "query",
      required: true,
      description: "What query should I run? ",
      type: "textarea",
      options: async () => {
        return [];
      },
    },
    {
      key: "propertyId",
      required: true,
      description: "What single property is this query returning?",
      type: "list",
      options: async ({ properties }) => {
        const opts = [];
        properties.forEach((property) => {
          opts.push({
            key: property.id,
            description: `${property.key} (${property.type})`,
          });
        });

        return opts;
      },
    },
  ];

  return options;
};

import { PluginConnectionScheduleOption } from "@grouparoo/core";

export const getScheduleOptions = () => {
  const options: PluginConnectionScheduleOption[] = [
    {
      key: "query",
      required: true,
      description:
        "What query should I run?  Do not include LIMIT or OFFSET, as theses will be controlled automatically according to your settings.",
      type: "textarea",
      options: async () => {
        return [];
      },
    },
    {
      key: "propertyGuid",
      required: true,
      description: "What single property is this query returning?",
      type: "list",
      options: async ({ properties }) => {
        const opts = [];
        properties.forEach((property) => {
          opts.push({
            key: property.guid,
            description: `${property.key} (${property.type})`,
          });
        });

        return opts;
      },
    },
  ];

  return options;
};

import { Property, PropertyOptionsMethod } from "@grouparoo/core";

export const propertyOptions: PropertyOptionsMethod = async () => [
  {
    key: "requiredProperties",
    required: true,
    description:
      "Grouparoo Property IDs for all properties used in customFunction",
    type: "list",
    options: async () => {
      // const existingProperties: string[] = [];
      const properties = await Property.findAll();
      return properties.map((property) => {
        return {
          key: property.id,
        };
      });
    },
  },
  {
    key: "customFunction",
    required: true,
    description:
      "Javascript function to transform existing Property(ies) to create a new ",
    type: "list",
    options: async () => {
      return undefined;
    },
  },
];

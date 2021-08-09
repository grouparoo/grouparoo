import { Property, PropertyOptionsMethod } from "@grouparoo/core";

export const propertyOptions: PropertyOptionsMethod = async () => [
  {
    key: "requiredProperties",
    required: true,
    description:
      "Grouparoo Property IDs for all properties used in customFunction",
    type: "lix  st",
    options: async () => {
      return undefined;
    },
  },
  {
    key: "customFunction",
    required: true,
    description:
      "Javascript function to transform existing Property(ies) to create a new one",
    type: "string",
    options: async () => {
      return undefined;
    },
  },
];

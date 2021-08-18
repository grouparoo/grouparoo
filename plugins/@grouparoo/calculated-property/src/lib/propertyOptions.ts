import { Property, PropertyOptionsMethod } from "@grouparoo/core";

export const propertyOptions: PropertyOptionsMethod = async () => [
  // {
  //   key: "requiredProperties",
  //   required: true,
  //   description:
  //     "Grouparoo Property IDs for all properties used in customFunction",
  //   type: "list",
  //   options: async () => {
  //     // TODO: return a list of the property keys in grouparoo
  //     return [];
  //   },
  // },
  {
    key: "customFunction",
    required: true,
    description:
      "Javascript function to transform existing Property(ies) to create a new one",
    type: "text",
    options: async () => {
      return null;
    },
  },
];

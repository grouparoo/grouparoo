import { Property, PropertyOptionsMethod } from "@grouparoo/core";

export const propertyOptions: PropertyOptionsMethod = async () => [
  {
    key: "customFunction",
    required: true,
    description:
      "Javascript function to transform existing Property(ies) to create a new one",
    type: "textarea",
    options: () => {
      return null;
    },
  },
];

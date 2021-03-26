import { ValidateQueryMethod } from "@grouparoo/app-templates/dist/source/query";

export const validateQuery: ValidateQueryMethod = ({ query }) => {
  query = JSON.parse(query);
  if (!Array.isArray(query) && typeof query !== "object") {
    throw new Error("Provide a valid Find query or Pipeline.");
  }
};

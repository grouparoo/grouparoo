import { UniquePropertyBootstrapOptions } from "@grouparoo/core";

export const uniquePropertyBootstrapOptions: UniquePropertyBootstrapOptions = async ({
  mappedColumn,
}) => {
  const options = { column: mappedColumn };
  return options;
};

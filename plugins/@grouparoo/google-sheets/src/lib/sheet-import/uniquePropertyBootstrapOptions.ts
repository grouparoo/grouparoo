import { UniquePropertyBootstrapOptions } from "@grouparoo/core";

export const uniquePropertyBootstrapOptions: UniquePropertyBootstrapOptions =
  async ({ mappedColumn }) => {
    return { column: mappedColumn };
  };

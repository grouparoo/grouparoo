import { AppParallelismMethod } from "@grouparoo/core";

export const parallelism: AppParallelismMethod = async () => {
  // https://developers.marketo.com/rest-api/marketo-integration-best-practices
  return 9; // 1 less than the actual limit
};

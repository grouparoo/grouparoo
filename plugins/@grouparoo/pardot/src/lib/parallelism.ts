import { AppParallelismMethod } from "@grouparoo/core";

export const parallelism: AppParallelismMethod = async () => {
  // https://developer.pardot.com/#rate-limits
  return 4; // 1 less than the actual limit
};

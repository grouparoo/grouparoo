import { AppParallelismMethod } from "@grouparoo/core";

export const parallelism: AppParallelismMethod = async () => {
  return 4; // search endpoint is limited to 4 per second
};

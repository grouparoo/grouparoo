import { AppParallelismMethod } from "@grouparoo/core";

export const parallelism: AppParallelismMethod = async () => {
  // https://trailhead.salesforce.com/en/content/learn/modules/app-development-without-limits/app-development-without-limits-concurrency#:~:text=API%20Requests.,a%20time%20in%20an%20org.
  // this is the limit for "long running" (20 seconds) jobs, but it seems like a good start
  return 24; // 1 less than the actual limit
};

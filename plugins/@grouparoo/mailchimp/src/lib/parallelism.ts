import { AppParallelismMethod } from "@grouparoo/core";

export const parallelism: AppParallelismMethod = async () => {
  return 9; // 1 less than the actual limit; https://mailchimp.com/developer/guides/get-started-with-mailchimp-api-3/
};

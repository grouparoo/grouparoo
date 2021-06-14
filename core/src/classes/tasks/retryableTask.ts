import { env } from "actionhero";
import { CLSTask } from "./clsTask";

function getBackoffStrategy() {
  if (!env || env === "development") return [1000, 5 * 1000, 10 * 1000];
  if (env === "test") return [1000];
  return [
    1 * 1000, // 1 second
    10 * 1000, // 10 seconds
    60 * 1000, // 1 minute
    60 * 1000 * 5, // 5 minutes
    60 * 1000 * 10, // 10 minutes
    60 * 1000 * 30, // 30 minutes
  ];
}

function getRetryLimit() {
  return getBackoffStrategy().length;
}

export abstract class RetryableTask extends CLSTask {
  constructor() {
    super();

    this.plugins = ["QueueLock", "Retry"];
    this.pluginOptions = {
      Retry: {
        retryLimit: getRetryLimit(),
        backoffStrategy: getBackoffStrategy(),
      },
    };
  }
}

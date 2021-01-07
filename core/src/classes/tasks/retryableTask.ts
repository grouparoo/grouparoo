import { env } from "actionhero";
import { CLSTask } from "./clsTask";

export abstract class RetryableTask extends CLSTask {
  constructor() {
    super();

    this.plugins = ["QueueLock", "Retry"];
    this.pluginOptions = {
      Retry: {
        retryLimit: env === "development" || env === "test" ? 1 : 7,
        backoffStrategy:
          env === "development" || env === "test"
            ? [1000]
            : [
                1000, // 1 second
                10 * 1000, // 10 seconds
                60 * 1000, // 1 minute
                60 * 1000 * 5, // 5 minutes
                60 * 1000 * 10, // 10 minutes
                60 * 1000 * 30, // 30 minutes
                60 * 1000 * 60, // 1 hour
              ],
      },
    };
  }
}

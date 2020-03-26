import { Task, config } from "actionhero";

export abstract class RetryableTask extends Task {
  constructor() {
    super();

    this.plugins = ["QueueLock", "Retry"];
    this.pluginOptions = {
      Retry: {
        retryLimit:
          config.process.env === "development" || config.process.env === "test"
            ? 1
            : 7,
        backoffStrategy:
          config.process.env === "development" || config.process.env === "test"
            ? [1]
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

import { Initializer, route } from "actionhero";

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = `@grouparoo/resque`;
  }

  async initialize() {
    route.registerRoute(
      "get",
      "/:apiVersion/resque/redisInfo",
      "resque:redisInfo"
    );
    route.registerRoute(
      "get",
      "/:apiVersion/resque/resqueDetails",
      "resque:resqueDetails"
    );
    route.registerRoute("get", "/:apiVersion/resque/queued", "resque:queued");
    route.registerRoute(
      "get",
      "/:apiVersion/resque/loadWorkerQueues",
      "resque:loadWorkerQueues"
    );
    route.registerRoute(
      "get",
      "/:apiVersion/resque/resqueFailedCount",
      "resque:resqueFailedCount"
    );
    route.registerRoute(
      "get",
      "/:apiVersion/resque/resqueFailed",
      "resque:resqueFailed"
    );
    route.registerRoute(
      "get",
      "/:apiVersion/resque/delayedjobs",
      "resque:delayedjobs"
    );
    route.registerRoute("get", "/:apiVersion/resque/locks", "resque:locks");

    route.registerRoute(
      "post",
      "/:apiVersion/resque/removeFailed",
      "resque:removeFailed"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/retryAndRemoveFailed",
      "resque:retryAndRemoveFailed"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/removeAllFailed",
      "resque:removeAllFailed"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/retryAndRemoveAllFailed",
      "resque:retryAndRemoveAllFailed"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/forceCleanWorker",
      "resque:forceCleanWorker"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/delQueue",
      "resque:delQueue"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/delDelayed",
      "resque:delDelayed"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/runDelayed",
      "resque:runDelayed"
    );
    route.registerRoute(
      "post",
      "/:apiVersion/resque/delLock",
      "resque:delLock"
    );
  }
}

import { Initializer, route } from "actionhero";

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = `@grouparoo/resque`;
  }

  async initialize() {
    route.registerRoute(
      "get",
      "/v:apiVersion/resque/redisInfo",
      "resque:redisInfo"
    );
    route.registerRoute(
      "get",
      "/v:apiVersion/resque/resqueDetails",
      "resque:resqueDetails"
    );
    route.registerRoute("get", "/v:apiVersion/resque/queued", "resque:queued");
    route.registerRoute(
      "get",
      "/v:apiVersion/resque/loadWorkerQueues",
      "resque:loadWorkerQueues"
    );
    route.registerRoute(
      "get",
      "/v:apiVersion/resque/resqueFailedCount",
      "resque:resqueFailedCount"
    );
    route.registerRoute(
      "get",
      "/v:apiVersion/resque/resqueFailed",
      "resque:resqueFailed"
    );
    route.registerRoute(
      "get",
      "/v:apiVersion/resque/delayedjobs",
      "resque:delayedjobs"
    );
    route.registerRoute("get", "/v:apiVersion/resque/locks", "resque:locks");

    route.registerRoute(
      "post",
      "/v:apiVersion/resque/removeFailed",
      "resque:removeFailed"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/retryAndRemoveFailed",
      "resque:retryAndRemoveFailed"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/removeAllFailed",
      "resque:removeAllFailed"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/retryAndRemoveAllFailed",
      "resque:retryAndRemoveAllFailed"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/forceCleanWorker",
      "resque:forceCleanWorker"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/delQueue",
      "resque:delQueue"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/delDelayed",
      "resque:delDelayed"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/runDelayed",
      "resque:runDelayed"
    );
    route.registerRoute(
      "post",
      "/v:apiVersion/resque/delLock",
      "resque:delLock"
    );
  }
}

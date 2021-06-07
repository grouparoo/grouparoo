import { EventDispatcher } from "./eventDispatcher";
import { Actions, Misc } from "../utils/apiData";

export class StatusHandler extends EventDispatcher {
  maxSamples: 50;
  matchers: { [name: string]: { topic: string; collection: string } } = {};
  metrics: {
    [topic: string]: {
      [collection: string]: {
        timestamp: number;
        metrics: Misc.StatusMetricType[];
      }[];
    };
  };

  constructor() {
    super();
    this.maxSamples = 50;
    this.metrics = {};
    this.matchers = {};
  }

  async subscribe(
    name: string,
    handler: Function,
    matcher: { topic: string; collection: string }
  ) {
    this.subscriptions[name] = handler;
    this.matchers[name] = matcher;
  }

  unsubscribe(name: string) {
    delete this.subscriptions[name];
    delete this.matchers[name];
  }

  async beforePublish(sample: {
    timestamp: number;
    metrics: Misc.StatusMetricType[];
  }) {
    const { timestamp, metrics } = sample;
    metrics.forEach((metric) => {
      const { topic, collection } = metric;
      if (!this.metrics[topic]) this.metrics[topic] = {};
      if (!this.metrics[topic][collection]) {
        this.metrics[topic][collection] = [];
      }

      this.metrics[topic][collection].push({ timestamp, metrics: [metric] });
      while (this.metrics[topic][collection].length > this.maxSamples) {
        this.metrics[topic][collection].shift();
      }
    });
  }

  async publish(
    data: { timestamp: number; metrics: Misc.StatusMetricType[] },
    toStore = true
  ) {
    if (toStore) await this.beforePublish(data);

    for (const key of Object.keys(this.subscriptions)) {
      const matcher = this.matchers[key];
      const subscription = this.subscriptions[key];
      const matchedMetrics = data.metrics.filter(
        (metric) =>
          metric.topic === matcher.topic &&
          metric.collection === matcher.collection
      );

      if (matchedMetrics.length > 0)
        await subscription({
          timestamp: data.timestamp,
          metrics: matchedMetrics,
        });
    }
  }

  // async afterSubscribe(name, handler: Function) {
  //   for (const topic of Object.keys(this.metrics)) {
  //     for (const collection of Object.keys(this.metrics[topic])) {
  //       const mostRecentSample = this.metrics[topic][collection][0];
  //       handler(mostRecentSample);
  //     }
  //   }
  // }

  async getSamples(execApi) {
    const { metrics }: Actions.PrivateStatus = await execApi(
      "get",
      `/status/private`
    );
    if (!metrics) return;
    this.metrics = metrics;

    for (const topic of Object.keys(this.metrics)) {
      for (const collection of Object.keys(this.metrics[topic])) {
        this.publish(
          this.metrics[topic][collection][
            this.metrics[topic][collection].length - 1
          ],
          false
        );
      }
    }
  }
}

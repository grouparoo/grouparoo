import { EventDispatcher } from "../utils/eventDispatcher";
import { Actions, Misc } from "../utils/apiData";
import { Client } from "../client/client";

export class StatusHandler extends EventDispatcher<
  Actions.PrivateStatus["metrics"]
> {
  maxSamples: number;
  matchers: { [name: string]: { topic: string; collection: string } } = {};
  metrics: {
    [topic: string]: {
      [collection: string]: {
        metric: Misc.StatusMetricType;
        timestamp: number;
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
    await this.afterSubscribe(name, handler, matcher);
  }

  unsubscribe(name: string) {
    delete this.subscriptions[name];
    delete this.matchers[name];
  }

  async beforePublish(sample: {
    timestamp?: number;
    metric?: Misc.StatusMetricType;
    metrics?: { timestamp: number; metric: Misc.StatusMetricType }[];
  }) {
    let { timestamp, metrics, metric } = sample;
    if (!metrics) metrics = [{ timestamp, metric }];

    metrics.forEach(({ metric, timestamp }) => {
      const { topic, collection } = metric;
      if (!this.metrics[topic]) this.metrics[topic] = {};
      if (!this.metrics[topic][collection]) {
        this.metrics[topic][collection] = [];
      }

      this.metrics[topic][collection].push({ timestamp, metric });
      while (this.metrics[topic][collection].length > this.maxSamples) {
        this.metrics[topic][collection].shift();
      }
    });
  }

  async publish(
    sample: {
      timestamp?: number;
      metric?: Misc.StatusMetricType;
      metrics?: { timestamp: number; metric: Misc.StatusMetricType }[];
    },
    toStore = true
  ) {
    if (toStore) await this.beforePublish(sample);

    let { timestamp, metrics, metric } = sample;
    if (!metrics) metrics = [{ timestamp, metric }];

    const debounceKeys: string[] = [];

    for (const key of Object.keys(this.subscriptions)) {
      for (const { metric, timestamp } of metrics) {
        const matcher = this.matchers[key];
        const subscription = this.subscriptions[key];
        const match =
          metric.topic === matcher.topic &&
          metric.collection === matcher.collection;

        if (match && !debounceKeys.includes(key)) {
          debounceKeys.push(key);
          await subscription({ metric, timestamp });
        }
      }
    }
  }

  async afterSubscribe(
    name: string,
    handler: Function,
    matcher: { topic: string; collection: string }
  ) {
    let debounce = false;
    for (const topic of Object.keys(this.metrics)) {
      for (const collection of Object.keys(this.metrics[topic])) {
        const latestTimestamp =
          this.metrics[topic][collection][
            this.metrics[topic][collection].length - 1
          ].timestamp;

        const latestMetrics = this.metrics[topic][collection].filter(
          (m) => m.timestamp === latestTimestamp
        );

        const match =
          latestMetrics[0].metric.topic === matcher.topic &&
          latestMetrics[0].metric.collection === matcher.collection;

        if (match && !debounce) {
          debounce = true;
          handler(latestMetrics[0]);
        }
      }
    }
  }

  async getSamples(client: Client) {
    const { metrics }: Actions.PrivateStatus = await client.action(
      "get",
      `/status/private`
    );
    if (!metrics) return;
    this.metrics = metrics;

    for (const topic of Object.keys(this.metrics)) {
      for (const collection of Object.keys(this.metrics[topic])) {
        while (this.metrics[topic][collection].length > this.maxSamples) {
          this.metrics[topic][collection].shift();
        }

        const latestTimestamp =
          this.metrics[topic][collection][
            this.metrics[topic][collection].length - 1
          ].timestamp;

        const latestMetrics = this.metrics[topic][collection].filter(
          (m) => m.timestamp === latestTimestamp
        );

        this.publish({ metrics: latestMetrics }, false);
      }
    }
  }
}

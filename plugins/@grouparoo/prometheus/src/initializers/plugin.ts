import { Initializer, route, api } from "actionhero";
import { Status } from "@grouparoo/core";
import { collectDefaultMetrics, Gauge, Registry } from "prom-client";

declare module "actionhero" {
  export interface Api {
    prometheus: {
      registry: Registry;
      observe: () => Promise<void>;
      gauges: Gauge<any>[];
    };
  }
}

const packageJSON = require("./../../package.json");

export default class PrometheusInitializer extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
    this.startPriority = 100;
  }

  async initialize() {
    route.registerRoute(
      "get",
      "/v:apiVersion/prometheus/metrics",
      "prometheus:metrics"
    );
  }

  async start() {
    api.prometheus = {
      gauges: [],
      registry: new Registry(),
      observe: this.observe,
    };
    collectDefaultMetrics({ register: api.prometheus.registry });

    // the name of he metric matches `grouparoo_collectionName_typeName_aggregationName`

    api.prometheus.gauges.push(
      new Gauge({
        name: "grouparoo_workers_cluster_count",
        help: "Number of workers in the cluster",
      })
    );

    api.prometheus.gauges.push(
      new Gauge({
        name: "grouparoo_resqueErrors_cluster_count",
        help: "Number of Resque Errors in the cluster",
      })
    );

    api.prometheus.gauges.push(
      new Gauge({
        name: "grouparoo_Run_pending_count",
        help: "Number of pending Runs in the cluster",
      })
    );

    api.prometheus.gauges.push(
      new Gauge({
        name: "grouparoo_Import_pending_count",
        help: "Number of pending Import in the cluster",
      })
    );

    api.prometheus.gauges.push(
      new Gauge({
        name: "grouparoo_Record_pending_count",
        help: "Number of pending Records in the cluster",
      })
    );

    api.prometheus.gauges.push(
      new Gauge({
        name: "grouparoo_Export_pending_count",
        help: "Number of pending Exports in the cluster",
      })
    );

    api.prometheus.gauges.push(
      new Gauge({
        name: "grouparoo_Record_totals_count",
        help: "Number of Records in the cluster",
      })
    );

    api.prometheus.gauges.forEach((g) =>
      api.prometheus.registry.registerMetric(g)
    );
  }

  // take the most recent status metrics from Grouparoo and load them into the Prometheus histograms we want
  async observe() {
    const status = await Status.getCurrent();

    for (const gauge of api.prometheus.gauges) {
      const [owner, collectionName, typeName, aggregationName] = gauge[
        "name"
      ].split("_") as string[];

      if (owner !== "grouparoo") continue;
      const collection = status[collectionName];
      if (!collection) continue;
      const metrics = collection[typeName];
      if (!metrics) continue;
      if (metrics.length === 0) continue;

      const metric = metrics[0];
      const value = metric.metric[aggregationName];
      if (value !== undefined) gauge.set(value);
    }
  }
}

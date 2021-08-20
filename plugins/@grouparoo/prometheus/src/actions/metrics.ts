import { Action } from "actionhero";
import { collectDefaultMetrics, Gauge, Registry } from "prom-client";
import { Status } from "@grouparoo/core";

//TODO: target specific metrics *OR* generalize to any metric
const register = new Registry();
const workersCount = new Gauge({
  name: "workers_count",
  help: "Number of workers in the cluster",
  async collect() {
    let status = await Status.getCurrent();
    this.set(status.workers.cluster[0].metric.count);
  },
});
register.registerMetric(workersCount);

export default class PrometheusAction extends Action {
  constructor() {
    super();
    this.name = "prometheus:getMetrics";
    this.description = "Metrics endpoint supporting prometheus format";
    this.middleware = ["authenticated-action"];
    //@ts-ignore
    this.permission = { topic: "system", mode: "read" };
  }

  async run(data) {
    data.connection.rawConnection.responseHeaders.push([
      "Content-Type",
      "text/plain",
    ]);
    data.response = await register.metrics();
  }
}

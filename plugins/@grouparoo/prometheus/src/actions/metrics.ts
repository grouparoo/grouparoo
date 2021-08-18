import { Action } from "actionhero";
import { collectDefaultMetrics, Gauge, Registry } from "prom-client";
// import { Status } from "@grouparoo/core";

const register = new Registry();
const testMetric = new Gauge({
  name: "test_metric",
  help: "This is just a test metric between 1 and 10",
  collect() {
    this.set(Math.floor(Math.random() * 10) + 1);
  },
});
register.registerMetric(testMetric);

export default class PrometheusAction extends Action {
  constructor() {
    super();
    this.name = "prometheus:getMetrics";
    this.description = "Metrics endpoint supporting prometheus format";
    // this.inputs = {};
    // this.middleware = ["authenticated-action"];
    // this.permission = { topic: "profile", mode: "read" }; //TODO
  }

  async run(data) {
    // collectDefaultMetrics({
    //   prefix,
    //   labels: { NODE_APP_INSTANCE: process.env.NODE_APP_INSTANCE },
    // });
    // let status = await Status.getCurrent();
    data.connection.rawConnection.responseHeaders.push([
      "Content-Type",
      "text/plain",
    ]);
    data.response = await register.metrics();
  }
}

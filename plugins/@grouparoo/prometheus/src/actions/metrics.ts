import { api } from "actionhero";
import { AuthenticatedAction } from "@grouparoo/core";

export default class PrometheusMetrics extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "prometheus:metrics";
    this.description = "Metrics endpoint supporting prometheus format";
    this.permission = { topic: "system", mode: "read" };
  }

  async runWithinTransaction(data) {
    data.connection.rawConnection.responseHeaders.push([
      "Content-Type",
      "text/plain",
    ]);
    await api.prometheus.observe();
    data.response = await api.prometheus.registry.metrics();
  }
}

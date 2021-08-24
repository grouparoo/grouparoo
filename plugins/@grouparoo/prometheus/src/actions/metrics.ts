import { AuthenticatedAction, Status } from "@grouparoo/core";
import { collectDefaultMetrics, Gauge, Registry } from "prom-client";

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

export default class PrometheusAction extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "prometheus:getMetrics";
    this.description = "Metrics endpoint supporting prometheus format";
    this.permission = { topic: "system", mode: "read" };
  }

  async runWithinTransaction(data) {
    data.connection.rawConnection.responseHeaders.push([
      "Content-Type",
      "text/plain",
    ]);
    data.response = await register.metrics();
  }
}

//SEE: https://github.com/prometheus/docs/blob/master/content/docs/instrumenting/exposition_formats.md
//SEE: https://github.com/grouparoo/grouparoo/blob/c850e80cae15615ce8276bc7d5e66d72f600ce95/core/__tests__/modules/status.ts#L106

//Destination.deleted[0].metric.count         Number
//Export.pending[0].metric.count              Number
//Group.deleted[0].metric.country             Number
//Group.totals[0].metric.count                Number
//Import.pending[0].metric.count              Number
//Import.pendingBySource.metric.count         Number
//Profile.pending[0].metric.count             Number
//Profile.deleted[0].metric.count             Number
//Profile.totals[0].metric.count              Number
//Property.deleted[0].metric.count            Number
//Run.pending[0].metric.count                 Number
//Run.percentComplete[0].metric.count         ???
//Source.deleted[0].metric.count              Number
//Source.nextRun[0].metric.count              Number
//node_env.cluster[0].metric.value            String e.g. "test"
//os.cluster[0].metric.value                  String e.g. "linux"
//resqueDetails.cluster[0].metric.value       ??? e.g. "structure"
//resqueErrors.cluster[0].metric.count        Number
//unreadNotifications.cluster[0].metric.count Number
//workers.cluster[0].metric.count             Number

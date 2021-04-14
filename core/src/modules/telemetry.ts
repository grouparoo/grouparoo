import { plugin } from "../modules/plugin";

import { StatusMetric, StatusReporters } from "./../modules/statusReporters";

export namespace Telemetry {
  export async function build() {
    const metrics: StatusMetric[] = [];

    // load settings
    const clusterName = (await plugin.readSetting("core", "cluster-name"))
      .value;
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;
    const customerLicense = (
      await plugin.readSetting("telemetry", "customer-license")
    ).value;

    // information about how Grouparoo is being operated
    metrics.push(await StatusReporters.Cluster.Workers.countWorkers());
    metrics.push(await StatusReporters.Cluster.Workers.countErrors());
    metrics.push(await StatusReporters.Cluster.OS.exact());
    metrics.push(await StatusReporters.Cluster.NODE_ENV.exact());

    // versions of the plugins installed
    metrics.push(...(await StatusReporters.Plugins.Versions()));

    // usage counts
    metrics.push(...(await StatusReporters.Totals.Models()));

    // usage by source
    metrics.push(...(await StatusReporters.Totals.SourceTotals()));

    // usage by destination
    metrics.push(...(await StatusReporters.Totals.DestinationTotals()));

    return {
      name: clusterName,
      id: customerId,
      license: customerLicense,
      metrics: metrics,
    };
  }
}

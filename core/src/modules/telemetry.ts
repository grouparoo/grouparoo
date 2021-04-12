import { plugin } from "../modules/plugin";

import {
  TelemetryMetric,
  TelemetryReporters,
} from "./../modules/telemetryReporters";

export namespace Telemetry {
  export async function build() {
    const metrics: TelemetryMetric[] = [];

    // load settings
    const clusterName = (await plugin.readSetting("core", "cluster-name"))
      .value;
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;
    const customerLicense = (
      await plugin.readSetting("telemetry", "customer-license")
    ).value;

    // information about how Grouparoo is being operated
    metrics.push(await TelemetryReporters.Cluster.Workers.countWorkers());
    metrics.push(await TelemetryReporters.Cluster.OS.exact());
    metrics.push(await TelemetryReporters.Cluster.NODE_ENV.exact());

    // versions of the plugins installed
    metrics.push(...(await TelemetryReporters.Plugins.Versions()));

    // usage counts
    metrics.push(...(await TelemetryReporters.Totals.Models()));

    // usage by source
    metrics.push(...(await TelemetryReporters.Totals.SourceTotals()));

    // usage by destination
    metrics.push(...(await TelemetryReporters.Totals.DestinationTotals()));

    return {
      name: clusterName,
      id: customerId,
      license: customerLicense,
      metrics: metrics,
    };
  }
}

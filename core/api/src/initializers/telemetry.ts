import { Initializer, api } from "actionhero";
import { plugin } from "../modules/plugin";
import * as UUID from "uuid";
import {
  TelemetryMetric,
  TelemetryReporters,
} from "./../modules/telemetryReporters";

declare module "actionhero" {
  export interface Api {
    telemetry: {
      build: () => Promise<{
        guid: string;
        name: string;
        license: string;
        metrics: TelemetryMetric[];
      }>;
    };
  }
}

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "telemetry";
  }

  async initialize() {
    api.telemetry = {
      build: async () => {
        const metrics: TelemetryMetric[] = [];

        // load settings
        const clusterName = (await plugin.readSetting("core", "cluster-name"))
          .value;
        const customerGuid = (
          await plugin.readSetting("telemetry", "customer-guid")
        ).value;
        const customerLicense = (
          await plugin.readSetting("telemetry", "customer-license")
        ).value;

        // information about how Grouparoo is being operated
        metrics.push(await TelemetryReporters.Cluster.Workers.countWorkers());
        metrics.push(await TelemetryReporters.Cluster.OS.exact());

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
          guid: customerGuid,
          license: customerLicense,
          metrics: metrics,
        };
      },
    };
  }

  async start() {
    await plugin.registerSetting(
      "telemetry",
      "customer-guid",
      `tcs_${UUID.v4()}`,
      "A unique, anonymous ID for this Grouparoo cluster."
    );

    await plugin.registerSetting(
      "telemetry",
      "customer-license",
      "",
      "Your Grouparoo License Key (for paid features)."
    );
  }
}

import path from "path";
import os from "os";
import { config, log } from "actionhero";
import "isomorphic-fetch";
import { plugin } from "../modules/plugin";
import { StatusMetric, StatusReporters } from "./../modules/statusReporters";

export namespace Telemetry {
  const TELEMETRY_CALL_TRIGGERS = [
    "timer",
    "team",
    "cli_run",
    "cli_config",
  ] as const;
  export type TelemetryCallTrigger = typeof TELEMETRY_CALL_TRIGGERS[number];

  const telemetryPath = "/api/v1/telemetry";

  export async function send(
    trigger: TelemetryCallTrigger,
    errors: string[] = [],
    toThrowOnError = false
  ) {
    if (!config.telemetry.enabled) return;

    const fullUrl = `${config.telemetry.host}${telemetryPath}`;

    try {
      const payload = await Telemetry.build(trigger, errors);

      const response = await fetch(fullUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      return response.status === 200;
    } catch (error) {
      try {
        // If there's something wrong with our ability to gather telemetry,
        // we should try to report that error to the Telemetry service...
        await fetch(fullUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(await generateErrorPayload(error, trigger)),
        });
      } catch (newError) {
        log(`[ telemetry ] ${newError}`, "debug");
      }

      if (toThrowOnError) {
        throw error;
      } else {
        log(`[ telemetry ] ${error}`, "debug");
      }
    }
  }

  export async function build(
    trigger: TelemetryCallTrigger,
    errors: string[] = []
  ) {
    const metrics: StatusMetric[] = [];

    // load settings
    const clusterName = (await plugin.readSetting("core", "cluster-name"))
      .value;
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;

    // information about how Grouparoo is being operated
    metrics.push(await StatusReporters.Cluster.Workers.countWorkers());
    metrics.push(await StatusReporters.Cluster.Workers.countErrors());
    metrics.push(await StatusReporters.Cluster.Process.platform());
    metrics.push(await StatusReporters.Cluster.Process.sequelizeDialect());
    metrics.push(...(await StatusReporters.Cluster.Process.env()));

    // versions of the plugins installed
    metrics.push(...(await StatusReporters.Plugins.Versions()));

    // usage counts
    metrics.push(...(await StatusReporters.Totals.Models()));

    // usage by source
    metrics.push(...(await StatusReporters.Totals.SourceTotals()));

    // usage by destination
    metrics.push(...(await StatusReporters.Totals.DestinationTotals()));

    // records exported
    metrics.push(...(await StatusReporters.Totals.UniqueRecordsExported()));

    errors.forEach((e, idx) => {
      if (e) {
        metrics.push({
          collection: "telemetry",
          topic: "error",
          aggregation: "exact",
          count: idx,
          key: `${process.platform}/${os.release()}`,
          value: e,
        });
      }
    });

    return {
      name: clusterName,
      id: customerId,
      trigger,
      metrics: metrics,
    };
  }

  async function generateErrorPayload(
    error: Error,
    trigger: Telemetry.TelemetryCallTrigger
  ) {
    const clusterName = (await plugin.readSetting("core", "cluster-name"))
      .value;
    const customerId = (await plugin.readSetting("telemetry", "customer-id"))
      .value;

    const sanitizedError = sanitizeErrorPayload(error);

    const errorPayload: {
      name: string;
      id: string;
      trigger: string;
      metrics: StatusMetric[];
    } = {
      name: clusterName,
      id: customerId,
      trigger,
      metrics: [
        {
          collection: "telemetry",
          topic: "error",
          aggregation: "exact",
          key: `${process.platform}/${os.release()}`,
          value: sanitizedError,
        },
      ],
    };

    return errorPayload;
  }

  function sanitizeErrorPayload(error: Error): string {
    if (!error.stack) return error.toString();

    return error.stack
      .split(os.EOL)
      .map((line: string) => {
        // It's likely the part of the path with 'grouparoo' in it would be safely down in the path structure to not include app-information
        // There may be many instances of the word "grouparoo" in the file system, so we'll only take the last part of the path
        const chunks = line.split("grouparoo" + path.sep);
        return chunks[chunks.length - 1];
      })
      .join(os.EOL);
  }
}

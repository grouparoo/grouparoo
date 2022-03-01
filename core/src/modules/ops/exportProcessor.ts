import Moment from "moment";
import { Export } from "../../models/Export";
import { Destination } from "../../models/Destination";
import { CLS } from "../cls";
import { Op } from "sequelize";
import { ExportProcessor } from "../../models/ExportProcessor";
import { config } from "actionhero";
import { plugin } from "../plugin";

export namespace ExportProcessorOps {
  const defaultExportProcessingDelay = 1000 * 60 * 5;

  export async function getExportsToProcess(exportProcessor: ExportProcessor) {
    return Export.findAll({
      where: { exportProcessorId: exportProcessor.id, state: "processing" },
    });
  }

  export async function enqueuePendingProcessorsForDestination(
    destination: Destination,
    delayMs = defaultExportProcessingDelay
  ) {
    if (!delayMs || delayMs < defaultExportProcessingDelay) {
      delayMs = defaultExportProcessingDelay;
    }

    let exportProcessors: ExportProcessor[];

    exportProcessors = await ExportProcessor.findAll({
      where: {
        state: "pending",
        destinationId: destination.id,
        processAt: { [Op.lte]: new Date() },
        startedAt: {
          [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
        },
      },
      order: [["processAt", "asc"]],
    });

    if (exportProcessors.length > 0) {
      await ExportProcessor.update(
        { startedAt: new Date() },
        {
          where: { id: { [Op.in]: exportProcessors.map((ep) => ep.id) } },
        }
      );

      const app = await destination.$get("app", { scope: null });

      for (const processor of exportProcessors) {
        await CLS.enqueueTask(
          "export:process",
          { exportProcessorId: processor.id },
          `exports:${app.type}`
        );
      }
    }

    return exportProcessors.length;
  }

  export async function setError(
    instance: ExportProcessor,
    error: Error & { errorLevel?: ExportProcessor["errorLevel"] },
    retryDelay: number = config.tasks.timeout
  ) {
    const maxAttempts = parseInt(
      (await plugin.readSetting("core", "export-processors-max-retries-count"))
        .value
    );

    instance.errorMessage = error.message || error.toString();
    if (error["errorLevel"]) instance.errorLevel = error["errorLevel"];

    instance.retryCount++;
    if (instance.retryCount >= maxAttempts) {
      instance.state = "failed";
      instance.processAt = null;
      await Export.update(
        {
          state: "failed",
          errorMessage: `An error occurred while processing the export: ${instance.errorMessage}`,
          errorLevel: "error",
        },
        { where: { state: "processing", exportProcessorId: instance.id } }
      );
    } else if (instance.errorLevel === "info") {
      instance.state = "failed";
      await Export.update(
        {
          state: "failed",
          errorMessage: instance.errorMessage,
          errorLevel: "info",
        },
        { where: { state: "processing", exportProcessorId: instance.id } }
      );
    } else {
      instance.processAt = Moment().add(retryDelay, "ms").toDate();
      instance.startedAt = null;
    }

    return instance.save();
  }

  export async function retry(
    instance: ExportProcessor,
    retryDelay: number = config.tasks.timeout,
    skipCount: boolean = false
  ) {
    const maxAttempts = parseInt(
      (await plugin.readSetting("core", "export-processors-max-retries-count"))
        .value
    );

    if (!skipCount) instance.retryCount++;
    if (instance.retryCount >= maxAttempts) {
      instance.state = "failed";
      instance.processAt = null;

      // fail the related exports too
      await Export.update(
        {
          state: "failed",
          errorMessage:
            "The maximum amount of retries was reached when trying to process this export.",
          errorLevel: "info",
        },
        { where: { state: "processing", exportProcessorId: instance.id } }
      );
    } else {
      instance.processAt = Moment().add(retryDelay, "ms").toDate();
      instance.startedAt = null;
    }

    return instance.save();
  }
}

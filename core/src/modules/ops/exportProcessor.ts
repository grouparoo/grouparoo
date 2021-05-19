import { Export } from "../../models/Export";
import { Destination } from "../../models/Destination";
import { CLS } from "../cls";
import { Op } from "sequelize";
import { ExportProcessor } from "../../models/ExportProcessor";

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
      const updateResponse = await ExportProcessor.update(
        { startedAt: new Date() },
        {
          where: { id: { [Op.in]: exportProcessors.map((ep) => ep.id) } },
        }
      );

      // For postgres only: we can update our result set with the rows that were updated, filtering out those which are no longer startedAt=null
      // in SQLite this isn't possible, but contention is far less likely
      if (updateResponse[1]) exportProcessors = updateResponse[1];

      const app = await destination.$get("app");

      await Promise.all(
        exportProcessors.map((processor) =>
          CLS.enqueueTask(
            "export:process",
            {
              exportProcessorId: processor.id,
            },
            `exports:${app.type}`
          )
        )
      );
    }

    return exportProcessors.length;
  }
}

import { RetryableTask } from "../../classes/tasks/retryableTask";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Op } from "sequelize";
import { CLS } from "../../modules/cls";

export class ExportSendBatches extends RetryableTask {
  constructor() {
    super();
    this.name = "export:sendBatch";
    this.description = "send the batch of exports to the destination";
    this.frequency = 0;
    this.queue = "exports";
    this.inputs = {
      destinationId: { required: true },
      exportIds: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const destinationId: string = params.destinationId;
    const exportIds: string[] = params.exportIds;
    const destination = await Destination.findOne({
      where: { id: destinationId },
    });
    if (!destination) return;

    const _exports = await Export.findAll({
      where: {
        destinationId,
        completedAt: null, // be sure not to export twice
        id: { [Op.in]: exportIds },
      },
    });

    if (_exports.length === 0) return;

    const {
      success,
      error,
      retryDelay,
      retryexportIds,
    } = await destination.sendExports(_exports);

    if (!success) {
      const app = await destination.$get("app");
      if (retryexportIds.length === _exports.length) {
        // all failed!
        if (retryDelay) {
          return CLS.enqueueTaskIn(
            retryDelay,
            "export:sendBatch",
            params,
            `exports:${app.type}`
          );
        } else {
          // auto retry
          // RESILIENCE: maybe we should split this in half or something, down to 1
          throw error;
        }
      } else {
        // some of them succeeded
        // RESILIENCE: maybe we should split this in half or something, down to 1
        const newParams = {
          destinationId: params.destinationId,
          exportIds: retryexportIds,
        };
        const strategy = this.pluginOptions?.Retry?.backoffStrategy;
        const backoff = strategy ? strategy[0] : undefined;
        const when = retryDelay || backoff || 1000;
        return CLS.enqueueTaskIn(
          when,
          "export:sendBatch",
          newParams,
          `exports:${app.type}`
        );
      }
    }
  }
}

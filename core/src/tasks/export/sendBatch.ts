import { Task } from "actionhero";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { App } from "../../models/App";
import { Op } from "sequelize";
import { DestinationOps } from "../../modules/ops/destination";
import { CLS } from "../../modules/cls";
import { AsyncReturnType } from "type-fest";

export class ExportSendBatches extends Task {
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

  async run(params) {
    const destinationId: string = params.destinationId;
    const exportIds: string[] = params.exportIds;
    let _exports: Export[] = [];
    let response: AsyncReturnType<typeof DestinationOps["sendExports"]>;
    let app: App;

    await CLS.wrap(async () => {
      const destination = await Destination.scope(null).findOne({
        where: { id: destinationId },
      });
      if (!destination) return;
      app = await destination.$get("app");

      _exports = await Export.findAll({
        where: {
          destinationId,
          completedAt: null, // be sure not to export twice
          id: { [Op.in]: exportIds },
        },
      });

      if (_exports.length === 0) return;

      response = await destination.sendExports(_exports);
    });

    if (!response) return; // we exited early

    if (!response.success) {
      if (response.retryexportIds.length === _exports.length) {
        // all failed!
        if (response.retryDelay) {
          return CLS.enqueueTaskIn(
            response.retryDelay,
            "export:sendBatch",
            params,
            `exports:${app.type}`
          );
        } else {
          // RESILIENCE: maybe we should split this in half or something, down to 1
          throw response.error; // auto retry
        }
      } else {
        // some of them succeeded
        // RESILIENCE: maybe we should split this in half or something, down to 1
        const newParams = {
          destinationId: params.destinationId,
          exportIds: response.retryexportIds,
        };
        const strategy = this.pluginOptions?.Retry?.backoffStrategy;
        const backoff = strategy ? strategy[0] : undefined;
        const when = response.retryDelay || backoff || 1000;
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

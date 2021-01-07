import { RetryableTask } from "../../classes/tasks/retryableTask";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { CLS } from "../../modules/cls";

export class ExportSend extends RetryableTask {
  constructor() {
    super();
    this.name = "export:send";
    this.description = "send the export to the destination";
    this.frequency = 0;
    this.queue = "exports";
    this.inputs = {
      destinationGuid: { required: true },
      exportGuid: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const destination = await Destination.findByGuid(params.destinationGuid);
    const _export = await Export.findByGuid(params.exportGuid);
    if (_export.completedAt) {
      // be sure not to export twice
      return;
    }

    const { success, retryDelay, error } = await destination.sendExport(
      _export
    );

    if (!success) {
      if (retryDelay) {
        const app = await destination.$get("app");
        return CLS.enqueueTaskIn(
          retryDelay,
          "export:send",
          params,
          `exports:${app.type}`
        );
      } else {
        // auto retry
        throw error;
      }
    }
  }
}

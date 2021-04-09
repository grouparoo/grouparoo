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
      destinationId: { required: true },
      exportId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const destination = await Destination.scope(null).findOne({
      where: { id: params.destinationId },
    });
    if (!destination) return;
    const _export = await Export.findOne({ where: { id: params.exportId } });
    if (!_export) return; // the export was deleted
    if (_export.completedAt) return; // be sure not to export twice

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

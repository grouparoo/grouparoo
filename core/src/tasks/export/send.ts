import { Task } from "actionhero";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { App } from "../../models/App";
import { DestinationOps } from "../../modules/ops/destination";
import { CLS } from "../../modules/cls";
import { AsyncReturnType } from "type-fest";

export class ExportSend extends Task {
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

  async run(params) {
    let response: AsyncReturnType<typeof DestinationOps["sendExport"]>;
    let app: App;

    await CLS.wrap(async () => {
      const destination = await Destination.scope(null).findOne({
        where: { id: params.destinationId },
      });
      if (!destination) return;
      app = await destination.$get("app");
      const _export = await Export.findOne({
        where: { id: params.exportId },
      });
      if (!_export) return; // the export was deleted
      if (_export.completedAt) return; // be sure not to export twice

      response = await destination.sendExport(_export);
    });

    if (!response) return; // we exited early

    if (!response.success) {
      if (response.retryDelay) {
        return CLS.enqueueTaskIn(
          response.retryDelay,
          "export:send",
          params,
          `exports:${app.type}`
        );
      } else {
        throw response.error; // auto retry
      }
    }
  }
}

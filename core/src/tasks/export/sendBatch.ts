import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { App } from "../../models/App";
import { Op } from "sequelize";
import { CLSTask } from "../../classes/tasks/clsTask";

export class ExportSendBatches extends CLSTask {
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
    let _exports: Export[] = [];
    let app: App;

    if (exportIds.length === 0) return;
    const destination = await Destination.scope(null).findOne({
      where: { id: destinationId },
    });
    if (!destination) return;
    app = await destination.$get("app");

    _exports = await Export.findAll({
      where: {
        destinationId,
        state: "pending", // be sure not to export twice
        id: { [Op.in]: exportIds },
      },
    });

    if (_exports.length === 0) return;

    await destination.sendExports(_exports);
  }
}

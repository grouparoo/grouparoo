import { RetryableTask } from "../../classes/retryableTask";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Op } from "sequelize";

export class ExportSendBatches extends RetryableTask {
  constructor() {
    super();
    this.name = "export:sendBatch";
    this.description = "send the batch of exports to the destination";
    this.frequency = 0;
    this.queue = "exports";
    this.inputs = {
      destinationGuid: { required: true },
      exportGuids: { required: true },
    };
  }

  async run(params) {
    const destinationGuid: string = params.destinationGuid;
    const exportGuids: string[] = params.exportGuids;
    const destination = await Destination.findByGuid(params.destinationGuid);

    const _exports = await Export.findAll({
      where: {
        destinationGuid,
        guid: { [Op.in]: exportGuids },
        completedAt: null,
        errorMessage: null,
      },
    });

    if (_exports.length > 0) await destination.sendExports(_exports);
  }
}

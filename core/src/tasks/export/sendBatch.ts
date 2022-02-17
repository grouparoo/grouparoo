import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Op } from "sequelize";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { CLSTask } from "../../classes/tasks/clsTask";
import { ParamsFrom } from "actionhero";
import { APIData } from "../../modules/apiData";

export class ExportSendBatches extends CLSTask {
  name = "export:sendBatch";
  description = "send the batch of exports to the destination";
  frequency = 0;
  queue = "exports";
  inputs = {
    destinationId: { required: true },
    exportIds: { required: true, formatter: APIData.ensureArray },
  } as const;

  async runWithinTransaction({
    destinationId,
    exportIds,
  }: ParamsFrom<ExportSendBatches>) {
    let _exports: Export[] = [];

    if (exportIds.length === 0) return;
    const destination = await Destination.scope(null).findOne({
      where: { id: destinationId },
      include: [Option, Mapping],
    });
    if (!destination) return;

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

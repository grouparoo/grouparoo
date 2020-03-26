import { Task, log, task } from "actionhero";
import { Op } from "sequelize";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";

export class DestinationDestroyExports extends Task {
  constructor() {
    super();
    this.name = "destination:destroyExports";
    this.description =
      "delete all the exports and exportImports records for this destination";
    this.frequency = 0;
    this.queue = "destinations";
    this.inputs = {
      destinationGuid: { required: true },
    };
  }

  async run(params) {
    const limit = 100;
    const { destinationGuid } = params;

    let _exports = await Export.findAll({
      where: { destinationGuid },
      limit,
    });

    if (_exports.length > 0) {
      // We need to loop thought the exports 1-by-1, rather than a bulk action
      // so that each instance's @afterDestroy is fired, cleaning up related exportImports
      await Promise.all(_exports.map((_export) => _export.destroy()));
      await task.enqueue(this.name, params);
    } else {
      log(`all exports destroyed for destination ${destinationGuid}`);
    }
  }
}

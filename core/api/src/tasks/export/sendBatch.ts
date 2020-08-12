import { RetryableTask } from "../../classes/retryableTask";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Op } from "sequelize";
import { task, config } from "actionhero";
import { waitForLock } from "../../modules/locks";

export class ProfileExport extends RetryableTask {
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

    /**
     * We want to group both the search for exports and the batch send into one lock.
     * This way, we won't re-find the same export if this job is re-enqueued by the run.
     */
    // const { releaseLock } = await waitForLock(
    //   `destination:${destinationGuid}:sendBatch`
    // );

    // try {
    const _exports = await Export.findAll({
      where: {
        destinationGuid,
        guid: { [Op.in]: exportGuids },
        completedAt: null,
        errorMessage: null,
      },
    });

    if (_exports.length > 0) await destination.sendExports(_exports);

    //   await releaseLock();
    // } catch (error) {
    //   await releaseLock();
    //   throw error;
    // }
  }
}

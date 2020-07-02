import { RetryableTask } from "../../classes/retryableTask";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";

export class ProfileExport extends RetryableTask {
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

  async run(params) {
    const destination = await Destination.findByGuid(params.destinationGuid);
    const _export = await Export.findByGuid(params.exportGuid);

    await destination.sendExport(_export);
  }
}

import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { CLSTask } from "../../classes/tasks/clsTask";

export class ExportSend extends CLSTask {
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
      include: [Option, Mapping],
    });
    if (!destination) return;
    const _export = await Export.findOne({
      where: { id: params.exportId },
    });
    if (!_export) return;
    if (_export.state !== "pending") return;

    await destination.sendExport(_export);
  }
}

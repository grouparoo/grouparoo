import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { Option } from "../../models/Option";
import { Mapping } from "../../models/Mapping";
import { CLSTask } from "../../classes/tasks/clsTask";
import { ParamsFrom } from "actionhero";

export class ExportSend extends CLSTask {
  name = "export:send";
  description = "send the export to the destination";
  frequency = 0;
  queue = "exports";
  inputs = {
    destinationId: { required: true },
    exportId: { required: true },
  };

  async runWithinTransaction({
    destinationId,
    exportId,
  }: ParamsFrom<ExportSend>) {
    const destination = await Destination.scope(null).findOne({
      where: { id: destinationId },
      include: [Option, Mapping],
    });
    if (!destination) return;
    const _export = await Export.findOne({
      where: { id: exportId },
    });
    if (!_export) return;
    if (_export.state !== "pending") return;

    await destination.sendExport(_export);
  }
}

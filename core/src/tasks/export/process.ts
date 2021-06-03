import { CLSTask } from "../../classes/tasks/clsTask";
import { ExportProcessor } from "../../models/ExportProcessor";
import { Mapping } from "../../models/Mapping";
import { Option } from "../../models/Option";

export class ProcessExports extends CLSTask {
  constructor() {
    super();
    this.name = "export:process";
    this.description = "process exports with an export processor";
    this.frequency = 0;
    this.queue = "exports";
    this.inputs = {
      exportProcessorId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const exportProcessor = await ExportProcessor.scope(null).findOne({
      where: { id: params.exportProcessorId, state: "pending" },
    });

    if (!exportProcessor) return; // may have been processed

    const destination = await exportProcessor.$get("destination", {
      include: [Option, Mapping],
    });
    await destination.runExportProcessor(exportProcessor);
  }
}

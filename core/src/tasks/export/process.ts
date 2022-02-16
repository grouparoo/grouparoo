import { ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { ExportProcessor } from "../../models/ExportProcessor";
import { Mapping } from "../../models/Mapping";
import { Option } from "../../models/Option";

export class ProcessExports extends CLSTask {
  name = "export:process";
  description = "process exports with an export processor";
  frequency = 0;
  queue = "exports";
  inputs = {
    exportProcessorId: { required: true },
  } as const;

  async runWithinTransaction({
    exportProcessorId,
  }: ParamsFrom<ProcessExports>) {
    const exportProcessor = await ExportProcessor.scope(null).findOne({
      where: { id: exportProcessorId, state: "pending" },
    });

    if (!exportProcessor) return; // may have been processed

    const destination = await exportProcessor.$get("destination", {
      include: [Option, Mapping],
      scope: null,
    });
    await destination.runExportProcessor(exportProcessor);
  }
}

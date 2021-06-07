import { chatRoom } from "actionhero";
import { CLSTask } from "../../../classes/tasks/clsTask";
import { Status } from "../../../modules/status";

export class StatusSample extends CLSTask {
  constructor() {
    super();
    this.name = "status:sample";
    this.description = "Calculate and set one of the status samples";
    this.frequency = 0;
    this.queue = "system";
    this.plugins = ["QueueLock"];
    this.inputs = {
      index: { required: true },
    };
  }

  async runWithinTransaction({ index }: { index: number }) {
    const method = Status.statusSampleReporters[index];
    if (!method) return;

    const response = await method();
    const { timestamp, metrics } = await Status.set(response);
    await chatRoom.broadcast({}, "system:status", {
      timestamp,
      metrics,
    });
  }
}

import { chatRoom, ParamsFrom } from "actionhero";
import { CLSTask } from "../../../classes/tasks/clsTask";
import { APIData } from "../../../modules/apiData";
import { Status } from "../../../modules/status";

export class StatusSample extends CLSTask {
  name = "status:sample";
  description = "Calculate and set one of the status samples";
  frequency = 0;
  queue = "system";
  inputs = {
    index: { required: true, formatter: APIData.ensureNumber },
  };

  async runWithinTransaction({ index }: ParamsFrom<StatusSample>) {
    const method = Status.statusSampleReporters[index];
    if (!method) return;

    const response = await method();
    const metrics = await Status.set(response);

    await chatRoom.broadcast({}, "system:status", {
      metrics,
    });
  }
}

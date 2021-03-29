import { Task, log } from "actionhero";
import { TaskInputs } from "actionhero/dist/classes/task";
import { CLS } from "../../modules/cls";

export abstract class CLSTask extends Task {
  constructor() {
    super();
  }

  async run(inputs: TaskInputs, worker: any) {
    if (typeof this.runWithinTransaction === "function") {
      try {
        return CLS.wrap(async () => this.runWithinTransaction(inputs, worker), {
          write: true,
        });
      } catch (err) {
        const message = (err?.message || "").toString();
        if (message.match(/SQLITE_BUSY/)) {
          log(`re-enqueue (${this.name}): ${message}`, "error");
          return CLS.enqueueTaskIn(30 * 1000, this.name, inputs, this.queue);
        }
      }
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(inputs: TaskInputs, worker: any): Promise<any>;
}

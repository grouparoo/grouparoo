import { Task } from "actionhero";
import { TaskInputs } from "actionhero/dist/classes/task";
import { CLS } from "../../modules/cls";

export abstract class CLSTask extends Task {
  constructor() {
    super();
  }

  async run(inputs: TaskInputs, worker: any) {
    if (typeof this.runWithinTransaction === "function") {
      return CLS.wrap(async () => this.runWithinTransaction(inputs, worker), {
        write: true,
      });
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(inputs: TaskInputs, worker: any): Promise<any>;
}

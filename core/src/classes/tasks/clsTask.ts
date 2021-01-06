import { Task, api } from "actionhero";
import { TaskInputs } from "actionhero/dist/classes/task";

export abstract class CLSTask extends Task {
  constructor() {
    super();
  }

  async run(data: TaskInputs, worker: any) {
    if (typeof this.runWithinTransaction === "function") {
      return api.sequelize.transaction(async () =>
        this.runWithinTransaction(data, worker)
      );
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(data: TaskInputs, worker: any): Promise<any>;
}

import { Task, api } from "actionhero";
import { TaskInputs } from "actionhero/dist/classes/task";

export abstract class CLSTask extends Task {
  constructor() {
    super();
  }

  async run(data: TaskInputs, worker: any) {
    let afterCommitJobs: Array<Function>;
    let runResponse;

    if (typeof this.runWithinTransaction === "function") {
      await api.sequelize.transaction(async () => {
        runResponse = await this.runWithinTransaction(data, worker);
        afterCommitJobs = api.cls.namespace.get("afterCommitJobs");
      });

      for (const i in afterCommitJobs) await afterCommitJobs[i]();

      return runResponse;
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(data: TaskInputs, worker: any): Promise<any>;
}

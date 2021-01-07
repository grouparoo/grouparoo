import { Action, api } from "actionhero";

export interface ActionData {
  [key: string]: any;
}

export abstract class CLSAction extends Action {
  constructor() {
    super();
  }

  async run(data: ActionData) {
    let runResponse;
    let afterCommitJobs: Array<Function>;

    if (typeof this.runWithinTransaction === "function") {
      await api.sequelize.transaction(async () => {
        runResponse = await this.runWithinTransaction(data);
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

  abstract runWithinTransaction(data: ActionData): Promise<any>;
}

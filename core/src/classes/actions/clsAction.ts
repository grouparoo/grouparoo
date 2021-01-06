import { Action, api } from "actionhero";

interface ActionData {
  [key: string]: any;
}

export abstract class CLSAction extends Action {
  constructor() {
    super();
  }

  async run(data: ActionData) {
    if (typeof this.runWithinTransaction === "function") {
      return api.sequelize.transaction(async () =>
        this.runWithinTransaction(data)
      );
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(data: ActionData): Promise<any>;
}

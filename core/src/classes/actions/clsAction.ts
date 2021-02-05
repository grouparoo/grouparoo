import { Action } from "actionhero";
import { CLS } from "../../modules/cls";

export interface ActionData {
  [key: string]: any;
}

export abstract class CLSAction extends Action {
  constructor() {
    super();
  }

  async run(params: ActionData) {
    if (typeof this.runWithinTransaction === "function") {
      return CLS.wrap(async () => await this.runWithinTransaction(params));
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(params: ActionData): Promise<any>;
}

import { Action } from "actionhero";
import { CLS } from "../../modules/cls";

export interface ActionData {
  [key: string]: any;
}

export abstract class CLSAction extends Action {
  constructor() {
    super();
  }

  async run(prams: ActionData) {
    if (typeof this.runWithinTransaction === "function") {
      return CLS.wrap(async () => await this.runWithinTransaction(prams));
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(prams: ActionData): Promise<any>;
}

import { Action } from "actionhero";
import { CLS } from "../../modules/cls";

export interface ActionData {
  [key: string]: any;
}

export abstract class CLSAction extends Action {
  permission: {
    topic: string;
    mode: "read" | "write"; // "read" make it a deferred transaction
  };

  constructor() {
    super();
  }

  isWriteTransaction() {
    if (this.permission?.mode === "read") {
      return false;
    }
    return true;
  }

  async run(params: ActionData) {
    if (typeof this.runWithinTransaction === "function") {
      const options = { write: this.isWriteTransaction() };
      return CLS.wrap(
        async () => await this.runWithinTransaction(params),
        options
      );
    } else {
      throw new Error(
        "No run or runWithinTransaction method for this task: " + this.name
      );
    }
  }

  abstract runWithinTransaction(params: ActionData): Promise<any>;
}

import { Action } from "actionhero";
import { APM } from "../../modules/apm";
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
    return APM.wrap(this.name, "action", params, async () => {
      const options = { write: this.isWriteTransaction(), priority: true };
      return CLS.wrap(
        async () => await this.runWithinTransaction(params),
        options
      );
    });
  }

  abstract runWithinTransaction(params: ActionData): Promise<any>;
}

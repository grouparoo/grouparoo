import { Initializer } from "actionhero";
import { CLS } from "../../modules/cls";

export abstract class CLSInitializer extends Initializer {
  constructor() {
    super();
  }

  async initialize() {
    if (typeof this.initializeWithinTransaction === "function") {
      return CLS.wrap(async () => await this.initializeWithinTransaction());
    }
  }

  async start() {
    if (typeof this.startWithinTransaction === "function") {
      return CLS.wrap(async () => await this.startWithinTransaction());
    }
  }

  async stop() {
    if (typeof this.stopWithinTransaction === "function") {
      return CLS.wrap(async () => await this.stopWithinTransaction());
    }
  }

  abstract initializeWithinTransaction(): Promise<any>;
  abstract startWithinTransaction(): Promise<any>;
  abstract stopWithinTransaction(): Promise<any>;
}

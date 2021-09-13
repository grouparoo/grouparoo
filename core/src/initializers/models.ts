import { CLSInitializer } from "../classes/initializers/clsInitializer";
import { ModelOps } from "../modules/ops/model";

export class GrouparooModelsInitializer extends CLSInitializer {
  constructor() {
    super();
    this.name = "models";
    this.startPriority = 500;
  }

  async initializeWithinTransaction() {}

  async startWithinTransaction() {
    await ModelOps.prepare();
  }

  async stopWithinTransaction() {}
}

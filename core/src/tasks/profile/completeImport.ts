import { Task } from "actionhero";

export class ProfileCompleteImport extends Task {
  constructor() {
    super();
    this.name = "profile:completeImport";
    this.description = "deprecated";
    this.frequency = 0;
    this.queue = "profiles";
    this.inputs = {
      profileIds: { required: true },
      toExport: { required: true },
    };
  }

  // TODO: Remove this task. Functionality has been included in `profile:checkReady`
  async run() {}
}

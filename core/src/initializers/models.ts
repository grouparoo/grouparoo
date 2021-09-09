import { CLSInitializer } from "../classes/initializers/clsInitializer";
import { GrouparooModel } from "../models/GrouparooModel";

export class GrouparooModelsInitializer extends CLSInitializer {
  constructor() {
    super();
    this.name = "models";
    this.startPriority = 500;
  }

  async initializeWithinTransaction() {}

  async startWithinTransaction() {
    const modelsCount = await GrouparooModel.count();
    if (modelsCount > 0) return;

    await GrouparooModel.create({
      id: "mod_profiles",
      name: "Profiles",
      type: "profile",
    });
  }

  async stopWithinTransaction() {}
}

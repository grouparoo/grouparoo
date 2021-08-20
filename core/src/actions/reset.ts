import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Reset } from "../modules/reset";

export class ResetCluster extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "reset:cluster";
    this.description =
      "Reset all data in the Grouparoo Cluster except for Teams and Team Members";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
  }

  async runWithinTransaction({ session: { teamMember } }) {
    const counts = await Reset.cluster(teamMember.id);
    return { success: true, counts };
  }
}

export class ResetData extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "reset:data";
    this.description = "Reset the imported and exported data in this cluster";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
  }

  async runWithinTransaction({ session: { teamMember } }) {
    await Reset.data(teamMember.id);
    return { success: true };
  }
}

export class ResetCache extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "reset:cache";
    this.description = "Reset the cache";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
  }

  async runWithinTransaction({ session: { teamMember } }) {
    await Reset.cache(teamMember.id);
    return { success: true };
  }
}

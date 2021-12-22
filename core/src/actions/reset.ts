import { TeamMember } from "../models/TeamMember";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ActionPermission } from "../models/Permission";
import { Reset } from "../modules/reset";

export class ResetCluster extends AuthenticatedAction {
  name = "reset:cluster";
  description =
    "Reset all data in the Grouparoo Cluster except for Teams and Team Members";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "write" };

  async runWithinTransaction({
    session: { teamMember },
  }: {
    session: { teamMember: TeamMember };
  }) {
    const counts = await Reset.cluster(teamMember.id);
    return { success: true, counts };
  }
}

export class ResetData extends AuthenticatedAction {
  name = "reset:data";
  description = "Reset the imported and exported data in this cluster";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "write" };

  async runWithinTransaction({
    session: { teamMember },
  }: {
    session: { teamMember: TeamMember };
  }) {
    await Reset.data(teamMember.id);
    return { success: true };
  }
}

export class ResetCache extends AuthenticatedAction {
  name = "reset:cache";
  description = "Reset the cache";
  outputExample = {};
  permission: ActionPermission = { topic: "app", mode: "write" };

  async runWithinTransaction({
    session: { teamMember },
  }: {
    session: { teamMember: TeamMember };
  }) {
    await Reset.cache(teamMember.id);
    return { success: true };
  }
}

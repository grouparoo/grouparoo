import { ParamsFrom } from "actionhero";
import { WhereAttributeHash } from "sequelize";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ActionPermission } from "../models/Permission";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { APIData } from "../modules/apiData";
import { GrouparooSubscription } from "../modules/grouparooSubscription";

export class TeamMembersList extends AuthenticatedAction {
  name = "teamMembers:list";
  description = "view all the members of a team";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "read" };
  inputs = {
    id: { required: false },
    teamId: { required: false },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<TeamMembersList>;
  }) {
    const where: WhereAttributeHash = {};
    if (params.id) where["teamId"] = params.id;
    if (params.teamId) where["teamId"] = params.teamId;

    const teamMembers = await TeamMember.findAll({
      where,
      order: [["email", "asc"]],
    });

    return {
      teamMembers: await Promise.all(teamMembers.map((tem) => tem.apiData())),
    };
  }
}

export class TeamMemberCreate extends AuthenticatedAction {
  name = "teamMember:create";
  description = "create a team member";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "write" };
  inputs = {
    teamId: { required: true },
    firstName: { required: true },
    lastName: { required: true },
    password: { required: true },
    email: { required: true },
    subscribed: {
      required: false,
      default: true,
      formatter: APIData.ensureBoolean,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<TeamMemberCreate>;
  }) {
    const team = await Team.findById(params.teamId);

    const teamMember = new TeamMember({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      teamId: team.id,
    });

    await teamMember.save();
    await teamMember.updatePassword(params.password);

    await GrouparooSubscription({ teamMember, subscribed: params.subscribed });

    return { teamMember: await teamMember.apiData() };
  }
}

export class TeamMemberView extends AuthenticatedAction {
  name = "teamMember:view";
  description = "view a team member";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<TeamMemberView>;
  }) {
    const teamMember = await TeamMember.findOne({
      where: { id: params.id },
      include: [Team],
    });
    if (!teamMember) throw new Error("team member not found");

    return {
      teamMember: await teamMember.apiData(),
      team: await teamMember.team.apiData(),
    };
  }
}

export class TeamMemberEdit extends AuthenticatedAction {
  name = "teamMember:edit";
  description = "edit a team member";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "write" };
  inputs = {
    id: { required: true },
    firstName: { required: false },
    lastName: { required: false },
    password: { required: false },
    email: { required: false },
    teamId: { required: false },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<TeamMemberEdit>;
  }) {
    const teamMember = await TeamMember.findById(params.id);

    await teamMember.update(params);

    if (params.password) await teamMember.updatePassword(params.password);

    return { teamMember: await teamMember.apiData() };
  }
}

export class TeamMemberDestroy extends AuthenticatedAction {
  name = "teamMember:destroy";
  description = "destroy a team member";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "write" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
    session: { teamMember: myself },
  }: {
    params: ParamsFrom<TeamMemberDestroy>;
    session: { teamMember: TeamMember };
  }) {
    const teamMember = await TeamMember.findById(params.id);
    if (myself.id === teamMember.id) {
      throw new Error("you cannot delete yourself");
    }

    await teamMember.destroy();
    return { success: true };
  }
}

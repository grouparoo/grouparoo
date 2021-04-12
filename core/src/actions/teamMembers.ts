import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { GrouparooSubscription } from "../modules/grouparooSubscription";

export class TeamMembersList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "teamMembers:list";
    this.description = "view all the members of a team";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "read" };
    this.inputs = {
      id: { required: false },
      teamId: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};
    if (params.id) where["teamId"] = params.id;
    if (params.teamId) where["teamId"] = params.teamId;

    const teamMembers = await TeamMember.findAll({
      where,
      order: [["email", "asc"]],
    });

    return {
      teamMembers: await Promise.all(
        teamMembers.map(async (tem) => tem.apiData())
      ),
    };
  }
}

export class TeamMemberCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "teamMember:create";
    this.description = "create a team member";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "write" };
    this.inputs = {
      teamId: { required: true },
      firstName: { required: true },
      lastName: { required: true },
      password: { required: true },
      email: { required: true },
      subscribe: { required: false, default: true },
    };
  }

  async runWithinTransaction({ params }) {
    const team = await Team.findById(params.teamId);

    const teamMember = new TeamMember({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      teamId: team.id,
    });

    await teamMember.save();
    await teamMember.updatePassword(params.password);

    await GrouparooSubscription(teamMember, params.subscribe);

    return { teamMember: await teamMember.apiData() };
  }
}

export class TeamMemberView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "teamMember:view";
    this.description = "view a team member";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
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
  constructor() {
    super();
    this.name = "teamMember:edit";
    this.description = "edit a team member";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "write" };
    this.inputs = {
      id: { required: true },
      firstName: { required: false },
      lastName: { required: false },
      password: { required: false },
      email: { required: false },
      teamId: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const teamMember = await TeamMember.findById(params.id);

    await teamMember.update(params);

    if (params.password) await teamMember.updatePassword(params.password);

    return { teamMember: await teamMember.apiData() };
  }
}

export class TeamMemberDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "teamMember:destroy";
    this.description = "destroy a team member";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({
    params,
    session: { teamMember: myself },
  }: {
    params: { id: string };
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

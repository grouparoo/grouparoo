import { AuthenticatedAction } from "../classes/authenticatedAction";
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
      guid: { required: false },
      teamGuid: { required: false },
    };
  }

  async run({ params }) {
    const where = {};
    if (params.guid) where["teamGuid"] = params.guid;
    if (params.teamGuid) where["teamGuid"] = params.teamGuid;

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
      teamGuid: { required: true },
      firstName: { required: true },
      lastName: { required: true },
      password: { required: true },
      email: { required: true },
      subscribe: { required: false, default: true },
    };
  }

  async run({ params }) {
    const team = await Team.findByGuid(params.teamGuid);

    const teamMember = new TeamMember({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      teamGuid: team.guid,
    });

    await teamMember.save();
    await teamMember.updatePassword(params.password);

    if (params.subscribe) await GrouparooSubscription(teamMember);

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
      guid: { required: true },
    };
  }

  async run({ params }) {
    const teamMember = await TeamMember.findOne({
      where: { guid: params.guid },
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
      guid: { required: true },
      firstName: { required: false },
      lastName: { required: false },
      password: { required: false },
      email: { required: false },
      teamGuid: { required: false },
    };
  }

  async run({ params }) {
    const teamMember = await TeamMember.findByGuid(params.guid);

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
      guid: { required: true },
    };
  }

  async run({
    params,
    session: { teamMember: myself },
  }: {
    params: { guid: string };
    session: { teamMember: TeamMember };
  }) {
    const teamMember = await TeamMember.findByGuid(params.guid);
    if (myself.guid === teamMember.guid) {
      throw new Error("you cannot delete yourself");
    }

    await teamMember.destroy();
    return { success: true };
  }
}

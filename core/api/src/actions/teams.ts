import { Action } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";

export class TeamInitialize extends Action {
  constructor() {
    super();
    this.name = "team:initialize";
    this.description = "create the first team with the first team member";
    this.outputExample = {};
    this.inputs = {
      firstName: { required: true },
      lastName: { required: true },
      password: { required: true },
      email: { required: true },
    };
  }

  async run({ params, response }) {
    let team: Team;
    let teamMember: TeamMember;

    const teamsCount = await Team.count();

    if (teamsCount > 0) {
      throw new Error("an administration team already exists, please sign in");
    }

    team = await Team.create({
      name: "Administrators",
      deletable: false,
    });

    const permissions = await team.$get("permissions");
    await Promise.all(
      permissions.map((prm) =>
        prm.update({
          locked: true,
          read: true,
          write: true,
        })
      )
    );

    teamMember = await TeamMember.create({
      teamGuid: team.guid,
      email: params.email,
      firstName: params.firstName,
      lastName: params.lastName,
    });

    await teamMember.updatePassword(params.password);

    response.team = await team.apiData();
    response.teamMember = await teamMember.apiData();
  }
}

export class TeamsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "teams:list";
    this.description = "list all the teams";
    this.outputExample = {};
    this.permissionTopic = "team";
    this.permissionMode = "read";
    this.inputs = {};
  }

  async run({ response }) {
    const teams = await Team.findAll();
    response.teams = await Promise.all(
      teams.map(async (team) => team.apiData())
    );
  }
}

export class TeamCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:create";
    this.description = "create a team";
    this.outputExample = {};
    this.permissionTopic = "team";
    this.permissionMode = "write";
    this.inputs = {
      name: { required: true },
      read: { required: false, default: false },
      write: { required: false, default: false },
      administer: { required: false, default: false },
    };
  }

  async run({ params, response }) {
    const team = new Team(params);
    await team.save();
    response.team = await team.apiData();
  }
}

export class TeamEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:edit";
    this.description = "edit a team";
    this.outputExample = {};
    this.permissionTopic = "team";
    this.permissionMode = "write";
    this.inputs = {
      guid: { required: true },
      name: { required: false },
      read: { required: false },
      write: { required: false },
      administer: { required: false },
    };
  }

  async run({ params, response }) {
    const team = await Team.findByGuid(params.guid);
    await team.update(params);
    response.team = await team.apiData();
  }
}

export class TeamView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:view";
    this.description = "view a team and members";
    this.outputExample = {};
    this.permissionTopic = "team";
    this.permissionMode = "read";
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const team = await Team.findOne({
      where: { guid: params.guid },
      include: [{ model: TeamMember }],
    });

    if (!team) {
      throw new Error("team not found");
    }

    response.team = await team.apiData();
    response.teamMembers = await Promise.all(
      team.teamMembers.map(async (mem) => {
        return await mem.apiData();
      })
    );
    response.teamMembers.sort((a, b) => {
      if (a.email < b.email) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}

export class TeamDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:destroy";
    this.description = "destroy a team";
    this.outputExample = {};
    this.permissionTopic = "team";
    this.permissionMode = "write";
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const team = await Team.findByGuid(params.guid);
    await team.destroy();
    response.success = true;
  }
}

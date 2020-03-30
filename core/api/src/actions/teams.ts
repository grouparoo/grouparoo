import { Action, api } from "actionhero";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";

export class TeamInitalize extends Action {
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

    let transaction = await api.sequelize.transaction();

    try {
      team = await Team.create(
        {
          name: "Administrators",
          deletable: false,
          read: true,
          write: true,
          administer: true,
        },
        { transaction }
      );

      teamMember = await TeamMember.create(
        {
          teamGuid: team.guid,
          email: params.email,
          firstName: params.firstName,
          lastName: params.lastName,
        },
        { transaction }
      );

      await teamMember.updatePassword(params.password, transaction);

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }

    response.team = await team.apiData();
    response.teamMember = await teamMember.apiData();
  }
}

export class TeamsList extends Action {
  constructor() {
    super();
    this.name = "teams:list";
    this.description = "list all the teams";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {};
  }

  async run({ response }) {
    const teams = await Team.findAll();
    response.teams = await Promise.all(
      teams.map(async (team) => team.apiData())
    );
  }
}

export class TeamCreate extends Action {
  constructor() {
    super();
    this.name = "team:create";
    this.description = "create a team";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
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

export class TeamEdit extends Action {
  constructor() {
    super();
    this.name = "team:edit";
    this.description = "edit a team";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
      name: { required: false },
      read: { required: false },
      write: { required: false },
      administer: { required: false },
    };
  }

  async run({ params, response }) {
    const team = await Team.findOne({ where: { guid: params.guid } });
    if (!team) {
      throw new Error("team not found");
    }
    await team.update(params);
    response.team = await team.apiData();
  }
}

export class TeamView extends Action {
  constructor() {
    super();
    this.name = "team:view";
    this.description = "view a team and members";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member"];
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

export class TeamDestroy extends Action {
  constructor() {
    super();
    this.name = "team:destroy";
    this.description = "destroy a team";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const team = await Team.findOne({ where: { guid: params.guid } });

    if (!team) {
      throw new Error("team not found");
    }

    await team.destroy();
    response.success = true;
  }
}

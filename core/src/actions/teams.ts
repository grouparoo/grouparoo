import { api, env } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { CLSAction } from "../classes/actions/clsAction";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { Setting } from "../models/Setting";
import { GrouparooSubscription } from "../modules/grouparooSubscription";

export class TeamInitialize extends CLSAction {
  constructor() {
    super();
    this.name = "team:initialize";
    this.description = "create the first team with the first team member";
    this.permission = { topic: "team", mode: "write" };
    this.outputExample = {};
    this.inputs = {
      firstName: { required: true },
      lastName: { required: true },
      password: { required: true },
      email: { required: true },
      companyName: { required: false },
      subscribe: { required: false, default: true },
    };
  }

  async runWithinTransaction({ params }) {
    let team: Team;
    let teamMember: TeamMember;

    if ((await Team.count()) > 0) {
      throw new Error("an administration team already exists, please sign in");
    }

    team = await Team.create({
      name: "Administrators",
      locked: "team:initialize",
      permissionAllRead: true,
      permissionAllWrite: true,
    });

    teamMember = await TeamMember.create({
      teamId: team.id,
      email: params.email,
      firstName: params.firstName,
      lastName: params.lastName,
    });

    await teamMember.updatePassword(params.password);

    if (params.subscribe) {
      await GrouparooSubscription(teamMember);
    }

    if (params.companyName) {
      const clusterNameSetting = await Setting.findOne({
        where: { pluginName: "core", key: "cluster-name" },
      });
      const nodeEnv = env || "development";
      const clusterName = `${params.companyName} - ${
        nodeEnv.charAt(0).toUpperCase() + nodeEnv.slice(1)
      }`; // the cluster name would be `Grouparoo - Development`
      await clusterNameSetting.update({ value: clusterName });
    }

    return {
      team: await team.apiData(),
      teamMember: await teamMember.apiData(),
    };
  }
}

export class TeamsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "teams:list";
    this.description = "list all the teams";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "read" };
    this.inputs = {};
  }

  async runWithinTransaction() {
    const teams = await Team.findAll();
    return {
      teams: await Promise.all(teams.map(async (team) => team.apiData())),
    };
  }
}

export class TeamCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:create";
    this.description = "create a team";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "write" };
    this.inputs = {
      name: { required: true },
      permissionAllRead: { required: false, default: true },
      permissionAllWrite: { required: false, default: false },
    };
  }

  async runWithinTransaction({ params }) {
    const team = new Team(params);
    await team.save();
    return { team: await team.apiData() };
  }
}

export class TeamEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:edit";
    this.description = "edit a team";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "write" };
    this.inputs = {
      id: { required: true },
      name: { required: false },
      permissionAllRead: { required: false },
      permissionAllWrite: { required: false },
      disabledPermissionAllRead: { required: false },
      disabledPermissionAllWrite: { required: false },
      permissions: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const team = await Team.findById(params.id);
    const updateParams = Object.assign({}, params);
    if (params.disabledPermissionAllRead) updateParams.permissionAllRead = null;

    if (params.disabledPermissionAllWrite) {
      updateParams.permissionAllWrite = null;
    }

    await team.update(updateParams);

    let permissions = params.permissions;
    if (permissions) {
      try {
        permissions = JSON.parse(permissions);
      } catch (error) {}

      await team.setPermissions(permissions);
    }

    return { team: await team.apiData() };
  }
}

export class TeamView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:view";
    this.description = "view a team and members";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const team = await Team.findOne({
      where: { id: params.id },
      include: [{ model: TeamMember }],
      order: [[api.sequelize.literal(`"teamMembers.email"`), "desc"]],
    });

    if (!team) throw new Error("team not found");

    return {
      team: await team.apiData(),
      teamMembers: await Promise.all(
        team.teamMembers.map(async (mem) => {
          return await mem.apiData();
        })
      ),
    };
  }
}

export class TeamDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "team:destroy";
    this.description = "destroy a team";
    this.outputExample = {};
    this.permission = { topic: "team", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const team = await Team.findById(params.id);
    await team.destroy();
    return { success: true };
  }
}

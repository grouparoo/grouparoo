import Sequelize from "sequelize";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { CLSAction } from "../classes/actions/clsAction";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { Setting } from "../models/Setting";
import { GrouparooSubscription } from "../modules/grouparooSubscription";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class TeamInitialize extends CLSAction {
  name = "team:initialize";
  description = "create the first team with the first team member";
  permission: ActionPermission = { topic: "team", mode: "write" };
  outputExample = {};
  inputs = {
    firstName: { required: true },
    lastName: { required: true },
    password: { required: true },
    email: { required: true },
    companyName: { required: false },
    subscribed: {
      required: false,
      default: true,
      formatter: APIData.ensureBoolean,
    },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<TeamInitialize>;
  }) {
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

    await GrouparooSubscription({ teamMember, subscribed: params.subscribed });

    if (params.companyName) {
      const clusterNameSetting = await Setting.findOne({
        where: { pluginName: "core", key: "cluster-name" },
      });
      if (!clusterNameSetting.locked) {
        await clusterNameSetting.update({ value: params.companyName });
      }
    }

    return {
      team: await team.apiData(),
      teamMember: await teamMember.apiData(),
    };
  }
}

export class TeamsList extends AuthenticatedAction {
  name = "teams:list";
  description = "list all the teams";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "read" };

  async runWithinTransaction() {
    const teams = await Team.findAll();
    return {
      teams: await Promise.all(teams.map((team) => team.apiData())),
    };
  }
}

export class TeamCreate extends AuthenticatedAction {
  name = "team:create";
  description = "create a team";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "write" };
  inputs = {
    name: { required: true },
    permissionAllRead: { required: false, default: true },
    permissionAllWrite: { required: false, default: false },
    permissions: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<TeamCreate> }) {
    const team = new Team(params);
    await team.save();
    if (params.permissions) await team.setPermissions(params.permissions);

    return { team: await team.apiData() };
  }
}

export class TeamEdit extends AuthenticatedAction {
  name = "team:edit";
  description = "edit a team";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "write" };
  inputs = {
    id: { required: true },
    name: { required: false },
    permissionAllRead: { required: false },
    permissionAllWrite: { required: false },
    disabledPermissionAllRead: { required: false },
    disabledPermissionAllWrite: { required: false },
    permissions: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<TeamEdit> }) {
    const team = await Team.findById(params.id);
    const updateParams = Object.assign({}, params);
    if (params.disabledPermissionAllRead) updateParams.permissionAllRead = null;

    if (params.disabledPermissionAllWrite) {
      updateParams.permissionAllWrite = null;
    }

    await team.update(updateParams);
    if (params.permissions) await team.setPermissions(params.permissions);

    return { team: await team.apiData() };
  }
}

export class TeamView extends AuthenticatedAction {
  name = "team:view";
  description = "view a team and members";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<TeamView> }) {
    const team = await Team.findOne({
      where: { id: params.id },
      include: [{ model: TeamMember }],
      order: [[Sequelize.literal(`"teamMembers.email"`), "desc"]],
    });

    if (!team) throw new Error("team not found");

    return {
      team: await team.apiData(),
      teamMembers: await Promise.all(
        team.teamMembers.map((mem) => mem.apiData())
      ),
    };
  }
}

export class TeamDestroy extends AuthenticatedAction {
  name = "team:destroy";
  description = "destroy a team";
  outputExample = {};
  permission: ActionPermission = { topic: "team", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<TeamDestroy> }) {
    const team = await Team.findById(params.id);
    await team.destroy();
    return { success: true };
  }
}

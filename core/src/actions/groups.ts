import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Group, GROUP_RULE_LIMIT } from "../models/Group";
import { PropertyOpsDictionary } from "../modules/ruleOpsDictionary";
import { TopLevelGroupRules } from "../modules/topLevelGroupRules";
import { GroupMember } from "../models/GroupMember";
import { ConfigWriter } from "../modules/configWriter";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { WhereAttributeHash } from "sequelize";
import { ParamsFrom } from "actionhero";

export class GroupsList extends AuthenticatedAction {
  name = "groups:list";
  description = "list all the groups";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "read" };
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    state: { required: false },
    modelId: { required: false },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["name", "desc"],
        ["createdAt", "desc"],
      ],
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<GroupsList> }) {
    const where: WhereAttributeHash = {};

    if (params.state) where["state"] = params.state;
    if (params.modelId) where["modelId"] = params.modelId;

    const groups = await Group.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    const total = await Group.scope(null).count({ where });

    return {
      total,
      groups: await Promise.all(groups.map((g) => g.apiData())),
    };
  }
}

export class GroupsRuleOptions extends AuthenticatedAction {
  name = "groups:ruleOptions";
  description = "send the options about groups to the UI";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "read" };

  async runWithinTransaction() {
    return {
      ruleLimit: GROUP_RULE_LIMIT,
      ops: PropertyOpsDictionary,
      topLevelGroupRules: TopLevelGroupRules,
    };
  }
}

export class GroupCreate extends AuthenticatedAction {
  name = "group:create";
  description = "create a group";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "write" };
  inputs = {
    name: { required: true },
    modelId: { required: true },
    matchType: { required: true, default: "all" },
    rules: { required: false, formatter: APIData.ensureArray },
    state: { required: false },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<GroupCreate> }) {
    const group = await Group.create({
      name: params.name,
      modelId: params.modelId,
      matchType: params.matchType,
      state: params.state,
    });

    if (params.rules) await group.setRules(params.rules);

    const responseGroup = await group.apiData();
    responseGroup.rules = group.toConvenientRules(await group.getRules());
    await ConfigWriter.run();
    return { group: responseGroup };
  }
}

export class GroupEdit extends AuthenticatedAction {
  name = "group:edit";
  description = "edit a group";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "write" };
  inputs = {
    id: { required: true },
    name: { required: false },
    matchType: { required: false },
    rules: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<GroupEdit> }) {
    const group = await Group.findById(params.id);
    await group.update(params);
    if (params.rules) await group.setRules(params.rules);

    const responseGroup = await group.apiData();
    responseGroup.rules = group.toConvenientRules(await group.getRules());
    await ConfigWriter.run();
    return { group: responseGroup };
  }
}

export class GroupRun extends AuthenticatedAction {
  name = "group:run";
  description = "recalculate the members for a group";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<GroupRun> }) {
    const group = await Group.findById(params.id);
    await group.run();
    return { success: true };
  }
}

export class GroupView extends AuthenticatedAction {
  name = "group:view";
  description = "view a group and members";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<GroupView> }) {
    const group = await Group.findById(params.id);
    const responseGroup = await group.apiData();
    responseGroup.rules = group.toConvenientRules(await group.getRules());
    return { group: responseGroup };
  }
}

export class GroupCountComponentMembers extends AuthenticatedAction {
  name = "group:countComponentMembers";
  description =
    "return the counts of records which exist due to a certain rule";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "read" };
  inputs = {
    id: { required: true },
    rules: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<GroupCountComponentMembers>;
  }) {
    const group = await Group.findById(params.id);

    const { componentCounts, funnelCounts } =
      await group.countComponentMembersFromRules(
        group.fromConvenientRules(params.rules)
      );

    return { componentCounts, funnelCounts };
  }
}

export class GroupCountPotentialMembers extends AuthenticatedAction {
  name = "group:countPotentialMembers";
  description = "return the count of records that would match these rules";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "read" };
  inputs = {
    id: { required: true },
    rules: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<GroupCountPotentialMembers>;
  }) {
    const group = await Group.findById(params.id);

    const count = await group.countPotentialMembers(
      group.fromConvenientRules(params.rules)
    );

    return { count };
  }
}

export class GroupListDestinations extends AuthenticatedAction {
  name = "group:listDestinations";
  description = "list the destinations interested in this group";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<GroupListDestinations>;
  }) {
    const group = await Group.findById(params.id);

    const destinations = await group.$get("destinations");
    return {
      total: destinations.length,
      destinations: await Promise.all(destinations.map((d) => d.apiData())),
    };
  }
}

export class GroupDestroy extends AuthenticatedAction {
  name = "group:destroy";
  description = "destroy a group";
  outputExample = {};
  permission: ActionPermission = { topic: "group", mode: "write" };
  inputs = {
    id: { required: true },
    force: {
      required: true,
      default: false,
      formatter: APIData.ensureBoolean,
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<GroupDestroy> }) {
    const group = await Group.findById(params.id);
    await Group.ensureNotInUse(group);

    if (params.force === true) {
      await GroupMember.destroy({ where: { groupId: group.id } });
      await group.destroy(); // other related models are handled by hooks
    } else {
      // group:destroy will be eventually enqueued by the `destroy` system task
      await group.update({ state: "deleted" });
    }

    await ConfigWriter.run();

    return { success: true };
  }
}

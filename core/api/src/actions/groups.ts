import { task, api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Group, GROUP_RULE_LIMIT, TopLevelGroupRules } from "../models/Group";
import { ProfilePropertyRuleOpsDictionary } from "../modules/RuleOpsDictionary";
import { Profile } from "../models/Profile";

export class GroupsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "groups:list";
    this.description = "list all the groups";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      state: { required: false },
      order: {
        required: false,
        default: [
          ["name", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const where = {};

    if (params.state) where["state"] = params.state;

    const groups = await Group.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.groups = await Promise.all(groups.map(async (g) => g.apiData()));
    response.total = await Group.scope(null).count({ where });
  }
}

export class GroupsRuleOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "groups:ruleOptions";
    this.description = "send the options about groups to the UI";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "read" };
    this.inputs = {};
  }

  async run({ response }) {
    response.ruleLimit = GROUP_RULE_LIMIT;
    response.ops = ProfilePropertyRuleOpsDictionary;
    response.topLevelGroupRules = TopLevelGroupRules;
  }
}

export class GroupCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:create";
    this.description = "create a group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "write" };
    this.inputs = {
      name: { required: true },
      type: { required: true },
      matchType: { required: true, default: "all" },
      rules: { required: false },
      state: { required: false },
    };
  }

  async run({ params, response }) {
    const transaction = await api.sequelize.transaction();

    try {
      const group = await Group.create(params, { transaction });

      if (params.rules) {
        await group.setRules(params.rules);
      }

      await transaction.commit();

      response.group = await group.apiData();
      response.group.rules = await group.getRules();
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }
}

export class GroupEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:edit";
    this.description = "edit a group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "write" };
    this.inputs = {
      guid: { required: true },
      name: { required: false },
      type: { required: false },
      matchType: { required: false },
      rules: { required: false },
    };
  }

  async run({ params, response }) {
    const group = await Group.findByGuid(params.guid);
    await group.update(params);

    if (params.rules) await group.setRules(params.rules);

    response.group = await group.apiData();
    response.group.rules = group.toConvenientRules(await group.getRules());
  }
}

export class GroupRun extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:run";
    this.description = "recalculate the members for a calculated group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const group = await Group.findByGuid(params.guid);
    await group.run();
    response.success = true;
  }
}

export class GroupAddProfile extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:addProfile";
    this.description = "add a profile to a manual group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "write" };
    this.inputs = {
      guid: { required: true },
      profileGuid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const group = await Group.findByGuid(params.guid);
    if (group.type !== "manual") {
      throw new Error(
        "only manual groups can have membership manipulated by this action"
      );
    }
    const profile = await Profile.findByGuid(params.profileGuid);
    await group.addProfile(profile);
    response.success = true;
  }
}

export class GroupRemoveProfile extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:removeProfile";
    this.description = "remove a profile to a manual group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "write" };
    this.inputs = {
      guid: { required: true },
      profileGuid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const group = await Group.findByGuid(params.guid);
    if (group.type !== "manual") {
      throw new Error(
        "only manual groups can have membership manipulated by this action"
      );
    }

    const profile = await Profile.findByGuid(params.profileGuid);
    await group.removeProfile(profile);
    response.success = true;
  }
}

export class GroupView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:view";
    this.description = "view a group and members";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const group = await Group.findByGuid(params.guid);
    response.group = await group.apiData();
    response.group.rules = group.toConvenientRules(await group.getRules());
  }
}

export class GroupCountComponentMembers extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:countComponentMembers";
    this.description =
      "return the counts of profiles which exist due to a certain rule";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "read" };
    this.inputs = {
      guid: { required: true },
      rules: { required: false },
    };
  }

  async run({ response, params }) {
    const group = await Group.findByGuid(params.guid);

    let rules;
    if (params.rules) {
      try {
        rules = params.rules.map((r) => JSON.parse(r));
      } catch (e) {
        rules = params.rules;
      }
    }

    const {
      componentCounts,
      funnelCounts,
    } = await group.countComponentMembersFromRules(
      group.fromConvenientRules(rules)
    );
    response.componentCounts = componentCounts;
    response.funnelCounts = funnelCounts;
  }
}

export class GroupCountPotentialMembers extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:countPotentialMembers";
    this.description =
      "return the count of profiles that would match these rules";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "read" };
    this.inputs = {
      guid: { required: true },
      rules: { required: false },
    };
  }

  async run({ response, params }) {
    const group = await Group.findByGuid(params.guid);

    let rules;
    if (params.rules) {
      try {
        rules = params.rules.map((r) => JSON.parse(r));
      } catch (e) {
        rules = params.rules;
      }
    }

    const count = await group.countPotentialMembers(
      group.fromConvenientRules(rules)
    );
    response.count = count;
  }
}

export class GroupListDestinations extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:listDestinations";
    this.description = "list the destinations interested in this group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const group = await Group.findByGuid(params.guid);

    const destinations = await group.$get("destinations");
    response.destinations = await Promise.all(
      destinations.map((d) => d.apiData())
    );
  }
}

export class GroupExport extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:export";
    this.description = "export the profiles in this group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "write" };
    this.inputs = {
      guid: { required: true },
      type: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const group = await Group.findByGuid(params.guid);

    if (params.type === "csv") {
      await task.enqueue("group:exportToCSV", { groupGuid: group.guid });
    } else {
      throw new Error(`${params.type} is not a type of group export`);
    }

    response.success = true;
  }
}

export class GroupDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "group:destroy";
    this.description = "destroy a group";
    this.outputExample = {};
    this.permission = { topic: "group", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const group = await Group.findByGuid(params.guid);

    await Group.checkDestinationGroups(group);

    await group.update({ state: "deleted" });
    await task.enqueue("group:destroy", { groupGuid: group.guid });
    response.success = true;
  }
}

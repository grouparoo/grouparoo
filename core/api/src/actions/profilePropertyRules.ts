import { api, Action } from "actionhero";
import { Op } from "sequelize";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import { ProfileProperty } from "../models/ProfileProperty";
import { Group } from "../models/Group";
import { GroupRule } from "../models/GroupRule";

export class ProfilePropertyRulesList extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRules:list";
    this.description = "list all the profilePropertyRules";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      limit: { required: true, default: 1000, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      unique: { required: false },
      state: { required: false },
      order: {
        required: true,
        default: [
          ["sourceGuid", "desc"],
          ["key", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const where = {};

    if (params.state) {
      where["state"] = params.state;
    }

    if (params?.unique?.toString().toLowerCase() === "true") {
      where["unique"] = true;
    }

    const profilePropertyRules = await ProfilePropertyRule.scope(null).findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where,
    });

    response.profilePropertyRules = [];
    response.examples = {};

    for (const i in profilePropertyRules) {
      const rule = profilePropertyRules[i];
      const apiData = await rule.apiData();

      const examples = await ProfileProperty.findAll({
        where: {
          profilePropertyRuleGuid: rule.guid,
          rawValue: { [Op.not]: null },
        },
        order: api.sequelize.random(),
        limit: 5,
      });
      const exampleValues = examples.map((e) => e.rawValue);

      response.profilePropertyRules.push(apiData);
      response.examples[rule.guid] = exampleValues;
    }

    response.total = await ProfilePropertyRule.count();
  }
}

export class ProfilePropertyRulesOptions extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRules:options";
    this.description =
      "enumerate the options for creating a new profilePropertyRule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {};
  }

  async run({ response }) {
    response.types = ProfilePropertyRule.rawAttributes.type.values;
  }
}

export class ProfilePropertyRuleGroups extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRule:groups";
    this.description =
      "enumerate the groups using this profile property rule in their rules";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = { guid: { required: true } };
  }

  async run({ params, response }) {
    const profilePropertyRule = await ProfilePropertyRule.scope(null).findOne({
      where: { guid: params.guid },
    });

    if (!profilePropertyRule) {
      throw new Error("profilePropertyRule not found");
    }

    const groups = await Group.findAll({
      include: [
        {
          model: GroupRule,
          where: { profilePropertyRuleGuid: profilePropertyRule.guid },
        },
      ],
    });

    response.groups = [];
    for (const i in groups) {
      response.groups.push(await groups[i].apiData());
    }
  }
}

export class ProfilePropertyRuleCreate extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRule:create";
    this.description = "create a profilePropertyRule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      key: { required: false },
      type: { required: true },
      unique: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const profilePropertyRule = await ProfilePropertyRule.create({
      key: params.key,
      type: params.type,
      unique: params.unique,
      sourceGuid: params.sourceGuid,
    });

    if (params.options) {
      await profilePropertyRule.setOptions(params.options);
    }

    if (params.state) {
      await profilePropertyRule.update({ state: params.state });
    }

    response.profilePropertyRule = await profilePropertyRule.apiData();
    response.pluginOptions = await profilePropertyRule.pluginOptions();
  }
}

export class ProfilePropertyRuleEdit extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRule:edit";
    this.description = "edit a profilePropertyRule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
      key: { required: false },
      type: { required: false },
      unique: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      options: { required: false },
    };
  }

  async run({ params, response }) {
    const profilePropertyRule = await ProfilePropertyRule.scope(null).findOne({
      where: { guid: params.guid },
    });
    if (!profilePropertyRule) {
      throw new Error("profilePropertyRule not found");
    }

    if (params.options) {
      await profilePropertyRule.setOptions(params.options);
    }

    await profilePropertyRule.update(params);

    response.profilePropertyRule = await profilePropertyRule.apiData();
    response.pluginOptions = await profilePropertyRule.pluginOptions();
  }
}

export class ProfilePropertyRuleView extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRule:view";
    this.description = "view a profilePropertyRule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const profilePropertyRule = await ProfilePropertyRule.scope(null).findOne({
      where: { guid: params.guid },
    });
    if (!profilePropertyRule) {
      throw new Error("profilePropertyRule not found");
    }

    response.profilePropertyRule = await profilePropertyRule.apiData();
    response.pluginOptions = await profilePropertyRule.pluginOptions();
  }
}

export class ProfilePropertyRuleTest extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRule:test";
    this.description = "test a profilePropertyRule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const profilePropertyRule = await ProfilePropertyRule.scope(null).findOne({
      where: { guid: params.guid },
    });
    if (!profilePropertyRule) {
      throw new Error("profilePropertyRule not found");
    }

    response.test = (await profilePropertyRule.test()) || true;
  }
}

export class ProfilePropertyRuleDestroy extends Action {
  constructor() {
    super();
    this.name = "profilePropertyRule:destroy";
    this.description = "destroy a profilePropertyRule";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const profilePropertyRule = await ProfilePropertyRule.scope(null).findOne({
      where: { guid: params.guid },
    });
    if (!profilePropertyRule) {
      throw new Error("profilePropertyRule not found");
    }
    await profilePropertyRule.destroy();
    response.success = true;
  }
}

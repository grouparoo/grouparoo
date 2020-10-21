import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Op } from "sequelize";
import { Profile } from "../models/Profile";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import { ProfileProperty } from "../models/ProfileProperty";
import { Group } from "../models/Group";
import { GroupRule } from "../models/GroupRule";
import { AsyncReturnType } from "type-fest";

export class ProfilePropertyRulesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRules:list";
    this.description = "list all the profilePropertyRules";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      unique: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      order: {
        required: false,
        default: [
          ["key", "asc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params }) {
    const where = {};
    if (params.state) where["state"] = params.state;
    if (params.sourceGuid) where["sourceGuid"] = params.sourceGuid;
    if (params?.unique?.toString().toLowerCase() === "true")
      where["unique"] = true;

    const profilePropertyRules = await ProfilePropertyRule.scope(null).findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
      where,
    });

    const responseProfilePropertyRules: Array<AsyncReturnType<
      typeof ProfilePropertyRule.prototype.apiData
    >> = [];
    const responseExamples: { [guid: string]: string[] } = {};

    for (const i in profilePropertyRules) {
      const rule = profilePropertyRules[i];
      const apiData = await rule.apiData();

      const examples = await ProfileProperty.findAll({
        where: {
          profilePropertyRuleGuid: rule.guid,
          rawValue: { [Op.not]: null },
        },
        order: [["guid", "asc"]],
        limit: 5,
      });
      const exampleValues = examples.map((e) => e.rawValue);

      responseProfilePropertyRules.push(apiData);
      responseExamples[rule.guid] = exampleValues;
    }

    const total = await ProfilePropertyRule.scope(null).count();

    return {
      total,
      profilePropertyRules: responseProfilePropertyRules,
      examples: responseExamples,
    };
  }
}

export class ProfilePropertyRulesOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRules:options";
    this.description =
      "enumerate the options for creating a new profilePropertyRule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "read" };
    this.inputs = {};
  }

  async run() {
    return { types: ProfilePropertyRule.rawAttributes.type.values };
  }
}

export class ProfilePropertyRuleGroups extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:groups";
    this.description =
      "enumerate the groups using this profile property rule in their rules";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "read" };
    this.inputs = { guid: { required: true } };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );

    const groups = await Group.findAll({
      include: [
        {
          model: GroupRule,
          where: { profilePropertyRuleGuid: profilePropertyRule.guid },
        },
      ],
    });

    return {
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class ProfilePropertyRuleCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:create";
    this.description = "create a profilePropertyRule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "write" };
    this.inputs = {
      key: { required: false },
      type: { required: true },
      unique: { required: false },
      isArray: { required: false },
      identifying: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      options: { required: false },
      filters: { required: false },
    };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.create({
      key: params.key,
      type: params.type,
      unique: params.unique,
      isArray: params.isArray,
      identifying: params.identifying,
      sourceGuid: params.sourceGuid,
    });

    if (params.options) await profilePropertyRule.setOptions(params.options);
    if (params.filters) await profilePropertyRule.setFilters(params.filters);
    if (params.state) await profilePropertyRule.update({ state: params.state });

    const source = await profilePropertyRule.$get("source");

    return {
      profilePropertyRule: await profilePropertyRule.apiData(),
      pluginOptions: await profilePropertyRule.pluginOptions(),
      source: source.apiData(),
    };
  }
}

export class ProfilePropertyRuleEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:edit";
    this.description = "edit a profilePropertyRule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "write" };
    this.inputs = {
      guid: { required: true },
      key: { required: false },
      type: { required: false },
      unique: { required: false },
      isArray: { required: false },
      identifying: { required: false },
      state: { required: false },
      sourceGuid: { required: false },
      options: { required: false },
      filters: { required: false },
    };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );

    if (params.options) await profilePropertyRule.setOptions(params.options);
    if (params.filters) await profilePropertyRule.setFilters(params.filters);

    await profilePropertyRule.update(params);

    const source = await profilePropertyRule.$get("source");

    return {
      profilePropertyRule: await profilePropertyRule.apiData(),
      pluginOptions: await profilePropertyRule.pluginOptions(),
      source: source.apiData(),
    };
  }
}

export class ProfilePropertyRuleFilterOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:filterOptions";
    this.description = "view a the filter options for a profile property rule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );
    return { options: await profilePropertyRule.pluginFilterOptions() };
  }
}

export class ProfilePropertyRuleView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:view";
    this.description = "view a profilePropertyRule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );
    const source = await profilePropertyRule.$get("source");

    return {
      profilePropertyRule: await profilePropertyRule.apiData(),
      source: await source.apiData(),
    };
  }
}

export class ProfilePropertyRulePluginOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:pluginOptions";
    this.description = "view the plugin options for a profile property rule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );

    return { pluginOptions: await profilePropertyRule.pluginOptions() };
  }
}

export class ProfilePropertyRuleProfilePreview extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:profilePreview";
    this.description =
      "view a profilePropertyRule's new options against a profile";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "read" };
    this.inputs = {
      guid: { required: true },
      profileGuid: { required: false },
      options: { required: false },
      filters: { required: false },
    };
  }

  async run({ params }) {
    let profile: Profile;

    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );

    if (params.profileGuid) {
      profile = await Profile.findByGuid(params.profileGuid);
    } else {
      profile = await Profile.findOne({ order: [["guid", "asc"]] });
      if (!profile) {
        return { errorMessage: "No profiles found" };
      }
    }

    let parsedOptions = params.options;
    if (parsedOptions) {
      try {
        // as this is a GET, the options will be stringified
        parsedOptions = JSON.parse(parsedOptions);
      } catch {}
    }

    let parsedFilters = params.filters;
    if (parsedFilters) {
      try {
        // as this is a GET, the options will be stringified
        parsedFilters = parsedFilters.map((f) => JSON.parse(f));
      } catch {}
    }

    const apiData = await profile.apiData();
    const source = await profilePropertyRule.$get("source");

    let newPropertyValues: Array<string | number | boolean | Date>;
    let errorMessage: string;
    try {
      newPropertyValues = await source.importProfileProperty(
        profile,
        profilePropertyRule,
        parsedOptions,
        parsedFilters
      );
    } catch (error) {
      errorMessage = error.toString();
    }

    apiData.properties[profilePropertyRule.key] = Object.assign(
      apiData.properties[profilePropertyRule.key],
      { values: newPropertyValues }
    );

    return { errorMessage, profile: apiData };
  }
}

export class ProfilePropertyRuleTest extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:test";
    this.description = "test a profilePropertyRule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );

    return { test: (await profilePropertyRule.test()) || true };
  }
}

export class ProfilePropertyRuleDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profilePropertyRule:destroy";
    this.description = "destroy a profilePropertyRule";
    this.outputExample = {};
    this.permission = { topic: "profilePropertyRule", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profilePropertyRule = await ProfilePropertyRule.findByGuid(
      params.guid
    );

    await profilePropertyRule.destroy();
    return { success: true };
  }
}

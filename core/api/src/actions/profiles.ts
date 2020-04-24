import { Action, api } from "actionhero";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import { internalRun } from "../modules/internalRun";
import { Op } from "sequelize";

export class ProfilesList extends Action {
  constructor() {
    super();
    this.name = "profiles:list";
    this.description = "list all the profiles in a group";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: false },
      searchKey: { required: false },
      searchValue: { required: false },
      limit: { required: true, default: 1000 },
      offset: { required: true, default: 0 },
      order: { required: true, default: [["createdAt", "desc"]] },
    };
  }

  async run({ response, params }) {
    let profiles, total;
    const where: { [profilePropertyRuleGuid: string]: any } = {};

    if (
      params.searchKey &&
      params.searchValue &&
      params.searchValue.length > 0
    ) {
      const rules = await ProfilePropertyRule.cached();
      const rule = rules[params.searchKey];
      if (!rule) {
        throw new Error(
          `cannot find a profile property rule for ${params.searchKey}`
        );
      }

      where.profilePropertyRuleGuid = rule.guid;

      if (params.searchValue.indexOf("*") >= 0) {
        where.rawValue = {
          [Op.iLike]: `${params.searchValue.replace(/\*/g, "%")}`,
        };
      } else {
        where.rawValue = api.sequelize.where(
          api.sequelize.fn("LOWER", api.sequelize.col("rawValue")),
          "=",
          api.sequelize.fn("LOWER", params.searchValue)
        );
      }
    }

    if (params.guid) {
      const group = await Group.findByGuid(params.guid);
      const groupMembers: Array<GroupMember> = await group.$get(
        "groupMembers",
        {
          offset: params.offset,
          limit: params.limit,
        }
      );

      const include: Array<any> = [{ model: GroupMember }];
      if (Object.keys(where).length > 0) {
        include.push({
          model: ProfileProperty,
          where,
        });
      }
      profiles = await Profile.findAll({
        where: {
          guid: { [Op.in]: groupMembers.map((mem) => mem.profileGuid) },
        },
        include,
      });

      total = await group.profilesCount({
        distinct: true,
        include: [],
      });

      response.total = total;
      response.profiles = await Promise.all(
        profiles.map(async (p) => {
          const apiData = await p.apiData();
          const memberData = { joinedAt: p.groupMembers[0].createdAt };
          return Object.assign(apiData, memberData);
        })
      );
    } else {
      profiles = await Profile.findAll({
        offset: params.offset,
        limit: params.limit,
        include: [{ model: ProfileProperty, where }],
      });

      total = await Profile.count({
        distinct: true,
        include: [{ model: ProfileProperty, where }],
      });

      response.total = total;
      response.profiles = await Promise.all(
        profiles.map(async (p) => p.apiData())
      );
    }
  }
}

export class ProfileAutocompleteProfileProperty extends Action {
  constructor() {
    super();
    this.name = "profiles:autocompleteProfileProperty";
    this.description = "create a run to import and update every profile";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      profilePropertyRuleGuid: { required: true },
      match: { required: true },
      limit: { required: false, default: 25 },
      offset: { required: false, default: 0 },
      order: { required: false, default: [["rawValue", "asc"]] },
    };
  }

  async run({ params, response }) {
    const profileProperties = await ProfileProperty.findAll({
      where: { rawValue: { [Op.iLike]: `%${params.match}%` } },
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    response.profileProperties = await Promise.all(
      profileProperties.map((prop) => prop.getValue())
    );
  }
}

export class ProfilesImportAndUpdate extends Action {
  constructor() {
    super();
    this.name = "profiles:importAndUpdate";
    this.description = "create a run to import and update every profile";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {};
  }

  async run({ session, response }) {
    const run = await internalRun("teamMember", session.teamMember.guid);
    response.run = await run.apiData();
  }
}

export class ProfileCreate extends Action {
  constructor() {
    super();
    this.name = "profile:create";
    this.description = "create a profile";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-write"];
    this.inputs = {
      properties: { required: false, default: {} },
    };
  }

  async run({ params, response }) {
    const profile = new Profile(params);
    await profile.save();
    await profile.addOrUpdateProperties(params.properties);
    response.profile = await profile.apiData();
  }
}

export class ProfileImportAndUpdate extends Action {
  constructor() {
    super();
    this.name = "profile:importAndUpdate";
    this.description = "fully import a profile from all apps and update groups";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-write"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;

    const profile = await Profile.findByGuid(params.guid);

    await profile.import();
    await profile.updateGroupMembership();
    await profile.export(true);

    response.profile = await profile.apiData();
    response.success = true;
  }
}

export class ProfileEdit extends Action {
  constructor() {
    super();
    this.name = "profile:edit";
    this.description =
      "edit a profile.  _delete is a special key to remote a property that already exists";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-write"];
    this.inputs = {
      guid: { required: true },
      properties: { required: false, default: {} },
      removedProperties: { required: false, default: [] },
    };
  }

  async run({ params, response }) {
    const profile = await Profile.findByGuid(params.guid);
    await profile.update(params);
    await profile.addOrUpdateProperties(params.properties);
    await profile.removeProperties(params.removedProperties);
    await profile.import();
    await profile.updateGroupMembership();
    await profile.export();
    response.profile = await profile.apiData();
  }
}

export class ProfileView extends Action {
  constructor() {
    super();
    this.name = "profile:view";
    this.description = "view a profile and members";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    const profile = await Profile.findByGuid(params.guid);
    response.profile = await profile.apiData();
    response.groups = await profile.$get("groups");
  }
}

export class ProfileDestroy extends Action {
  constructor() {
    super();
    this.name = "profile:destroy";
    this.description = "destroy a profile";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-write"];
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params, response }) {
    response.success = false;
    const profile = await Profile.findByGuid(params.guid);
    await profile.destroy();
    response.success = true;
  }
}

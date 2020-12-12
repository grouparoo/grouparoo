import { api, config } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { Property } from "../models/Property";
import { internalRun } from "../modules/internalRun";
import { Op } from "sequelize";

export class ProfilesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profiles:list";
    this.description = "list all the profiles in a group";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "read" };
    this.inputs = {
      groupGuid: { required: false },
      searchKey: { required: false },
      searchValue: { required: false },
      state: { required: false },
      limit: { required: true, default: 100 },
      offset: { required: true, default: 0 },
      order: {
        required: false,
        default: [["createdAt", "asc"]],
      },
    };
  }

  async run({ params }) {
    let profiles: Profile[];

    const where: { [propertyGuid: string]: any } = {};

    if (
      params.searchKey &&
      params.searchValue &&
      params.searchValue.length > 0
    ) {
      const rule = await Property.findOne({
        where: { key: params.searchKey },
      });
      if (!rule) {
        throw new Error(
          `cannot find a profile property rule for ${params.searchKey}`
        );
      }

      where.propertyGuid = rule.guid;
      if (
        params.searchValue.toLowerCase() === "null" ||
        params.searchValue === ""
      ) {
        where.rawValue = { [Op.eq]: null };
      } else {
        const op = config.sequelize.dialect === "postgres" ? Op.iLike : Op.like;
        const rawValueWhereClause = {};
        rawValueWhereClause[op] = `${params.searchValue}`;
        where.rawValue = rawValueWhereClause;
      }
    }

    if (params.groupGuid) {
      const group = await Group.findByGuid(params.groupGuid);

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
          state: params.state ? params.state : { [Op.ne]: null },
        },
        include,
        order: params.order,
      });

      const total = await group.profilesCount({
        distinct: true,
        include: [],
      });

      return {
        total,
        profiles: await Promise.all(
          profiles.map(async (p) => {
            const apiData = await p.apiData();
            const memberData = { joinedAt: p.groupMembers[0].createdAt };
            return Object.assign(apiData, memberData);
          })
        ),
      };
    } else {
      const requiredJoin = Object.keys(where).length > 0 ? true : false;

      profiles = await Profile.findAll({
        offset: params.offset,
        limit: params.limit,
        where: { state: params.state ? params.state : { [Op.ne]: null } },
        include: [{ model: ProfileProperty, where, required: requiredJoin }],
        order: params.order,
      });

      const total = await Profile.count({
        distinct: true,
        where: { state: params.state ? params.state : { [Op.ne]: null } },
        include: [{ model: ProfileProperty, where, required: requiredJoin }],
      });

      return {
        total,
        profiles: await Promise.all(
          profiles.map(async (p) => {
            const profile = await Profile.findByGuid(p.guid);
            return profile.apiData();
          })
        ),
      };
    }
  }
}

export class ProfileAutocompleteProfileProperty extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profiles:autocompleteProfileProperty";
    this.description = "return matching profile property values";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "read" };
    this.inputs = {
      propertyGuid: { required: true },
      match: { required: true },
      limit: { required: false, default: 25 },
      offset: { required: false, default: 0 },
      order: { required: false, default: [["rawValue", "asc"]] },
    };
  }

  async run({ params }) {
    const op = config.sequelize.dialect === "postgres" ? Op.iLike : Op.like;
    const rawValueWhereClause = {};
    rawValueWhereClause[op] = `%${params.match}%`;

    const profileProperties = await ProfileProperty.findAll({
      attributes: [
        [
          api.sequelize.fn("DISTINCT", api.sequelize.col("rawValue")),
          "rawValue",
        ],
        "propertyGuid",
      ],
      where: {
        propertyGuid: params.propertyGuid,
        rawValue: rawValueWhereClause,
      },
      group: ["rawValue", "propertyGuid"],
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      profileProperties: await Promise.all(
        profileProperties.map((prop) => prop.getValue())
      ),
    };
  }
}

export class ProfilesImportAndUpdate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profiles:importAndUpdate";
    this.description = "create a run to import and update every profile";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "write" };
    this.inputs = {};
  }

  async run({ session }) {
    const run = await internalRun("teamMember", session.teamMember.guid);
    return { run: await run.apiData() };
  }
}

export class ProfileCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profile:create";
    this.description = "create a profile";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "write" };
    this.inputs = {
      properties: { required: false, default: {} },
    };
  }

  async run({ params }) {
    const profile = new Profile(params);
    await profile.save();
    await profile.addOrUpdateProperties(params.properties);

    const groups = await profile.$get("groups");

    return {
      profile: await profile.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class ProfileImportAndExport extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profile:importAndExport";
    this.description = "fully import a profile from all apps and update groups";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profile = await Profile.findByGuid(params.guid);

    await profile.markPending();
    await profile.import();
    await profile.updateGroupMembership();
    await profile.update({ state: "ready" });
    await profile.export(true);

    const groups = await profile.$get("groups");

    return {
      success: true,
      profile: await profile.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class ProfileEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profile:edit";
    this.description = "edit a profile";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "write" };
    this.inputs = {
      guid: { required: true },
      properties: { required: false, default: {} },
      removedProperties: { required: false, default: [] },
    };
  }

  async run({ params }) {
    const profile = await Profile.findByGuid(params.guid);
    const oldGroups = await profile.$get("groups");
    await profile.update(params);
    await profile.addOrUpdateProperties(params.properties);
    await profile.removeProperties(params.removedProperties);
    await profile.import();
    await profile.updateGroupMembership();
    await profile.export(false, oldGroups);

    const groups = await profile.$get("groups");

    return {
      profile: await profile.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class ProfileView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profile:view";
    this.description = "view a profile and members";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "read" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profile = await Profile.findByGuid(params.guid);
    const groups = await profile.$get("groups");
    return {
      profile: await profile.apiData(),
      groups: await Promise.all(groups.map((group) => group.apiData())),
    };
  }
}

export class ProfileDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profile:destroy";
    this.description = "destroy a profile";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "write" };
    this.inputs = {
      guid: { required: true },
    };
  }

  async run({ params }) {
    const profile = await Profile.findByGuid(params.guid);
    await profile.destroy();
    return { success: true };
  }
}

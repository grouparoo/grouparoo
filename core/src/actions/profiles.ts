import { api, config } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { Property } from "../models/Property";
import { internalRun } from "../modules/internalRun";
import { Op } from "sequelize";
import { ConfigWriter } from "../modules/configWriter";

export class ProfilesList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "profiles:list";
    this.description = "list all the profiles in a group";
    this.outputExample = {};
    this.permission = { topic: "profile", mode: "read" };
    this.inputs = {
      groupId: { required: false },
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

  async runWithinTransaction({ params }) {
    const searchWhere: { [propertyId: string]: any } = {};

    if (
      params.searchKey &&
      params.searchValue &&
      params.searchValue.length > 0
    ) {
      const property = await Property.findOne({
        where: { key: params.searchKey },
      });
      if (!property) {
        throw new Error(`cannot find a property for ${params.searchKey}`);
      }

      searchWhere.propertyId = property.id;
      if (
        params.searchValue.toLowerCase() === "null" ||
        params.searchValue === ""
      ) {
        searchWhere.rawValue = { [Op.eq]: null };
      } else {
        const op = config.sequelize.dialect === "postgres" ? Op.iLike : Op.like;
        const rawValueWhereClause = {};
        rawValueWhereClause[op] = `${params.searchValue}`;
        searchWhere.rawValue = rawValueWhereClause;
      }
    }

    const hasSearch = Object.keys(searchWhere).length > 0 ? true : false;
    const searchIncludeItem = {
      model: ProfileProperty,
      where: searchWhere,
      required: true,
    };
    const profileWhere = {
      state: params.state ? params.state : { [Op.ne]: null },
    };
    const profileIncludeItem = { model: ProfileProperty };

    if (params.groupId) {
      const group = await Group.findById(params.groupId);

      const groupMembers: Array<GroupMember> = await group.$get(
        "groupMembers",
        {
          offset: params.offset,
          limit: params.limit,
        }
      );

      const groupInclude: Array<any> = [{ model: GroupMember }];
      if (hasSearch) {
        groupInclude.push(searchIncludeItem);
      } else {
        groupInclude.push(profileIncludeItem);
      }

      profileWhere["id"] = {
        [Op.in]: groupMembers.map((mem) => mem.profileId),
      };

      const profiles = await Profile.findAll({
        where: profileWhere,
        include: groupInclude,
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
    } else if (hasSearch) {
      const found = await Profile.findAll({
        offset: params.offset,
        limit: params.limit,
        where: profileWhere,
        include: [searchIncludeItem],
        order: params.order,
      });

      let profiles: Profile[] = [];
      if (found.length > 0) {
        // fetch to get full profile
        profiles = await Profile.findAll({
          where: { id: found.map((p) => p.id) },
          include: [profileIncludeItem],
        });
      }

      const total = await Profile.count({
        distinct: true,
        where: profileWhere,
        include: [searchIncludeItem],
      });

      const profileData = [];
      for (let p of profiles) {
        profileData.push(await p.apiData());
      }
      return {
        total,
        profiles: profileData,
      };
    } else {
      // regular list based on state
      const profiles = await Profile.findAll({
        offset: params.offset,
        limit: params.limit,
        where: profileWhere,
        include: [profileIncludeItem],
        order: params.order,
      });

      const total = await Profile.count({
        distinct: true,
        where: profileWhere,
        include: [],
      });

      const profileData = [];
      for (let p of profiles) {
        profileData.push(await p.apiData());
      }

      return {
        total,
        profiles: profileData,
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
      propertyId: { required: true },
      match: { required: true },
      limit: { required: false, default: 25 },
      offset: { required: false, default: 0 },
      order: { required: false, default: [["rawValue", "asc"]] },
    };
  }

  async runWithinTransaction({ params }) {
    const op = config.sequelize.dialect === "postgres" ? Op.iLike : Op.like;
    const rawValueWhereClause = {};
    rawValueWhereClause[op] = `%${params.match}%`;

    const profileProperties = await ProfileProperty.findAll({
      attributes: [
        [
          api.sequelize.fn("DISTINCT", api.sequelize.col("rawValue")),
          "rawValue",
        ],
        "propertyId",
      ],
      where: {
        propertyId: params.propertyId,
        rawValue: rawValueWhereClause,
      },
      group: ["rawValue", "propertyId"],
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

  async runWithinTransaction({ session }) {
    const run = await internalRun("teamMember", session.teamMember.id);
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

  async runWithinTransaction({ params }) {
    const profile = new Profile(params);
    await profile.save();
    await profile.addOrUpdateProperties(params.properties);

    const groups = await profile.$get("groups");

    console.log("will write profile");
    await ConfigWriter.run();
    console.log("wrote profile");

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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const profile = await Profile.findById(params.id);
    await profile.sync();
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
      id: { required: true },
      properties: { required: false, default: {} },
      removedProperties: { required: false, default: [] },
    };
  }

  async runWithinTransaction({ params }) {
    const profile = await Profile.findById(params.id);

    const oldGroups = await profile.$get("groups");

    await profile.update(params);
    await profile.addOrUpdateProperties(params.properties);
    await profile.removeProperties(params.removedProperties);

    await profile.sync(false, oldGroups);

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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const profile = await Profile.findById(params.id);
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
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const profile = await Profile.findById(params.id);
    await profile.destroy();
    return { success: true };
  }
}

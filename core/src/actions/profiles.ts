import { api, config } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { internalRun } from "../modules/internalRun";
import { Op } from "sequelize";
import { ConfigWriter } from "../modules/configWriter";
import { ProfileOps } from "../modules/ops/profile";
import { AsyncReturnType } from "type-fest";
import Sequelize from "sequelize";
import { APIData } from "../modules/apiData";

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
      caseSensitive: {
        required: false,
        formatter: APIData.ensureBoolean,
      },
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [["createdAt", "asc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const { profiles, total } = await ProfileOps.search(params);
    const profileData: AsyncReturnType<Profile["apiData"]>[] = [];
    for (const profile of profiles) {
      profileData.push(await profile.apiData());
    }

    return { total, profiles: profileData };
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
      limit: { required: false, default: 25, formatter: APIData.ensureNumber },
      offset: { required: false, default: 0, formatter: APIData.ensureNumber },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [["rawValue", "asc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const op = config.sequelize.dialect === "postgres" ? Op.iLike : Op.like;
    const rawValueWhereClause = {};
    rawValueWhereClause[op] = `%${params.match}%`;

    const profileProperties = await ProfileProperty.findAll({
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("rawValue")), "rawValue"],
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
      properties: {
        required: false,
        default: {},
        formatter: APIData.ensureObject,
      },
    };
  }

  async runWithinTransaction({ params }) {
    const profile = new Profile(params);
    await profile.save();
    if (params.properties) {
      await profile.addOrUpdateProperties(params.properties);
    }
    const groups = await profile.$get("groups");

    await ConfigWriter.run();

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
      properties: {
        required: false,
        default: {},
        formatter: APIData.ensureObject,
      },
      removedProperties: {
        required: false,
        default: [],
        formatter: APIData.ensureObject,
      },
    };
  }

  async runWithinTransaction({ params }) {
    const profile = await Profile.findById(params.id);

    await profile.update(params);
    if (params.properties) {
      await profile.addOrUpdateProperties(params.properties);
    }
    if (params.removedProperties) {
      await profile.removeProperties(params.removedProperties);
    }

    await profile.sync(false);

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

    await ConfigWriter.run();

    return { success: true };
  }
}

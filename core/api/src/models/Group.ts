import {
  Table,
  Column,
  AllowNull,
  DataType,
  Length,
  HasMany,
  Default,
  BelongsToMany,
  BeforeSave,
  AfterSave,
  BeforeDestroy,
  AfterDestroy,
  Is,
  DefaultScope,
  Scopes,
} from "sequelize-typescript";
import { api, task } from "actionhero";
import { Op } from "sequelize";
import Moment from "moment";
import { LoggedModel } from "../classes/loggedModel";
import { GroupMember } from "./GroupMember";
import { GroupRule } from "./GroupRule";
import { Run } from "./Run";
import { Profile } from "./Profile";
import { Import } from "./Import";
import { Setting } from "./Setting";
import { ProfileMultipleAssociationShim } from "./ProfileMultipleAssociationShim";
import { ProfileProperty } from "./ProfileProperty";
import { Destination } from "./Destination";
import { DestinationGroup } from "./DestinationGroup";
import { DestinationGroupMembership } from "./DestinationGroupMembership";
import {
  ProfilePropertyRule,
  profilePropertyRuleJSToSQLType,
  PROFILE_PROPERTY_RULE_OPS,
} from "./ProfilePropertyRule";
import { StateMachine } from "./../modules/stateMachine";

export const GROUP_RULE_LIMIT = 10;
const numbers = [...Array(GROUP_RULE_LIMIT).keys()].map((n) => n + 1).reverse();

export interface GroupRuleWithKey {
  key: string;
  op: string;
  match?: string | number | boolean;
  relativeMatchNumber?: number;
  relativeMatchUnit?: string;
  relativeMatchDirection?: string;
}

// we have no checks, as those are managed by the lifecycle methods below (and tasks)
const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: [] },
  { from: "draft", to: "initializing", checks: [] },
  { from: "draft", to: "deleted", checks: [] },
  { from: "draft", to: "updating", checks: [] },
  { from: "ready", to: "initializing", checks: [] },
  { from: "initializing", to: "ready", checks: [] },
  { from: "initializing", to: "updating", checks: [] },
  { from: "initializing", to: "deleted", checks: [] },
  { from: "ready", to: "updating", checks: [] },
  { from: "updating", to: "ready", checks: [] },
  { from: "updating", to: "initializing", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
];

@DefaultScope(() => ({
  where: {
    state: { [Op.notIn]: ["draft", "deleted"] },
  },
}))
@Scopes(() => ({
  notDraft: {
    where: {
      state: { [Op.notIn]: ["draft"] },
    },
  },
}))
@Table({ tableName: "groups", paranoid: false })
export class Group extends LoggedModel<Group> {
  guidPrefix() {
    return "grp";
  }

  @AllowNull(true)
  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  name: string;

  @AllowNull(false)
  @Is("ofValidType", (value) => {
    if (value !== "manual" && value !== "calculated") {
      throw new Error("type must be one of: manual, calculated");
    }
  })
  @Column(DataType.ENUM("manual", "calculated"))
  type: string;

  @AllowNull(false)
  @Default("all")
  @Is("ofValidMatchType", (value) => {
    if (value && value !== "all" && value !== "any") {
      throw new Error("matchType must be one of: all, any");
    }
  })
  @Column(DataType.ENUM("all", "any"))
  matchType: "all" | "any";

  @AllowNull(false)
  @Default("draft")
  @Column(
    DataType.ENUM("draft", "ready", "initializing", "updating", "deleted")
  )
  state: string;

  @Column
  calculatedAt: Date;

  @HasMany(() => GroupMember)
  groupMembers: GroupMember[];

  @HasMany(() => GroupRule)
  groupRules: GroupRule[];

  @HasMany(() => DestinationGroup)
  destinationGroups: DestinationGroup[];

  @BelongsToMany(() => Destination, () => DestinationGroup)
  destinations: Destination[];

  @BelongsToMany(() => Profile, () => GroupMember)
  profiles: Profile[];

  @BeforeSave
  static async ensureUniqueName(instance: Group) {
    const count = await Group.count({
      where: {
        guid: { [Op.ne]: instance.guid },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
    });
    if (count > 0) {
      throw new Error(`name "${instance.name}" is already in use`);
    }
  }

  @BeforeSave
  static async updateState(instance: Group) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterSave
  static async linkToDestinationsTrackingAllGroups(instance: Group) {
    if (["draft", "deleted"].includes(instance.state)) return;

    const destinations = await Destination.findAll({
      where: { trackAllGroups: true },
    });

    for (const i in destinations) {
      await DestinationGroup.findOrCreate({
        where: {
          groupGuid: instance.guid,
          destinationGuid: destinations[i].guid,
        },
      });
    }
  }

  @BeforeDestroy
  static async checkGroupMembers(instance: Group) {
    const count = await instance.$count("groupMembers");
    if (count > 0) {
      throw new Error(`this group still has ${count} members, cannot delete`);
    }
  }

  @BeforeDestroy
  static async checkDestinationGroups(instance: Group) {
    const count = await DestinationGroup.count({
      where: { groupGuid: instance.guid },
      include: [{ model: Destination, where: { trackAllGroups: false } }],
    });

    if (count > 0) {
      throw new Error(
        `this group still in use by ${count} destinations, cannot delete`
      );
    }
  }

  @BeforeDestroy
  static async checkDestinationGroupMembership(instance: Group) {
    const count = await DestinationGroupMembership.count({
      where: { groupGuid: instance.guid },
    });

    if (count > 0) {
      throw new Error(
        `this group still in use by ${count} destinations, cannot delete`
      );
    }
  }

  @AfterDestroy
  static async destroyDestinationGroup(instance: Group) {
    // need to go 1-by-1 for callbacks
    const destinationGroups = await instance.$get("destinationGroups");
    for (const i in destinationGroups) {
      await destinationGroups[i].destroy();
    }
  }

  @AfterDestroy
  static async destroyDestinationGroupMembership(instance: Group) {
    return DestinationGroupMembership.destroy({
      where: {
        groupGuid: instance.guid,
      },
    });
  }

  @AfterDestroy
  static async destroyGroupRules(instance: Group) {
    return GroupRule.destroy({
      where: {
        groupGuid: instance.guid,
      },
    });
  }

  @AfterDestroy
  static async destroyRuns(instance: Group) {
    await Run.destroy({
      where: { creatorGuid: instance.guid },
    });
  }

  async profilesCount(options = {}) {
    let search = { where: { groupGuid: this.guid } };
    if (options) {
      search = Object.assign(search, options);
    }

    return this.$count("groupMembers", search);
  }

  async getRules() {
    // We won't be deleting the model for GroupRule until the group is really deleted (to validate other models)
    // But we want to be sure that all membership matching will fail
    if (this.state === "deleted") return [];

    const rulesWithKey: GroupRuleWithKey[] = [];
    const rules = await this.$get("groupRules", {
      order: [["position", "asc"]],
    });

    for (const i in rules) {
      const rule = rules[i];
      const profilePropertyRule = await rule.$get("profilePropertyRule");
      rulesWithKey.push({
        key: profilePropertyRule.key,
        op: rule.op,
        match: rule.match,
        relativeMatchNumber: rule.relativeMatchNumber,
        relativeMatchUnit: rule.relativeMatchUnit,
        relativeMatchDirection: rule.relativeMatchDirection,
      });
    }

    return this.fromConvenientRules(rulesWithKey);
  }

  async setRules(rules: GroupRuleWithKey[]) {
    if (this.type !== "calculated") {
      throw new Error("group type not calculated");
    }

    const transaction = await api.sequelize.transaction();

    try {
      await GroupRule.destroy({
        where: {
          groupGuid: this.guid,
        },
        transaction,
      });

      for (const i in rules) {
        const rule = rules[i];
        const key = rule.key;
        const profilePropertyRule = await ProfilePropertyRule.findOne({
          where: { key },
        });

        if (!profilePropertyRule) {
          throw new Error(`cannot find Profile Property Rule ${key}`);
        }

        await GroupRule.create(
          {
            position: parseInt(i) + 1,
            groupGuid: this.guid,
            profilePropertyRuleGuid: profilePropertyRule.guid,
            op: rule.op,
            match: rule.match,
            relativeMatchNumber: rule.relativeMatchNumber,
            relativeMatchUnit: rule.relativeMatchUnit,
            relativeMatchDirection: rule.relativeMatchDirection,
          },
          { transaction }
        );
      }

      if (this.state !== "deleted" && rules.length > 0) {
        this.state = "initializing";
        this.changed("updatedAt", true);
        await this.save({ transaction });
        await transaction.commit();
        await this.run();
      } else {
        await transaction.commit();
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async apiData() {
    const profilesCount = await this.profilesCount();
    const rules = await this.getRules();
    const nextCalculatedAt = await this.nextCalculatedAt();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      rules,
      matchType: this.matchType,
      state: this.state,
      profilesCount,
      calculatedAt: this.calculatedAt ? this.calculatedAt.getTime() : null,
      nextCalculatedAt: nextCalculatedAt ? nextCalculatedAt.getTime() : null,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  fromConvenientRules(rules) {
    const convenientRules = PROFILE_PROPERTY_RULE_OPS._convenientRules;
    for (const i in rules) {
      if (convenientRules[rules[i].op]) {
        rules[i] = Object.assign(rules[i], convenientRules[rules[i].op]);
      }

      if (rules[i].relativeMatchNumber && rules[i].op.match(/^relative_/)) {
        rules[i].op = rules[i].op.replace(/^relative_/, "");
      }
    }

    return rules;
  }

  toConvenientRules(rules) {
    const convenientRules = PROFILE_PROPERTY_RULE_OPS._convenientRules;
    for (const i in rules) {
      for (const k in convenientRules) {
        if (
          convenientRules[k].op === rules[i].op &&
          convenientRules[k].match === rules[i].match &&
          !rules[i].relativeMatchNumber
        ) {
          rules[i] = Object.assign(rules[i], { op: k });
        }

        if (rules[i].relativeMatchNumber && !rules[i].op.match(/^relative_/)) {
          rules[i].op = `relative_${rules[i].op}`;
        }
      }
    }
    return rules;
  }

  async run(force = false, destinationGuid?: string) {
    await this.stopPreviousRuns();
    await task.enqueue("group:run", {
      groupGuid: this.guid,
      force,
      destinationGuid,
    });
  }

  async stopPreviousRuns() {
    const previousRuns = await Run.findAll({
      where: {
        creatorGuid: this.guid,
        state: "running",
      },
    });

    for (const i in previousRuns) {
      await previousRuns[i].stop();
    }
  }

  async nextCalculatedAt() {
    if (!this.calculatedAt) {
      return Moment().toDate();
    }

    const setting = await Setting.findOne({
      where: { pluginName: "core", key: "groups-calculation-delay-minutes" },
    });
    const delayMinutes = parseInt(setting.value);
    return Moment(this.calculatedAt).add(delayMinutes, "minutes").toDate();
  }

  async _buildProfileImport(
    profileGuid: string,
    creatorType: string,
    creatorGuid: string,
    destinationGuid?: string
  ) {
    const profile = await Profile.findOne({ where: { guid: profileGuid } });

    const oldProfileProperties = [];
    const properties = await profile.properties();
    for (const key in properties) {
      oldProfileProperties[key] = properties[key].value;
    }

    const oldGroupGuids = (await profile.$get("groups")).map((g) => g.guid);

    return Import.build({
      rawData: destinationGuid ? { _meta: { destinationGuid } } : {},
      data: destinationGuid ? { _meta: { destinationGuid } } : {},
      creatorType,
      creatorGuid,
      profileGuid: profile.guid,
      profileAssociatedAt: new Date(),
      oldProfileProperties,
      oldGroupGuids,
    });
  }

  async addProfile(profile: Profile) {
    const _import = await this._buildProfileImport(
      profile.guid,
      "group",
      this.guid
    );

    await GroupMember.create({
      groupGuid: this.guid,
      profileGuid: profile.guid,
    });

    await _import.save();
  }

  async removeProfile(profile: Profile) {
    const membership = await GroupMember.findOne({
      where: { groupGuid: this.guid, profileGuid: profile.guid },
    });

    if (!membership) {
      throw new Error("profile is not a member of this group");
    }

    const _import = await this._buildProfileImport(
      profile.guid,
      "group",
      this.guid
    );
    await membership.destroy();
    await _import.save();
  }

  validTypes = ["manual", "calculated"];

  async runAddGroupMembers(
    run: Run,
    limit = 1000,
    offset = 0,
    force = false,
    destinationGuid?: string
  ) {
    let groupMembersCount = 0;
    let profiles: ProfileMultipleAssociationShim[];

    if (this.type === "manual") {
      profiles = await this.$get("profiles", {
        attributes: ["guid"],
        limit,
        offset,
        order: [["createdAt", "asc"]],
      });
    } else {
      const rules = await this.getRules();
      if (Object.keys(rules).length === 0) {
        return 0;
      }

      const { where, include } = await this._buildGroupMemberQueryParts(
        rules,
        this.matchType
      );
      profiles = await ProfileMultipleAssociationShim.findAll({
        attributes: ["guid"],
        where,
        include,
        limit,
        offset,
        order: [["createdAt", "asc"]],
        subQuery: false,
      });
    }

    for (const i in profiles) {
      const profile = profiles[i];
      const groupMember = await GroupMember.findOne({
        where: {
          profileGuid: profile.guid,
          groupGuid: this.guid,
        },
      });

      if (!groupMember || force) {
        const transaction = await api.sequelize.transaction();
        const _import = await this._buildProfileImport(
          profile.guid,
          "run",
          run.guid,
          destinationGuid
        );
        await run.increment(["importsCreated"], { transaction });
        await _import.save({ transaction });
        await transaction.commit();
      } else {
        groupMember.set("updatedAt", new Date());
        groupMember.removedAt = null;
        await groupMember.changed("updatedAt", true);
        await groupMember.save();
      }

      groupMembersCount++;
    }

    this.calculatedAt = new Date();
    await this.save();

    return groupMembersCount;
  }

  async runRemoveGroupMembers(
    run: Run,
    limit = 1000,
    offset = 0,
    force = false,
    destinationGuid?: string
  ) {
    let groupMembersCount = 0;

    // The offset and order can be ignored as we will keep running this query until the set of results becomes 0.
    const groupMembersToRemove = await GroupMember.findAll({
      attributes: ["guid", "profileGuid"],
      where: {
        groupGuid: this.guid,
        updatedAt: { [Op.lt]: run.createdAt },
        removedAt: null,
      },
      limit,
    });

    for (const i in groupMembersToRemove) {
      const member = groupMembersToRemove[i];
      const transaction = await api.sequelize.transaction();
      member.removedAt = new Date();
      await member.save({ transaction });
      const _import = await this._buildProfileImport(
        member.profileGuid,
        "run",
        run.guid,
        destinationGuid
      );
      await run.increment(["importsCreated"], { transaction });
      await _import.save({ transaction });
      await transaction.commit();
      groupMembersCount++;
    }

    this.calculatedAt = new Date();
    await this.save();

    return groupMembersCount;
  }

  async removePreviousRunGroupMembers(run: Run, limit = 100) {
    let groupMembersCount = 0;

    const groupMembersToRemove = await GroupMember.findAll({
      attributes: ["guid", "profileGuid"],
      where: {
        groupGuid: this.guid,
        removedAt: { [Op.lte]: run.createdAt },
      },
      limit,
    });

    for (const i in groupMembersToRemove) {
      const member = groupMembersToRemove[i];
      member.removedAt = new Date();
      await member.save();
      const _import = await this._buildProfileImport(
        member.profileGuid,
        "run",
        run.guid
      );
      await _import.save();
      groupMembersCount++;
    }

    return groupMembersCount;
  }

  async updateProfileMembership(profile: Profile) {
    const existingMembership = await GroupMember.findOne({
      where: {
        groupGuid: this.guid,
        profileGuid: profile.guid,
      },
    });

    if (this.type === "manual") {
      if (this.state === "deleted") {
        if (existingMembership) {
          await existingMembership.destroy();
        }
        return false;
      } else {
        return existingMembership ? true : false;
      }
    } else {
      const rules = await this.getRules();

      if (Object.keys(rules).length == 0) {
        if (existingMembership) {
          await existingMembership.destroy();
        }
        return false;
      } else {
        const { where, include } = await this._buildGroupMemberQueryParts(
          rules,
          this.matchType
        );

        // and includes this profile
        if (!where[Op.and]) {
          where[Op.and] = [];
        }
        where[Op.and].push({
          guid: profile.guid,
        });

        const matchedProfiles = await ProfileMultipleAssociationShim.findAll({
          attributes: ["guid"],
          where,
          include,
        });

        const belongs = matchedProfiles.length === 1;

        if (belongs && !existingMembership) {
          await GroupMember.create({
            groupGuid: this.guid,
            profileGuid: profile.guid,
          });
        }

        if (!belongs && existingMembership) {
          await existingMembership.destroy();
        }

        return belongs;
      }
    }
  }

  async countPotentialMembers(
    rules?: GroupRuleWithKey[],
    matchType: "any" | "all" = this.matchType
  ) {
    if (!rules) {
      rules = await this.getRules();
    }

    const { where, include } = await this._buildGroupMemberQueryParts(
      rules,
      matchType
    );

    // we use ProfileMultipleAssociationShim as a shim model which has extra associations
    return ProfileMultipleAssociationShim.count({
      where,
      include,
    });
  }

  /**
   * Take the rules for the group and check how many group members there would have been both individually for each single rule, and then by building up the query step-by-step
   */
  async countComponentMembersFromRules(rules?: GroupRuleWithKey[]) {
    const componentCounts = [];
    const funnelCounts = [];
    let funnelStep = 0;

    if (!rules) {
      rules = await this.getRules();
    }

    for (const i in rules) {
      const localRule = rules[i];
      componentCounts[i] = await this.countPotentialMembers([localRule]);

      const funnelRules = [];
      let j = 0;
      while (j <= funnelStep) {
        funnelRules.push(rules[j]);
        j++;
      }
      funnelCounts[funnelStep] = await this.countPotentialMembers(funnelRules);
      funnelStep++;
    }

    return { componentCounts, funnelCounts };
  }

  async _buildGroupMemberQueryParts(
    rules?: GroupRuleWithKey[],
    matchType: "any" | "all" = this.matchType
  ) {
    if (this.type !== "calculated") {
      throw new Error("only calculated groups can be calculated");
    }

    if (!rules) {
      rules = await this.getRules();
    }

    const include = [];
    const wheres = [];
    const localNumbers = [].concat(numbers);

    if (Object.keys(rules).length > GROUP_RULE_LIMIT) {
      throw new Error("too many group rules");
    }

    const profilePropertyRules = await ProfilePropertyRule.cached();

    for (const i in rules) {
      const rule = rules[i];
      const number = localNumbers.pop();
      const alias = `ProfileProperties_${number}`;
      const {
        key,
        op,
        match,
        relativeMatchNumber,
        relativeMatchDirection,
        relativeMatchUnit,
      } = rule;
      const localWhereGroup = {};
      const rawValueMatch = {};

      if (match !== null && match !== undefined) {
        // rewrite null matches
        rawValueMatch[Op[op]] =
          match.toString().toLocaleLowerCase() === "null" ? null : match;
      } else if (relativeMatchNumber && !match) {
        const now = Moment();
        const timestamp = now[relativeMatchDirection](
          relativeMatchNumber,
          relativeMatchUnit
        )
          .toDate()
          .getTime();
        rawValueMatch[Op[op]] = timestamp;
      } else {
        throw new Error("either match or relativeMatch is required");
      }

      const profilePropertyRule = profilePropertyRules[key];
      if (!profilePropertyRule) {
        throw new Error(`cannot find type for ProfilePropertyRule ${key}`);
      }

      localWhereGroup[Op.and] = api.sequelize.where(
        api.sequelize.cast(
          api.sequelize.col(`${alias}.rawValue`),
          profilePropertyRuleJSToSQLType(profilePropertyRule.type)
        ),
        rawValueMatch
      );

      wheres.push(localWhereGroup);

      include.push({
        // $_$ wrapping is an option with eager loading
        // https://sequelize.org/master/manual/models-usage.html#eager-loading
        where: {
          [`$${alias}.profilePropertyRuleGuid$`]: profilePropertyRule.guid,
        },
        attributes: [],
        model: ProfileProperty,
        as: alias,
      });
    }

    if (rules.length === 0) {
      wheres.push({ guid: "" });
    }
    const joinType = matchType === "all" ? Op.and : Op.or;
    const whereContainer = {};
    whereContainer[joinType] = wheres;

    return { where: whereContainer, include };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}

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
  BeforeDestroy,
  AfterDestroy,
  Is,
  DefaultScope,
  Scopes,
} from "sequelize-typescript";
import { api, config } from "actionhero";
import { Op, Transaction } from "sequelize";
import Moment from "moment";
import { LoggedModel } from "../classes/loggedModel";
import { GroupMember } from "./GroupMember";
import { GroupRule } from "./GroupRule";
import { Run } from "./Run";
import { Profile } from "./Profile";
import { Setting } from "./Setting";
import { ProfileProperty } from "./ProfileProperty";
import { Destination } from "./Destination";
import { DestinationGroupMembership } from "./DestinationGroupMembership";
import { Property, propertyJSToSQLType } from "./Property";
import { PropertyOpsDictionary } from "../modules/RuleOpsDictionary";
import { StateMachine } from "./../modules/stateMachine";
import { GroupOps } from "../modules/ops/group";
import { LockableHelper } from "../modules/lockableHelper";

export const GROUP_RULE_LIMIT = 10;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface GroupRuleWithKey {
  key: string;
  type?: string;
  topLevel?: boolean;
  operation: { op: string; description?: string };
  match?: string | number | boolean;
  relativeMatchNumber?: number;
  relativeMatchUnit?: string;
  relativeMatchDirection?: string;
}

const groupTypes = ["calculated", "manual"] as const;
const matchTypes = ["any", "all"] as const;

const STATES = [
  "draft",
  "ready",
  "initializing",
  "updating",
  "deleted",
] as const;
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
  { from: "updating", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
];

export const TopLevelGroupRules = [
  { key: "guid", column: "guid", type: "string" },
  { key: "createdAt", column: "createdAt", type: "date" },
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
  @Column(DataType.ENUM(...groupTypes))
  type: typeof groupTypes[number];

  @AllowNull(false)
  @Default("all")
  @Is("ofValidMatchType", (value) => {
    if (value && !matchTypes.includes(value)) {
      throw new Error(`matchType must be one of: ${matchTypes.join(",")}`);
    }
  })
  @Column(DataType.ENUM(...matchTypes))
  matchType: typeof matchTypes[number];

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @AllowNull(true)
  @Column
  locked: string;

  @Column
  calculatedAt: Date;

  @HasMany(() => GroupMember)
  groupMembers: GroupMember[];

  @HasMany(() => GroupRule)
  groupRules: GroupRule[];

  @HasMany(() => Destination)
  destinations: Destination[];

  @BelongsToMany(() => Profile, () => GroupMember)
  profiles: Profile[];

  async profilesCount(options = {}) {
    let queryOptions = { where: { groupGuid: this.guid } };
    if (options) {
      queryOptions = Object.assign(queryOptions, options);
    }

    return this.$count("groupMembers", queryOptions);
  }

  async getRules(transaction?: Transaction) {
    if (this.type === "manual") return [];

    // We won't be deleting the model for GroupRule until the group is really deleted (to validate other models)
    // But we want to be sure that all membership matching will fail
    if (this.state === "deleted") return [];

    const rulesWithKey: GroupRuleWithKey[] = [];
    const rules = await this.$get("groupRules", {
      order: [["position", "asc"]],
      transaction,
    });

    for (const i in rules) {
      const rule: GroupRule = rules[i];
      const property = await rule.$get("property", {
        transaction,
      });
      const type = property
        ? property.type
        : TopLevelGroupRules.find((tlgr) => tlgr.key === rule.profileColumn)
            .type;
      rulesWithKey.push({
        key: property ? property.key : rule.profileColumn,
        topLevel: property ? false : true,
        type: type,
        operation: {
          op: rule.op,
          description: PropertyOpsDictionary[type].find(
            (operation) => operation.op === rule.op
          ).description,
        },
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

    if (Object.keys(rules).length > GROUP_RULE_LIMIT) {
      throw new Error("too many group rules");
    }

    const topLevelRuleKeys = TopLevelGroupRules.map((tlr) => tlr.key);

    const existingRules = await this.getRules();
    const rulesAreEqual = GroupOps.rulesAreEqual(existingRules, rules);
    if (rulesAreEqual) return;

    const transaction = await api.sequelize.transaction({
      lock: Transaction.LOCK.UPDATE,
    });

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
        const property = await Property.findOne({
          where: { key },
        });

        if (!property && !topLevelRuleKeys.includes(key)) {
          throw new Error(`cannot find property ${key}`);
        }

        let type = property?.type;
        if (topLevelRuleKeys.includes(key)) {
          type = TopLevelGroupRules.find((tlgr) => tlgr.key === key).type as
            | "string"
            | "date";
        }

        const dictionaryEntries = PropertyOpsDictionary[type].filter(
          (operation) => operation.op === rule.operation.op
        );
        if (!dictionaryEntries || dictionaryEntries.length === 0) {
          throw new Error(
            `invalid group rule operation "${rule.operation.op}" for property of type ${property.type}`
          );
        }

        await GroupRule.create(
          {
            position: parseInt(i) + 1,
            groupGuid: this.guid,
            propertyGuid: property ? property.guid : null,
            profileColumn: property ? null : key,
            op: rule.operation.op,
            match: rule.match,
            relativeMatchNumber: rule.relativeMatchNumber,
            relativeMatchUnit: rule.relativeMatchUnit,
            relativeMatchDirection: rule.relativeMatchDirection,
          },
          { transaction }
        );
      }

      // test the rules
      const savedRules = await this.getRules(transaction);
      await this.countPotentialMembers(savedRules);

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
      locked: this.locked,
      profilesCount,
      calculatedAt: this.calculatedAt ? this.calculatedAt.getTime() : null,
      nextCalculatedAt: nextCalculatedAt ? nextCalculatedAt.getTime() : null,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  fromConvenientRules(rules: GroupRuleWithKey[]) {
    const convenientRules = PropertyOpsDictionary._convenientRules;

    for (const i in rules) {
      if (convenientRules[rules[i].operation.op]) {
        const convenientRule = convenientRules[rules[i].operation.op];
        if (convenientRule.operation.op)
          rules[i].operation.op = convenientRule.operation.op;
        if (convenientRule.relativeMatchDirection)
          rules[i].relativeMatchDirection =
            convenientRule.relativeMatchDirection;
        if (convenientRule.match) rules[i].match = convenientRule.match;
      } else if (
        rules[i].relativeMatchNumber &&
        rules[i].operation.op.match(/^relative_/)
      ) {
        rules[i].operation.op = rules[i].operation.op.replace(/^relative_/, "");
      }
    }

    return rules;
  }

  toConvenientRules(rules: GroupRuleWithKey[]) {
    const convenientRules = PropertyOpsDictionary._convenientRules;

    for (const i in rules) {
      for (const k in convenientRules) {
        if (
          !rules[i].relativeMatchNumber &&
          convenientRules[k].operation.op === rules[i].operation.op &&
          convenientRules[k].match === rules[i].match
        ) {
          rules[i] = Object.assign(rules[i], { operation: { op: k } });
        }
      }

      if (
        rules[i].relativeMatchNumber &&
        !rules[i].operation.op.match(/^relative_/)
      ) {
        rules[i].operation.op = `relative_${rules[i].operation.op}`;
        rules[i].operation.description = PropertyOpsDictionary[
          rules[i].type
        ].filter(
          (operation) => operation.op === rules[i].operation.op
        )[0].description;
      }
    }

    return rules;
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

  async run(force = false, destinationGuid?: string) {
    return GroupOps.run(this, force, destinationGuid);
  }

  async stopPreviousRuns() {
    return GroupOps.stopPreviousRuns(this);
  }

  async addProfile(profile: Profile) {
    await GroupOps.buildProfileImport(profile.guid, "group", this.guid);

    await GroupMember.create({
      groupGuid: this.guid,
      profileGuid: profile.guid,
    });
  }

  async removeProfile(profile: Profile) {
    const membership = await GroupMember.findOne({
      where: { groupGuid: this.guid, profileGuid: profile.guid },
    });

    if (!membership) throw new Error("profile is not a member of this group");

    await GroupOps.buildProfileImport(profile.guid, "group", this.guid);

    await membership.destroy();
  }

  async runAddGroupMembers(
    run: Run,
    limit = 1000,
    offset = 0,
    highWaterMark: number = null,
    force = false,
    destinationGuid?: string
  ) {
    return GroupOps.runAddGroupMembers(
      this,
      run,
      limit,
      offset,
      highWaterMark,
      force,
      destinationGuid
    );
  }

  async runRemoveGroupMembers(
    run: Run,
    limit = 1000,
    destinationGuid?: string
  ) {
    return GroupOps.runRemoveGroupMembers(this, run, limit, destinationGuid);
  }

  async removePreviousRunGroupMembers(run: Run, limit = 100) {
    return GroupOps.removePreviousRunGroupMembers(this, run, limit);
  }

  async updateProfileMembership(profile: Profile) {
    return GroupOps.updateProfileMembership(this, profile);
  }

  async countPotentialMembers(
    rules?: GroupRuleWithKey[],
    matchType: typeof matchTypes[number] = this.matchType
  ) {
    return GroupOps.countPotentialMembers(this, rules, matchType);
  }

  /**
   * Take the rules for the group and check how many group members there would have been both individually for each single rule, and then by building up the query step-by-step
   */
  async countComponentMembersFromRules(rules?: GroupRuleWithKey[]) {
    return GroupOps.countComponentMembersFromRules(this, rules);
  }

  /**
   * Build the where-clause for the query to determine Group membership
   */
  async _buildGroupMemberQueryParts(
    rules?: GroupRuleWithKey[],
    matchType: typeof matchTypes[number] = this.matchType
  ) {
    if (this.type !== "calculated") {
      throw new Error("only calculated groups can be calculated");
    }

    if (!rules) rules = await this.getRules();

    const include = [];
    const wheres = [];
    const localNumbers = [].concat(numbers);

    for (const i in rules) {
      const rule = rules[i];
      const number = localNumbers.pop();
      const alias = `ProfileProperties_${number}`;
      const {
        key,
        operation,
        type,
        topLevel,
        relativeMatchNumber,
        relativeMatchDirection,
        relativeMatchUnit,
      } = rule;
      let { match } = rule;
      const localWhereGroup = {};
      let rawValueMatch = {};

      const property = await Property.findOne({
        where: { key },
      });
      if (!property && !topLevel) {
        throw new Error(`cannot find type for Property ${key}`);
      }

      if (match !== null && match !== undefined) {
        // special cases for dialects
        if (config.sequelize.dialect === "sqlite") {
          if (property?.type === "boolean") {
            if (match === "1") match = "true";
            if (match === "0") match = "false";
          }
        }

        // rewrite null matches
        rawValueMatch[Op[operation.op]] =
          match.toString().toLocaleLowerCase() === "null" ? null : match;

        // in the case of Array property negation, we also want to consider those profiles with the property never set
        if (
          !topLevel &&
          property.isArray &&
          ["ne", "notLike", "notILike"].includes(operation.op)
        ) {
          rawValueMatch = { [Op.or]: [rawValueMatch, { [Op.eq]: null }] };
        }
      } else if (relativeMatchNumber && !match) {
        const now = Moment();
        const timestamp = now[relativeMatchDirection](
          relativeMatchNumber,
          relativeMatchUnit
        ) // i.e.: Moment().add(3, 'days')
          .toDate()
          .getTime();
        rawValueMatch[Op[operation.op]] = timestamp;
      } else {
        throw new Error("either match or relativeMatch is required");
      }

      if (!topLevel) {
        // when we are considering a profile property
        localWhereGroup[Op.and] = [
          api.sequelize.where(
            api.sequelize.cast(
              api.sequelize.col(`${alias}.rawValue`),
              propertyJSToSQLType(property.type)
            ),
            rawValueMatch
          ),
        ];
      } else {
        // when we are considering a column on the profiles table
        const topLevelWhere = {};

        if (rawValueMatch[Op[operation.op]] && type === "date") {
          rawValueMatch[Op[operation.op]] = new Date(
            parseInt(rawValueMatch[Op[operation.op]])
          ).getTime();
        }

        topLevelWhere[key] = rawValueMatch;
        localWhereGroup[Op.and] = [topLevelWhere];
      }

      // also upper/lower bound against 'now' in the relative date case (ie: if we want 'in the past month', that means a) greater than one month ago and B) less than now)
      // this is not needed in the topLevel case as the timestamps cannot be in the future
      if (relativeMatchNumber && !match && !topLevel) {
        const todayBoundWhereGroup = {};
        const todayBoundMatch = {};
        todayBoundMatch[
          Op[operation.op === "gt" ? "lte" : "gte"]
        ] = new Date().getTime();
        todayBoundWhereGroup[Op.and] = api.sequelize.where(
          api.sequelize.cast(
            api.sequelize.col(`${alias}.rawValue`),
            propertyJSToSQLType(property.type)
          ),
          todayBoundMatch
        );

        localWhereGroup[Op.and].push(todayBoundWhereGroup);
      }

      // in the case of Array property negation, we also need to do a sub-query to subtract the profiles which would match the affirmative match for this match
      if (
        !topLevel &&
        match !== null &&
        match !== undefined &&
        property.isArray &&
        ["ne", "notLike", "notILike"].includes(operation.op)
      ) {
        let reverseMatchWhere = {
          [Op.and]: [{ propertyGuid: property.guid }],
        };
        const castedValue = api.sequelize.cast(
          api.sequelize.col(`rawValue`),
          propertyJSToSQLType(property.type)
        );
        const nullCheckedMatch =
          match.toString().toLocaleLowerCase() === "null" ? null : match;
        switch (operation.op) {
          case "ne":
            reverseMatchWhere[Op.and].push(
              api.sequelize.where(castedValue, nullCheckedMatch)
            );
            break;
          case "notLike":
            reverseMatchWhere[Op.and].push(
              api.sequelize.where(castedValue, {
                [Op.like]: nullCheckedMatch,
              })
            );
            break;
          case "notILike":
            reverseMatchWhere[Op.and].push(
              api.sequelize.where(castedValue, {
                [Op.iLike]: nullCheckedMatch,
              })
            );
            break;
        }
        const whereClause: string = api.sequelize.queryInterface.QueryGenerator.getWhereConditions(
          reverseMatchWhere
        );

        const affirmativeArrayMatch = api.sequelize.literal(
          `"ProfileMultipleAssociationShim"."guid" NOT IN (SELECT "profileGuid" FROM "profileProperties" WHERE ${whereClause})`
        );
        localWhereGroup[Op.and].push(affirmativeArrayMatch);
      }

      wheres.push(localWhereGroup);

      if (!topLevel) {
        include.push({
          // $_$ wrapping is an option with eager loading
          // https://sequelize.org/master/manual/models-usage.html#eager-loading
          where: {
            [`$${alias}.propertyGuid$`]: property.guid,
          },
          attributes: [],
          model: ProfileProperty,
          as: alias,
        });
      }
    }

    if (rules.length === 0) wheres.push({ guid: "" });

    const joinType = matchType === "all" ? Op.and : Op.or;
    const whereContainer = {};
    whereContainer[joinType] = wheres;

    return { where: whereContainer, include };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async ensureUniqueName(instance: Group, { transaction }) {
    const count = await Group.count({
      where: {
        guid: { [Op.ne]: instance.guid },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
      transaction,
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async updateState(instance: Group) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance, ["state", "calculatedAt"]);
  }

  @BeforeDestroy
  static async checkGroupMembers(instance: Group, { transaction }) {
    const count = await instance.$count("groupMembers", { transaction });
    if (count > 0) {
      throw new Error(`this group still has ${count} members, cannot delete`);
    }
  }

  @BeforeDestroy
  static async checkDestinationTracking(
    instance: Group,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const count = await instance.$count("destinations", { transaction });
    if (count > 0) {
      throw new Error(
        `this group still in use by ${count} destinations, cannot delete`
      );
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async destroyDestinationGroupTracking(
    instance: Group,
    { transaction }
  ) {
    const destinations = await instance.$get("destinations", {
      scope: null,
      transaction,
    });

    for (const i in destinations) {
      await destinations[i].update({ groupGuid: null }, { transaction });
    }
  }

  @AfterDestroy
  static async destroyDestinationGroupMembership(
    instance: Group,
    { transaction }
  ) {
    const destinationGroupMemberships = await DestinationGroupMembership.findAll(
      { where: { groupGuid: instance.guid }, transaction }
    );

    for (const i in destinationGroupMemberships) {
      const destination = await destinationGroupMemberships[
        i
      ].$get("destination", { transaction });
      await destinationGroupMemberships[i].destroy({ transaction });
      await destination.exportGroupMembers(false);
    }
  }

  @AfterDestroy
  static async destroyGroupRules(instance: Group, { transaction }) {
    return GroupRule.destroy({
      where: {
        groupGuid: instance.guid,
      },
      transaction,
    });
  }

  @AfterDestroy
  static async stopRuns(instance: Group, { transaction }) {
    const runs = await Run.findAll({
      where: { creatorGuid: instance.guid, state: "running" },
      transaction,
    });

    for (const i in runs) {
      await runs[i].update({ state: "stopped" }, { transaction });
    }
  }
}

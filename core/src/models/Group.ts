import { api, config } from "actionhero";
import Moment from "moment";
import Sequelize, { Op, WhereAttributeHash } from "sequelize";
import {
  AfterDestroy,
  AllowNull,
  BeforeCreate,
  BeforeDestroy,
  BeforeSave,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  DefaultScope,
  ForeignKey,
  HasMany,
  Is,
  Length,
  Scopes,
  Table,
} from "sequelize-typescript";
import { GroupConfigurationObject } from "../classes/codeConfig";
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";
import { ConfigWriter } from "../modules/configWriter";
import { LockableHelper } from "../modules/lockableHelper";
import { GroupOps } from "../modules/ops/group";
import { PropertyOpsDictionary } from "../modules/ruleOpsDictionary";
import { TopLevelGroupRules } from "../modules/topLevelGroupRules";
import { StateMachine } from "./../modules/stateMachine";
import { Destination } from "./Destination";
import { DestinationGroupMembership } from "./DestinationGroupMembership";
import { GroupMember } from "./GroupMember";
import { GrouparooRecord } from "./GrouparooRecord";
import { GroupRule } from "./GroupRule";
import { RecordProperty } from "./RecordProperty";
import { Property, propertyJSToSQLType } from "./Property";
import { Run } from "./Run";
import { Setting } from "./Setting";
import { GrouparooModel } from "./GrouparooModel";
import { Source } from "./Source";
import { RunOps } from "../modules/ops/runs";
import { ModelGuard } from "../modules/modelGuard";

export const GROUP_RULE_LIMIT = 10;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface GroupRuleWithKey {
  key?: string;
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
  { from: "deleted", to: "ready", checks: [] },
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
  idPrefix() {
    return "grp";
  }

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

  @Column
  locked: string;

  @Column
  calculatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => GrouparooModel)
  @Column
  modelId: string;

  @HasMany(() => GroupMember)
  groupMembers: GroupMember[];

  @HasMany(() => GroupRule)
  groupRules: GroupRule[];

  @HasMany(() => Destination)
  destinations: Destination[];

  @BelongsToMany(() => GrouparooRecord, () => GroupMember)
  records: GrouparooRecord[];

  @BelongsTo(() => GrouparooModel)
  model: GrouparooModel;

  async recordsCount(options = {}) {
    let queryOptions = { where: { groupId: this.id } };
    if (options) {
      queryOptions = Object.assign(queryOptions, options);
    }

    return this.$count("groupMembers", queryOptions);
  }

  async getRules() {
    if (this.type === "manual") return [];

    // We won't be deleting the model for GroupRule until the group is really deleted (to validate other models)
    // But we want to be sure that all membership matching will fail
    if (this.state === "deleted") return [];

    const rulesWithKey: GroupRuleWithKey[] = [];
    const rules = this.groupRules
      ? this.groupRules.sort((a, b) => a.position - b.position)
      : await this.$get("groupRules", {
          order: [["position", "asc"]],
        });

    for (const i in rules) {
      const rule: GroupRule = rules[i];
      const property = await Property.findOneWithCache(
        rule.propertyId,
        this.modelId
      );
      const type = property
        ? property.type
        : TopLevelGroupRules.find((tlgr) => tlgr.key === rule.recordColumn)
            .type;
      rulesWithKey.push({
        key: property ? property.key : rule.recordColumn,
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

    await GroupRule.destroy({
      where: { groupId: this.id },
    });

    for (const i in rules) {
      const rule = rules[i];
      const key = rule.key;
      const property = await Property.findOne({
        where: { key },
        include: [Source],
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

      if (property && this.modelId !== property.source.modelId) {
        throw new Error(
          `${property.key} does not belong to the ${this.modelId} model`
        );
      }

      await GroupRule.create({
        position: parseInt(i) + 1,
        groupId: this.id,
        propertyId: property ? property.id : null,
        recordColumn: property ? null : key,
        op: rule.operation.op,
        match: rule.match,
        relativeMatchNumber: rule.relativeMatchNumber,
        relativeMatchUnit: rule.relativeMatchUnit,
        relativeMatchDirection: rule.relativeMatchDirection,
      });
    }

    // test the rules
    const savedRules = await this.getRules();
    await this.countPotentialMembers(savedRules, null);

    if (this.state !== "deleted" && rules.length > 0) {
      this.state =
        process.env.GROUPAROO_RUN_MODE === "cli:config"
          ? "ready"
          : "initializing";
      this.changed("updatedAt", true);
      await this.save();
      await this.run();
    }
  }

  async apiData() {
    const model = await this.$get("model");
    const recordsCount = await this.recordsCount(null);
    const rules = await this.getRules();
    const nextCalculatedAt = await this.nextCalculatedAt();

    return {
      id: this.id,
      name: this.name,
      type: this.type,
      modelId: this.modelId,
      modelName: model.name,
      rules,
      matchType: this.matchType,
      state: this.state,
      locked: this.locked,
      recordsCount,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      nextCalculatedAt: APIData.formatDate(nextCalculatedAt),
      calculatedAt: APIData.formatDate(this.calculatedAt),
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
          rules[i] = Object.assign(rules[i], {
            operation: { op: k },
            match: undefined,
          });
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
        delete rules[i].relativeMatchDirection;
      }
    }

    return rules;
  }

  async nextCalculatedAt() {
    if (this.type === "manual") return null;

    let hasRelativeRule = false;
    const rules = await this.getRules();
    for (const rule of rules) {
      if (rule.relativeMatchDirection) hasRelativeRule = true;
    }
    if (!hasRelativeRule) return null;

    if (!this.calculatedAt) return Moment().toDate();
    const setting = await Setting.findOne({
      where: { pluginName: "core", key: "groups-calculation-delay-minutes" },
    });
    const delayMinutes = parseInt(setting.value);
    return Moment(this.calculatedAt).add(delayMinutes, "minutes").toDate();
  }

  async run(destinationId?: string) {
    return RunOps.run(this, destinationId);
  }

  async stopPreviousRuns() {
    return RunOps.stopPreviousRuns(this);
  }

  async addRecord(record: GrouparooRecord) {
    await GroupOps.updateRecords([record.id], "group", this.id);

    await GroupMember.create({
      groupId: this.id,
      recordId: record.id,
    });
  }

  async removeRecord(record: GrouparooRecord) {
    const membership = await GroupMember.findOne({
      where: { groupId: this.id, recordId: record.id },
    });

    if (!membership) throw new Error("record is not a member of this group");

    await GroupOps.updateRecords([record.id], "group", this.id);

    await membership.destroy();
  }

  async runAddGroupMembers(
    run: Run,
    limit = 1000,
    offset = 0,
    highWaterMark: number = null,
    destinationId?: string
  ) {
    return GroupOps.runAddGroupMembers(
      this,
      run,
      limit,
      offset,
      highWaterMark,
      destinationId
    );
  }

  async runRemoveGroupMembers(run: Run, limit = 1000, destinationId?: string) {
    return GroupOps.runRemoveGroupMembers(this, run, limit, destinationId);
  }

  async removePreviousRunGroupMembers(run: Run, limit = 100) {
    return GroupOps.removePreviousRunGroupMembers(this, run, limit);
  }

  async updateRecordsMembership(records: GrouparooRecord[]) {
    return GroupOps.updateRecordsMembership(this, records);
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
    matchType: typeof matchTypes[number] = this.matchType,
    recordState?: string
  ) {
    if (this.type !== "calculated") {
      throw new Error("only calculated groups can be calculated");
    }

    if (!rules) rules = await this.getRules();

    const include = [];
    const wheres: WhereAttributeHash[] = [];
    const localNumbers = [].concat(numbers);

    if (recordState) wheres.push({ state: recordState });

    for (const i in rules) {
      const rule = rules[i];
      const number = localNumbers.pop();
      const alias = `RecordProperties_${number}`;
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

        // in the case of Array property negation, we also want to consider those records with the property never set
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
        // when we are considering a record property
        localWhereGroup[Op.and] = [
          Sequelize.where(
            Sequelize.cast(
              Sequelize.col(`${alias}.rawValue`),
              propertyJSToSQLType(property.type)
            ),
            rawValueMatch
          ),
        ];
      } else {
        // when we are considering a column on the records table
        const topLevelGroupRule = TopLevelGroupRules.find(
          (tlgr) => tlgr.key === key
        );
        if (!topLevelGroupRule)
          throw new Error(`cannot find TopLevelGroupRule where for key ${key}`);

        if (rawValueMatch[Op[operation.op]] && type === "date") {
          rawValueMatch[Op[operation.op]] = new Date(
            parseInt(rawValueMatch[Op[operation.op]])
          ).getTime();
        }

        const topLevelWhere = {
          [topLevelGroupRule.column]: rawValueMatch,
          modelId: this.modelId,
        };
        localWhereGroup[Op.and] = [topLevelWhere];
      }

      // also upper/lower bound against 'now' in the relative date case (ie: if we want 'in the past month', that means a) greater than one month ago and B) less than now)
      // this is not needed in the topLevel case as the timestamps cannot be in the future
      if (relativeMatchNumber && !match && !topLevel) {
        const todayBoundWhereGroup = {};
        const todayBoundMatch = {};
        todayBoundMatch[Op[operation.op === "gt" ? "lte" : "gte"]] =
          new Date().getTime();
        todayBoundWhereGroup[Op.and] = Sequelize.where(
          Sequelize.cast(
            Sequelize.col(`${alias}.rawValue`),
            propertyJSToSQLType(property.type)
          ),
          todayBoundMatch
        );

        localWhereGroup[Op.and].push(todayBoundWhereGroup);
      }

      // in the case of Array property negation, we also need to do a sub-query to subtract the records which would match the affirmative match for this match
      if (
        !topLevel &&
        match !== null &&
        match !== undefined &&
        property.isArray &&
        ["ne", "notLike", "notILike"].includes(operation.op)
      ) {
        let reverseMatchWhere: {
          [Op.and]: (Sequelize.Utils.Where | WhereAttributeHash)[];
        } = {
          [Op.and]: [{ propertyId: property.id }],
        };
        const castedValue = Sequelize.cast(
          Sequelize.col(`rawValue`),
          propertyJSToSQLType(property.type)
        );
        const nullCheckedMatch =
          match.toString().toLocaleLowerCase() === "null" ? null : match;
        switch (operation.op) {
          case "ne":
            reverseMatchWhere[Op.and].push(
              Sequelize.where(castedValue, nullCheckedMatch?.toString())
            );
            break;
          case "notLike":
            reverseMatchWhere[Op.and].push(
              Sequelize.where(castedValue, {
                [Op.like]: nullCheckedMatch as string,
              })
            );
            break;
          case "notILike":
            reverseMatchWhere[Op.and].push(
              Sequelize.where(castedValue, {
                [Op.iLike]: nullCheckedMatch as string,
              })
            );
            break;
        }
        const whereClause: string =
          //@ts-ignore
          api.sequelize.queryInterface.queryGenerator.getWhereConditions(
            reverseMatchWhere
          );

        const affirmativeArrayMatch = Sequelize.literal(
          `"RecordMultipleAssociationShim"."id" NOT IN (SELECT "recordId" FROM "recordProperties" WHERE ${whereClause})`
        );
        localWhereGroup[Op.and].push(affirmativeArrayMatch);
      }

      wheres.push(localWhereGroup);

      if (!topLevel) {
        include.push({
          // $_$ wrapping is an option with eager loading
          // https://sequelize.org/master/manual/models-usage.html#eager-loading
          where: {
            [`$${alias}.propertyId$`]: property.id,
          },
          attributes: [],
          model: RecordProperty,
          as: alias,
        });
      }
    }

    if (rules.length === 0) wheres.push({ id: "" });

    const joinType = matchType === "all" ? Op.and : Op.or;
    const whereContainer = {};
    whereContainer[joinType] = wheres;

    return { where: whereContainer, include };
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  async getConfigObject(): Promise<GroupConfigurationObject> {
    const { name, type } = this;
    this.model = await this.$get("model");
    const modelId = this.model?.getConfigId();

    if (!name || !modelId) {
      return;
    }

    let rules = [];

    const groupRules = await this.getRules();
    const convenientRules = this.toConvenientRules(groupRules);

    for (const rule of convenientRules) {
      const property = await Property.findOneWithCache(
        rule.key,
        modelId,
        "key"
      );
      rules.push({
        propertyId: rule.topLevel ? rule.key : property.getConfigId(),
        operation: { op: rule.operation.op },
        match: rule.match,
        relativeMatchNumber: rule.relativeMatchNumber,
        relativeMatchUnit: rule.relativeMatchUnit,
        relativeMatchDirection: rule.relativeMatchDirection,
      });
    }

    let configObject: {
      class: string;
      id: string;
      modelId: string;
      name: string;
      type: string;
      rules?: any[];
    } = {
      class: "Group",
      id: this.getConfigId(),
      modelId,
      name,
      type,
    };

    if (type === "calculated") {
      configObject.rules = rules;
    }

    return configObject;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  @BeforeSave
  static async ensureModel(instance: Group) {
    return ModelGuard.check(instance);
  }

  @BeforeSave
  static async ensureUniqueName(instance: Group) {
    const count = await Group.count({
      where: {
        id: { [Op.ne]: instance.id },
        name: instance.name,
        state: { [Op.notIn]: ["draft", "deleted"] },
      },
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
  static async checkGroupMembers(instance: Group) {
    const count = await instance.$count("groupMembers");
    if (count > 0) {
      throw new Error(`this group still has ${count} members, cannot delete`);
    }
  }

  @BeforeDestroy
  static async ensureNotInUse(instance: Group) {
    const count = await instance.$count("destinations", { scope: "notDraft" });

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
  static async destroyDestinationGroupTracking(instance: Group) {
    const destinations = await instance.$get("destinations", {
      scope: null,
    });

    for (const i in destinations) {
      await destinations[i].update({ groupId: null });
    }
  }

  @AfterDestroy
  static async destroyDestinationGroupMembership(instance: Group) {
    const destinationGroupMemberships =
      await DestinationGroupMembership.findAll({
        where: { groupId: instance.id },
      });

    for (const i in destinationGroupMemberships) {
      const destination = await destinationGroupMemberships[i].$get(
        "destination"
      );
      await destinationGroupMemberships[i].destroy();

      if (destination) await destination.exportMembers();
    }
  }

  @AfterDestroy
  static async destroyGroupRules(instance: Group) {
    return GroupRule.destroy({
      where: {
        groupId: instance.id,
      },
    });
  }

  @AfterDestroy
  static async stopRuns(instance: Group) {
    const runs = await Run.findAll({
      where: { creatorId: instance.id, state: "running" },
    });

    for (const i in runs) {
      await runs[i].update({ state: "stopped" });
    }
  }
}

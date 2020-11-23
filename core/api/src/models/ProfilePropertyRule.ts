import {
  Table,
  Column,
  AllowNull,
  DataType,
  Length,
  Default,
  BeforeSave,
  BeforeDestroy,
  AfterDestroy,
  ForeignKey,
  BelongsTo,
  HasMany,
  Is,
  DefaultScope,
  BeforeUpdate,
  BeforeCreate,
} from "sequelize-typescript";
import { Op, Transaction } from "sequelize";
import { env, api, config } from "actionhero";
import { plugin } from "../modules/plugin";
import { LoggedModel } from "../classes/loggedModel";
import { Profile } from "./Profile";
import { ProfileProperty } from "./ProfileProperty";
import { App, SimpleAppOptions } from "./App";
import { Source, SimpleSourceOptions, SourceMapping } from "./Source";
import { Option } from "./Option";
import { Group } from "./Group";
import { Run } from "./Run";
import { GroupRule } from "./GroupRule";
import { ProfilePropertyRuleFilter } from "./ProfilePropertyRuleFilter";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { Mapping } from "./Mapping";
import { ProfilePropertyRuleOps } from "../modules/ops/profilePropertyRule";
import { LockableHelper } from "../modules/lockableHelper";

export function profilePropertyRuleJSToSQLType(jsType: string) {
  const map = {
    boolean: config.sequelize.dialect === "sqlite" ? "text" : "boolean", // there is no boolean type in SQLite
    date: "bigint", // we store things via timestamps in the DB
    email: "text",
    float: "float",
    integer: "bigint",
    phoneNumber: "text",
    string: "text",
    url: "text",
  };

  return map[jsType];
}

export const ProfilePropertyRuleTypes = [
  "boolean",
  "date",
  "email",
  "float",
  "integer",
  "phoneNumber",
  "string",
  "url",
] as const;

const CACHE_TTL = env === "test" ? -1 : 1000 * 30;

export interface SimpleProfilePropertyRuleOptions
  extends OptionHelper.SimpleOptions {}

const STATES = ["draft", "ready"] as const;
const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: ["validateOptions"] },
];

/**
 * Metadata and methods to return the options a Profile Property Rule for this connection/app.
 * Options is a method which will poll the source for available options to select (ie: names of tables or columns)
 */
export interface PluginConnectionProfilePropertyRuleOption {
  key: string;
  displayName?: string;
  required: boolean;
  description: string;
  type: string;
  options: (argument: {
    connection: any;
    app: App;
    appGuid: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceGuid: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    profilePropertyRule: ProfilePropertyRule;
    profilePropertyRuleGuid: string;
  }) => Promise<
    Array<{
      key: string;
      description?: string;
      examples?: Array<any>;
    }>
  >;
}

export interface ProfilePropertyRuleFiltersWithKey {
  key: string;
  op: string;
  match?: string | number | boolean;
  relativeMatchNumber?: number;
  relativeMatchUnit?: string;
  relativeMatchDirection?: string;
}

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "profilePropertyRules", paranoid: false })
export class ProfilePropertyRule extends LoggedModel<ProfilePropertyRule> {
  guidPrefix() {
    return "rul";
  }

  @AllowNull(true)
  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  key: string;

  @AllowNull(false)
  @Is("properType", (value) => {
    if (!ProfilePropertyRuleTypes.includes(value)) {
      throw new Error(`${value} is not an allowed type`);
    }
  })
  @Column(DataType.ENUM(...ProfilePropertyRuleTypes))
  type: typeof ProfilePropertyRuleTypes[number];

  @AllowNull(false)
  @Default(false)
  @Column
  unique: boolean;

  @AllowNull(false)
  @ForeignKey(() => Source)
  @Column
  sourceGuid: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @AllowNull(false)
  @Default(false)
  @Column
  locked: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  identifying: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  directlyMapped: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  isArray: boolean;

  @BelongsTo(() => Source)
  source: Source;

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => ProfilePropertyRuleFilter)
  profilePropertyRuleFilters: ProfilePropertyRuleFilter[];

  @HasMany(() => ProfileProperty)
  ProfileProperties: ProfileProperty[];

  async parameterizedQueryFromProfile(q: string, profile: Profile) {
    return plugin.replaceTemplateProfileVariables(q, profile);
  }

  async test(options?: SimpleProfilePropertyRuleOptions) {
    const profile = await Profile.findOne({ order: [["guid", "asc"]] });
    if (profile) {
      const source = await Source.findByGuid(this.sourceGuid);
      return source.importProfileProperty(profile, this, options);
    }
  }

  async getOptions() {
    const options = await OptionHelper.getOptions(this);
    for (const i in options) {
      options[
        i
      ] = await plugin.replaceTemplateProfilePropertyGuidsWithProfilePropertyKeys(
        options[i]
      );
    }

    return options;
  }

  async setOptions(options: SimpleProfilePropertyRuleOptions, test = true) {
    if (test) await this.test(options);

    for (const i in options) {
      options[
        i
      ] = await plugin.replaceTemplateProfilePropertyKeysWithProfilePropertyGuid(
        options[i]
      );
    }

    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions(hasChanges: boolean) {
    if (hasChanges) await ProfilePropertyRuleOps.enqueueRuns(this);
  }

  async validateOptions(
    options?: SimpleProfilePropertyRuleOptions,
    allowEmpty = false,
    useCache = false
  ) {
    // this method is called on every profile property rule, for every profile, before an import
    // caching that we are already valid can speed this up
    const cacheKey = `cache:profilePropertyRule:${this.guid}`;
    const client = api.redis.clients.client;
    if (useCache) {
      const previouslyValidated = await client.get(cacheKey);
      if (previouslyValidated === "true") return;
    }

    if (!options) {
      options = await this.getOptions();
    }

    const response = await OptionHelper.validateOptions(
      this,
      options,
      allowEmpty
    );

    if (CACHE_TTL > 0) {
      await client.set(cacheKey, "true");
      await client.expire(cacheKey, CACHE_TTL / 1000);
    }

    return response;
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async getFilters() {
    const filtersWithCol: ProfilePropertyRuleFiltersWithKey[] = [];
    const filters = await this.$get("profilePropertyRuleFilters", {
      order: [["position", "asc"]],
    });

    for (const i in filters) {
      const filter = filters[i];
      filtersWithCol.push({
        key: filter.key,
        op: filter.op,
        match: filter.match,
        relativeMatchNumber: filter.relativeMatchNumber,
        relativeMatchUnit: filter.relativeMatchUnit,
        relativeMatchDirection: filter.relativeMatchDirection,
      });
    }

    return filtersWithCol;
  }

  async setFilters(filters: ProfilePropertyRuleFiltersWithKey[]) {
    await this.validateFilters(filters);

    await ProfilePropertyRuleFilter.destroy({
      where: {
        profilePropertyRuleGuid: this.guid,
      },
    });

    for (const i in filters) {
      const filter = filters[i];

      await ProfilePropertyRuleFilter.create({
        position: parseInt(i) + 1,
        profilePropertyRuleGuid: this.guid,
        key: filter.key,
        op: filter.op,
        match: filter.match,
        relativeMatchNumber: filter.relativeMatchNumber,
        relativeMatchUnit: filter.relativeMatchUnit,
        relativeMatchDirection: filter.relativeMatchDirection,
      });
    }

    return ProfilePropertyRuleOps.enqueueRuns(this);
  }

  async pluginOptions() {
    return ProfilePropertyRuleOps.pluginOptions(this);
  }

  async pluginFilterOptions() {
    return ProfilePropertyRuleOps.pluginFilterOptions(this);
  }

  async validateFilters(filters: ProfilePropertyRuleFiltersWithKey[]) {
    if (!filters) {
      filters = await this.getFilters();
    }

    const pluginFilterOptions = await this.pluginFilterOptions();

    for (const i in filters) {
      const filter = filters[i];
      const relevantOption = pluginFilterOptions.filter(
        (pfo) => pfo.key === filter.key
      )[0];
      if (!relevantOption) {
        throw new Error(`${filter.key} is not filterable`);
      }
      if (!relevantOption.ops.includes(filter.op)) {
        throw new Error(`"${filter.op}" cannot be applied to ${filter.key}`);
      }
    }
  }

  async apiData() {
    const options = await this.getOptions();
    const filters = await this.getFilters();

    return {
      guid: this.guid,
      sourceGuid: this.sourceGuid,
      key: this.key,
      type: this.type,
      state: this.state,
      unique: this.unique,
      identifying: this.identifying,
      directlyMapped: this.directlyMapped,
      locked: this.locked,
      options,
      filters,
      isArray: this.isArray,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeUpdate
  @BeforeCreate
  static async determineDirectlyMapped(instance: ProfilePropertyRule) {
    if (instance.state === "draft") return;

    const source = await instance.$get("source", { scope: null });
    const mapping = await source.getMapping();
    const mappingValues = Object.values(mapping);
    instance.directlyMapped = mappingValues.includes(instance.key);
  }

  @BeforeSave
  static async ensureUniqueKey(instance: ProfilePropertyRule) {
    const count = await ProfilePropertyRule.count({
      where: {
        guid: { [Op.ne]: instance.guid },
        key: instance.key,
        state: { [Op.ne]: "draft" },
      },
    });
    if (count > 0) {
      throw new Error(`key "${instance.key}" is already in use`);
    }
  }

  @BeforeSave
  static async ensureOptions(instance: ProfilePropertyRule) {
    const source = await Source.findByGuid(instance.sourceGuid);
    await source.validateOptions();
  }

  @BeforeSave
  static async updateState(instance: ProfilePropertyRule) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async ensureNonArrayAndUnique(instance: ProfilePropertyRule) {
    if (instance.isArray && instance.unique) {
      throw new Error("unique profile properties cannot be arrays");
    }
  }

  @BeforeSave
  static async ensureUniqueProperties(instance: ProfilePropertyRule) {
    if (instance.changed("unique") && instance.unique) {
      const valueCounts = await ProfileProperty.findAll({
        attributes: [
          "rawValue",
          [api.sequelize.fn("COUNT", api.sequelize.col("rawValue")), "count"],
        ],
        group: ["rawValue"],
        where: { profilePropertyRuleGuid: instance.guid },
        having: api.sequelize.where(
          api.sequelize.fn("COUNT", api.sequelize.col("rawValue")),
          { [Op.gt]: 1 }
        ),
        limit: 1,
        raw: true,
      });

      if (valueCounts.length > 0) {
        throw new Error(
          `cannot make this Profile Property Rule unique as there are ${valueCounts[0]["count"]} records with the value \'${valueCounts[0]["rawValue"]}\'`
        );
      }
    }
  }

  @BeforeSave
  static async ensureOneIdentifyingProperty(instance: ProfilePropertyRule) {
    if (instance.identifying) {
      const otherIdentifyingRulesCount = await ProfilePropertyRule.count({
        where: { identifying: true, guid: { [Op.ne]: instance.guid } },
      });

      if (otherIdentifyingRulesCount > 0) {
        throw new Error("only one profile property rule can be identifying");
      }
    }
  }

  @BeforeSave
  static async ensureSourceReady(instance: ProfilePropertyRule) {
    const source = await Source.findByGuid(instance.sourceGuid);
    if (source.state !== "ready") throw new Error("source is not ready");
  }

  @BeforeSave
  static async validateQuery(instance: ProfilePropertyRule) {
    await instance.test();
  }

  @BeforeSave
  static async validateReservedKeys(instance: ProfilePropertyRule) {
    const reservedKeys = ["guid", "createdAt", "updatedAt"];
    if (reservedKeys.includes(instance.key)) {
      throw new Error(
        `${instance.key} is a reserved key and cannot be used as a profile property rule`
      );
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance, ["state", "directlyMapped"]);
  }

  @BeforeDestroy
  static async ensureNotInUse(instance: ProfilePropertyRule) {
    const groupRule = await GroupRule.findOne({
      where: { profilePropertyRuleGuid: instance.guid },
    });

    if (groupRule) {
      const group = await Group.findByGuid(groupRule.groupGuid);
      throw new Error(
        `cannot delete profile property rule "${instance.key}", group ${group.name} (${group.guid}) is based on it`
      );
    }

    const mapping = await Mapping.findOne({
      where: { profilePropertyRuleGuid: instance.guid },
    });
    if (mapping) {
      throw new Error(
        `cannot delete profile property rule "${instance.key}" as ${mapping.ownerGuid} is using it in a mapping`
      );
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async destroyOptions(
    instance: ProfilePropertyRule,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    await Option.destroy({
      where: { ownerGuid: instance.guid },
      transaction,
    });
  }

  @AfterDestroy
  static async stopRuns(
    instance: ProfilePropertyRule,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const runs = await Run.findAll({
      where: { creatorGuid: instance.guid, state: "running" },
      transaction,
    });

    for (const i in runs) {
      await runs[i].update({ state: "stopped" }, { transaction });
    }
  }

  @AfterDestroy
  static async destroyProfilePropertyRuleFilters(
    instance: ProfilePropertyRule,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    await ProfilePropertyRuleFilter.destroy({
      where: { profilePropertyRuleGuid: instance.guid },
      transaction,
    });
  }

  @AfterDestroy
  static async destroyProfileProperties(
    instance: ProfilePropertyRule,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    await ProfileProperty.destroy({
      where: { profilePropertyRuleGuid: instance.guid },
      transaction,
    });
  }
}

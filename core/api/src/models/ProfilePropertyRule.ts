import {
  Table,
  Column,
  AllowNull,
  DataType,
  Length,
  Default,
  BeforeCreate,
  BeforeSave,
  BeforeDestroy,
  AfterSave,
  AfterCreate,
  AfterDestroy,
  ForeignKey,
  BelongsTo,
  HasMany,
  DefaultScope,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { env, api, task } from "actionhero";
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
import { internalRun } from "../modules/internalRun";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { Mapping } from "./Mapping";

export function profilePropertyRuleJSToSQLType(jsType: string) {
  const map = {
    integer: "bigint",
    float: "float",
    string: "text",
    email: "text",
    boolean: "boolean",
    date: "bigint", // we store things via timestamps in the DB
  };

  return map[jsType];
}

const _boolean_ops = ["exists", "notExists", "eq", "ne"];
const _number_ops = [
  "exists",
  "notExists",
  "eq",
  "ne",
  "gt",
  "gte",
  "lt",
  "lte",
];
const _string_ops = [
  "exists",
  "notExists",
  "eq",
  "ne",
  "like",
  "iLike",
  "notLike",
  "notILike",
  "startsWith",
  "endsWith",
  "substring",
];
export const PROFILE_PROPERTY_RULE_OPS = {
  string: _string_ops,
  email: _string_ops,
  integer: _number_ops,
  float: _number_ops,
  boolean: _boolean_ops,
  date: _number_ops,
  _dictionary: {
    exists: "any value exists",
    notExists: "no value exists",
    eq: "equals",
    ne: "not equals",
    gt: "greater than",
    gte: "greater than or equals",
    lt: "less than",
    lte: "less than or equals",
    like: "is like",
    iLike: "is like, case insensitive",
    notLike: "is not like",
    notILike: "is not like, case insensitive",
    startsWith: "starts with",
    endsWith: "ends with",
    substring: "has the string",
  },
  _convenientRules: {
    exists: { op: "ne", match: "null" },
    notExists: { op: "eq", match: "null" },
  },
};

const CACHE_TTL = env === "test" ? -1 : 1000 * 30;

interface ProfilePropertyRulesCache {
  createdAt: number;
  data: {
    [key: string]: {
      guid: string;
      key: string;
      type: string;
      unique: boolean;
      sourceGuid: string;
      appGuid: string;
    };
  };
}

export interface SimpleProfilePropertyRuleOptions
  extends OptionHelper.SimpleOptions {}

const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: ["validateOptions"] },
];

/**
 * Metadata and methods to return the options a Profile Property Rule for this connection/app.
 * Options is a method which will poll the source for available options to select (ie: names of tables or columns)
 */
export interface PluginConnectionProfilePropertyRuleOption {
  key: string;
  required: boolean;
  description: string;
  type: string;
  options: (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    profilePropertyRule: ProfilePropertyRule;
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

let CACHE: ProfilePropertyRulesCache = {
  createdAt: 0,
  data: {},
};

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
  @Default("string")
  @Column(
    DataType.ENUM("float", "integer", "date", "string", "boolean", "email")
  )
  type: string;

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
  @Column(DataType.ENUM("draft", "ready"))
  state: string;

  @BelongsTo(() => Source)
  source: Source;

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => ProfilePropertyRuleFilter)
  profilePropertyRuleFilters: ProfilePropertyRuleFilter[];

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

  @BeforeCreate
  static async ensureSourceReady(instance: ProfilePropertyRule) {
    const source = await Source.findByGuid(instance.sourceGuid);
    if (source.state !== "ready") {
      throw new Error("source is not ready");
    }
  }

  @BeforeSave
  static async validateQuery(instance: ProfilePropertyRule) {
    await instance.test();
  }

  @AfterSave
  static async clearCacheAfterSave() {
    return this.clearCache();
  }

  @AfterCreate
  static async buildManualProfileProperties(instance: ProfilePropertyRule) {
    const source = await instance.$get("source");
    const app = await source.$get("app");
    if (app.type === "manual") {
      await internalRun("profilePropertyRule", instance.guid);
    }
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

  @AfterDestroy
  static async destroyOptions(instance: ProfilePropertyRule) {
    await Option.destroy({
      where: { ownerGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyRuns(instance: ProfilePropertyRule) {
    await Run.destroy({
      where: { creatorGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyProfilePropertyRuleFilters(
    instance: ProfilePropertyRule
  ) {
    await ProfilePropertyRuleFilter.destroy({
      where: { profilePropertyRuleGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async clearCacheAfterDestroy(instance: ProfilePropertyRule) {
    await this.clearCache();
    await ProfileProperty.destroy({
      where: { profilePropertyRuleGuid: instance.guid },
    });
  }

  async parameterizedQueryFromProfile(q: string, profile: Profile) {
    return plugin.replaceTemplateProfileVariables(q, profile);
  }

  async test(options?: SimpleProfilePropertyRuleOptions) {
    const profile = await Profile.findOne({ order: api.sequelize.random() });
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

  async setOptions(options: SimpleProfilePropertyRuleOptions) {
    await this.test(options);

    for (const i in options) {
      options[
        i
      ] = await plugin.replaceTemplateProfilePropertyKeysWithProfilePropertyGuid(
        options[i]
      );
    }

    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions() {
    await this.enqueueRuns();
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

    const response = OptionHelper.validateOptions(this, options, allowEmpty);
    client.set(cacheKey, "true"); // do not await
    client.expire(cacheKey, CACHE_TTL / 1000);
    return response;
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async enqueueRuns() {
    await internalRun("profilePropertyRule", this.guid); // update *all* profiles

    const groups = await Group.findAll({
      include: [
        {
          model: GroupRule,
          where: { profilePropertyRuleGuid: this.guid },
        },
      ],
    });

    for (const i in groups) {
      const group = groups[i];
      await group.update({ state: "initializing" });
      await task.enqueue("group:run", { groupGuid: group.guid });
    }
  }

  async pluginOptions() {
    const source = await this.$get("source");
    const { pluginConnection } = await source.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }
    if (!pluginConnection.profilePropertyRuleOptions) {
      throw new Error(
        `cannot find profilePropertyRuleOptions for type ${source.type}`
      );
    }

    const response: Array<{
      key: string;
      description: string;
      required: boolean;
      type: string;
      options: Array<{
        key: string;
        description?: string;
        examples?: Array<any>;
      }>;
    }> = [];
    const app = await App.findByGuid(source.appGuid);
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();

    for (const i in pluginConnection.profilePropertyRuleOptions) {
      const opt = pluginConnection.profilePropertyRuleOptions[i];
      const options = await opt.options({
        connection,
        app,
        appOptions,
        source,
        sourceOptions,
        sourceMapping,
        profilePropertyRule: this,
      });

      response.push({
        key: opt.key,
        description: opt.description,
        required: opt.required,
        type: opt.type,
        options,
      });
    }

    return response;
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

    await this.enqueueRuns();
  }

  async pluginFilterOptions() {
    const { pluginConnection } = await this.getPlugin();
    if (!pluginConnection.methods.sourceFilters) {
      return [];
    }

    const profilePropertyRuleOptions = await this.getOptions();
    const source = await this.$get("source");
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const app = await App.findByGuid(source.appGuid);
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();

    const method = pluginConnection.methods.sourceFilters;
    const options = await method({
      connection,
      app,
      appOptions,
      source,
      sourceOptions,
      sourceMapping,
      profilePropertyRule: this,
      profilePropertyRuleOptions,
    });

    return options;
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
    const source = await this.$get("source");

    return {
      guid: this.guid,
      source: source ? await source.apiData(false, true, false) : undefined,
      key: this.key,
      type: this.type,
      state: this.state,
      unique: this.unique,
      options,
      filters,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }

  static async clearCache() {
    CACHE = {
      createdAt: new Date().getTime() - CACHE_TTL - 1,
      data: {},
    };
  }

  static async cached() {
    const now = new Date().getTime();
    if (CACHE.createdAt + CACHE_TTL >= now) {
      return CACHE.data;
    } else {
      const instances = await ProfilePropertyRule.findAll({
        order: [["key", "asc"]],
        include: [Source],
      });

      const rulesHash = {};
      instances.forEach((rule) => {
        rulesHash[rule.key] = {
          guid: rule.guid,
          key: rule.key,
          type: rule.type,
          unique: rule.unique,
          sourceGuid: rule.sourceGuid,
          source: rule.source.appGuid,
        };
      });

      CACHE = {
        createdAt: now,
        data: Object.assign(rulesHash, {}),
      };

      return CACHE.data;
    }
  }
}

import {
  Table,
  Column,
  AllowNull,
  DataType,
  Length,
  Default,
  BeforeSave,
  BeforeDestroy,
  AfterSave,
  AfterDestroy,
  ForeignKey,
  BelongsTo,
  HasMany,
  Is,
  DefaultScope,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { env, api, cache } from "actionhero";
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

export function profilePropertyRuleJSToSQLType(jsType: string) {
  const map = {
    boolean: "boolean",
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
const CACHE_KEY = `grouparoo:profilePropertyRules`;

export interface CachedProfilePropertyRule {
  guid: ProfilePropertyRule["guid"];
  key: ProfilePropertyRule["key"];
  type: ProfilePropertyRule["type"];
  unique: ProfilePropertyRule["unique"];
  isArray: ProfilePropertyRule["isArray"];
  identifying: ProfilePropertyRule["identifying"];
  sourceGuid: ProfilePropertyRule["sourceGuid"];
  appGuid: string;
}

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
  identifying: boolean;

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

  async afterSetOptions() {
    return ProfilePropertyRuleOps.enqueueRuns(this);
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
      options,
      filters,
      isArray: this.isArray,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  /**
   * Returns any Profile Properties that this Rule depends on.
   * For example, if email depends on userId, this method would return [guid_userIdRule]
   */
  async dependsOn(): Promise<ProfilePropertyRule[]> {
    // TODO!

    return [];
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
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

  @AfterSave
  static async clearCacheAfterSave() {
    return this.clearCache();
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
  static async stopRuns(instance: ProfilePropertyRule) {
    const runs = await Run.findAll({
      where: { creatorGuid: instance.guid, state: "running" },
    });

    for (const i in runs) {
      await runs[i].update({ state: "stopped" });
    }
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

  static async clearCache() {
    await cache.destroy(CACHE_KEY);
  }

  static async cached(): Promise<{
    [guid: string]: CachedProfilePropertyRule;
  }> {
    try {
      const cacheResponse = await cache.load(CACHE_KEY);
      return cacheResponse.value;
    } catch (error) {
      const message = (error?.message || "").toString();
      if (message === "Object not found" || message === "Object expired") {
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
            isArray: rule.isArray,
            identifying: rule.identifying,
            sourceGuid: rule.sourceGuid,
            appGuid: rule.source.appGuid,
          };
        });

        await cache.save(CACHE_KEY, rulesHash, CACHE_TTL);

        return rulesHash;
      } else {
        throw error;
      }
    }
  }
}

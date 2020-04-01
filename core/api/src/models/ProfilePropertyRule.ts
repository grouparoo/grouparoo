import {
  Table,
  Column,
  AllowNull,
  DataType,
  Default,
  BeforeSave,
  BeforeDestroy,
  AfterSave,
  AfterCreate,
  AfterDestroy,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { env, api, task } from "actionhero";
import { plugin } from "../modules/plugin";
import { LoggedModel } from "../classes/loggedModel";
import { Profile } from "./Profile";
import { ProfileProperty } from "./ProfileProperty";
import { App, SimpleAppOptions } from "./App";
import { Source, SimpleSourceOptions, SourceMapping } from "./Source";
import { Option } from "./Option";
import { Group } from "./Group";
import { GroupRule } from "./GroupRule";
import { internalRun } from "../modules/internalRun";
import { OptionHelper } from "./../modules/optionHelper";

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

const _boolean_ops = ["eq", "ne"];
const _number_ops = ["eq", "ne", "gt", "gte", "lt", "lte"];
const _string_ops = [
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
    eq: "equals",
    ne: "not equals",
    gt: "greater than",
    gte: "greater than or equals",
    lt: "less than",
    lte: "less than or equals",
    like: "is like",
    iLike: "is like, case insensitive",
    notLike: "is like",
    notILike: "is not like, case insensitive",
    startsWith: "starts with",
    endsWith: "ends with",
    substring: "has the string",
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

/**
 * Metadata and methods to return the options a Profile Property Rule for this connection/app.
 * Options is a method which will poll the source for available options to select (ie: names of tables or columns)
 */
export interface PluginConnectionProfilePropertyRuleOption {
  key: string;
  required: boolean;
  description: string;
  type: string;
  options: (
    app: App,
    appOptions: SimpleAppOptions,
    source: Source,
    sourceOptions: SimpleSourceOptions,
    sourceMapping: SourceMapping
  ) => Promise<
    Array<{
      key: string;
      description?: string;
      examples?: Array<any>;
    }>
  >;
}

let CACHE: ProfilePropertyRulesCache = {
  createdAt: 0,
  data: {},
};

@Table({ tableName: "profilePropertyRules", paranoid: false })
export class ProfilePropertyRule extends LoggedModel<ProfilePropertyRule> {
  guidPrefix() {
    return "rul";
  }

  @AllowNull(false)
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
  @Default(true)
  @Column
  passive: boolean;

  @BelongsTo(() => Source)
  source: Source;

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @BeforeSave
  static async ensureSourceOptions(instance: ProfilePropertyRule) {
    const source = await instance.$get("source");
    await source.validateOptions();
    await instance.validateOptions();
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
      const group = await Group.findOne({
        where: { guid: groupRule.groupGuid },
      });

      throw new Error(
        `cannot delete profile property rule "${instance.key}", group ${group.name} (${group.guid}) is based on it`
      );
    }
  }

  @AfterDestroy
  static async deleteOptions(instance: ProfilePropertyRule) {
    await Option.destroy({
      where: { ownerGuid: instance.guid },
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
      const source = await this.$get("source");
      return source.importProfileProperty(profile, this, options);
    }
  }

  async getOptions() {
    return OptionHelper.getOptions(this);
  }

  async setOptions(options: SimpleSourceOptions) {
    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions() {
    await this.enqueueRuns();
  }

  async validateOptions(options?: SimpleProfilePropertyRuleOptions) {
    if (!options) {
      options = await this.getOptions();
    }

    if (!this.passive) {
      return OptionHelper.validateOptions(this, options, true);
    }
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
    const app = await source.$get("app");
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();

    for (const i in pluginConnection.profilePropertyRuleOptions) {
      const opt = pluginConnection.profilePropertyRuleOptions[i];
      const options = await opt.options(
        app,
        appOptions,
        source,
        sourceOptions,
        sourceMapping
      );

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

  async apiData() {
    const options = await this.getOptions();
    const source = await this.$get("source");

    return {
      guid: this.guid,
      source: await source.apiData(false, true, false),
      key: this.key,
      type: this.type,
      unique: this.unique,
      passive: this.passive,
      options,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  // --- Class Cache Methods --- //

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

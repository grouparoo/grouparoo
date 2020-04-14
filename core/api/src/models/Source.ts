import {
  Table,
  Column,
  AllowNull,
  BelongsTo,
  HasOne,
  HasMany,
  Length,
  BeforeCreate,
  BeforeSave,
  AfterDestroy,
  BeforeDestroy,
  ForeignKey,
  Default,
  DataType,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Schedule } from "./Schedule";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Option } from "./Option";
import { App } from "./App";
import { Run } from "./Run";
import { Profile } from "./Profile";
import { Mapping } from "./Mapping";
import { plugin } from "../modules/plugin";
import { OptionHelper } from "./../modules/optionHelper";
import { MappingHelper } from "./../modules/mappingHelper";
import { StateMachine } from "./../modules/stateMachine";

export interface SimpleSourceOptions extends OptionHelper.SimpleOptions {}
export interface SourceMapping extends MappingHelper.Mappings {}

const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: ["validateOptions", "validateMapping"],
  },
];

@Table({ tableName: "sources", paranoid: false })
export class Source extends LoggedModel<Source> {
  guidPrefix() {
    return "src";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  appGuid: string;

  @AllowNull(true)
  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  name: string;

  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM("draft", "ready"))
  state: string;

  @BelongsTo(() => App)
  app: App;

  @HasOne(() => Schedule)
  schedule: Schedule;

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => ProfilePropertyRule)
  profilePropertyRules: ProfilePropertyRule[];

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @BeforeSave
  static async ensureUniqueName(instance: Source) {
    const count = await Source.count({
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

  @BeforeCreate
  static async ensurePluginConnection(instance: Source) {
    const { plugin } = await instance.getPlugin();
    if (!plugin) {
      throw new Error(
        `cannot find an import connection for a source of ${instance.type}`
      );
    }
  }

  @BeforeSave
  static async updateState(instance: App) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeDestroy
  static async ensureNoSchedule(instance: Source) {
    const schedule = await instance.$get("schedule");
    if (schedule) {
      throw new Error("you cannot delete a source that has a schedule");
    }
  }

  @BeforeDestroy
  static async ensureNoProfilePropertyRules(instance: Source) {
    const profilePropertyRules = await instance.$get("profilePropertyRules");
    if (profilePropertyRules.length > 0) {
      throw new Error(
        "you cannot delete a source that has profile property rules"
      );
    }
  }

  @AfterDestroy
  static async destroyOptions(instance: Source) {
    return Option.destroy({
      where: {
        ownerGuid: instance.guid,
      },
    });
  }

  @AfterDestroy
  static async destroyMappings(instance: Source) {
    return Mapping.destroy({
      where: {
        ownerGuid: instance.guid,
      },
    });
  }

  async getOptions() {
    return OptionHelper.getOptions(this);
  }

  async setOptions(options: SimpleSourceOptions) {
    return OptionHelper.setOptions(this, options);
  }

  async validateOptions(options?: SimpleSourceOptions) {
    if (!options) {
      options = await this.getOptions();
    }

    return OptionHelper.validateOptions(this, options);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async parameterizedOptions(run?: Run): Promise<SimpleSourceOptions> {
    const parameterizedOptions = {};
    const options = await this.getOptions();
    const keys = Object.keys(options);
    for (const i in keys) {
      const k = keys[i];
      parameterizedOptions[k] =
        typeof options[k] === "string"
          ? await plugin.replaceTemplateRunVariables(options[k], run)
          : options[k];
    }

    return parameterizedOptions;
  }

  async getMapping() {
    return MappingHelper.getMapping(this);
  }

  async setMapping(mappings: SourceMapping) {
    return MappingHelper.setMapping(this, mappings);
  }

  async validateMapping() {
    const previewAvailable = await this.previewAvailable();
    if (!previewAvailable) {
      return true;
    }

    const mapping = await this.getMapping();
    if (Object.keys(mapping).length === 1) {
      return true;
    } else {
      throw new Error("mapping not set");
    }
  }

  async importProfileProperty(
    profile: Profile,
    profilePropertyRule: ProfilePropertyRule,
    profilePropertyRuleOptionsOverride?: { [key: string]: any }
  ) {
    if (profilePropertyRule.state !== "ready") {
      return;
    }

    const { pluginConnection } = await this.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${this.type} (${this.guid})`
      );
    }

    const method = pluginConnection.methods.profileProperty;

    if (!method) {
      return;
    }

    const app = await this.$get("app");
    const appOptions = await app.getOptions();
    const sourceOptions = await this.getOptions();
    const sourceMapping = await this.getMapping();
    const profilePropertyRuleOptions = await profilePropertyRule.getOptions();
    const profilePropertyRuleFilters = await profilePropertyRule.getFilters();

    return method({
      app,
      appOptions,
      source: this,
      sourceOptions,
      sourceMapping,
      profilePropertyRule,
      profilePropertyRuleOptions: profilePropertyRuleOptionsOverride
        ? profilePropertyRuleOptionsOverride
        : profilePropertyRuleOptions,
      profilePropertyRuleFilters,
      profile,
    });
  }

  async sourceConnectionOptions() {
    const { pluginConnection } = await this.getPlugin();
    const app = await this.$get("app");
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.sourceOptions) {
      return {};
    }

    return pluginConnection.methods.sourceOptions({ app, appOptions });
  }

  async sourcePreview(sourceOptions?: SimpleSourceOptions) {
    if (!sourceOptions) {
      sourceOptions = await this.getOptions();
    }

    try {
      // if the options aren't set yet, return an empty array of rows
      await this.validateOptions(sourceOptions);
    } catch {
      return [];
    }

    const { pluginConnection } = await this.getPlugin();
    const app = await this.$get("app");
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.sourcePreview) {
      throw new Error(`cannot return a source preview for ${this.type}`);
    }

    return pluginConnection.methods.sourcePreview({
      app,
      appOptions,
      source: this,
      sourceOptions,
    });
  }

  async apiData(
    includeSchedule = true,
    includeApp = true,
    includeProfilePropertyRules = true
  ) {
    let app: App;
    let schedule: Schedule;
    let profilePropertyRules: ProfilePropertyRule[];

    if (includeApp) {
      app = await this.$get("app");
    }
    if (includeSchedule) {
      schedule = await this.$get("schedule");
    }
    if (includeProfilePropertyRules) {
      profilePropertyRules = await this.$get("profilePropertyRules");
    }

    const options = await this.getOptions();
    const { pluginConnection } = await this.getPlugin();
    const scheduleAvailable = await this.scheduleAvailable();
    const previewAvailable = await this.previewAvailable();
    const mapping = await this.getMapping();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      state: this.state,
      mapping,
      app: app ? await app.apiData() : null,
      scheduleAvailable,
      schedule: schedule ? await schedule.apiData() : null,
      previewAvailable,
      options,
      connection: pluginConnection,
      profilePropertyRules: profilePropertyRules
        ? await Promise.all(profilePropertyRules.map((prp) => prp.apiData()))
        : [],
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  async scheduleAvailable() {
    const { pluginConnection } = await this.getPlugin();
    if (typeof pluginConnection?.methods?.profiles === "function") {
      return true;
    }
    return false;
  }

  async previewAvailable() {
    const { pluginConnection } = await this.getPlugin();
    if (typeof pluginConnection?.methods?.sourcePreview === "function") {
      return true;
    }
    return false;
  }

  async import(profile: Profile) {
    const hash = {};
    const queryResponses = {};
    const rules = await this.$get("profilePropertyRules", {
      where: { state: "ready" },
    });

    for (const i in rules) {
      const rule = rules[i];

      let rawResponse;
      const queryKey =
        this.guid + ":" + JSON.stringify(await rule.getOptions());

      if (!queryResponses[queryKey]) {
        rawResponse = await this.importProfileProperty(profile, rule);
        queryResponses[queryKey] = rawResponse;
      } else {
        rawResponse = queryResponses[queryKey];
      }

      if (rawResponse !== null && rawResponse !== undefined) {
        let rawValue;

        if (
          typeof rawResponse === "string" ||
          typeof rawResponse === "number" ||
          typeof rawResponse === "boolean" ||
          rawResponse instanceof Date
        ) {
          rawValue = rawResponse;
        } else if (Array.isArray(rawResponse)) {
          rawValue = rawResponse[0];
        } else {
          const responseKeys = Object.keys(rawResponse);
          if (responseKeys.length === 0) {
            continue;
          } else if (responseKeys.length === 1) {
            rawValue = rawResponse[responseKeys[0]];
          } else {
            if (!rawResponse[rule.key]) {
              throw new Error(
                `source response contains multiple properties but none match ${
                  rule.key
                }: ${JSON.stringify(rawResponse)}`
              );
            }

            rawValue = rawResponse[rule.key];
          }
        }

        hash[rule.key] = rawValue;
      }
    }

    // remove null and undefined as we cannot set that value
    const hashKeys = Object.keys(hash);
    for (const i in hashKeys) {
      const key = hashKeys[i];
      if (hash[key] === null || hash[key] === undefined) {
        delete hash[key];
      }
    }

    return hash;
  }

  /**
   * This method is used to bootstrap a new source which requires a profile property rule for a mapping, but the rule doesn't yet exist.
   */
  async bootstrapUniqueProfilePropertyRule(
    key: string,
    type: string,
    mappedColumn: string
  ) {
    const rule = ProfilePropertyRule.build({
      key,
      type,
      state: "ready",
      unique: true,
      sourceGuid: this.guid,
    });

    // manually run the hooks we want
    ProfilePropertyRule.generateGuid(rule);
    await ProfilePropertyRule.ensureUniqueKey(rule);

    // @ts-ignore
    // danger zone!
    await rule.save({ hooks: false });
    await ProfilePropertyRule.clearCacheAfterSave();

    // build the default options
    const { pluginConnection } = await this.getPlugin();
    if (
      typeof pluginConnection.methods
        .uniqueProfilePropertyRuleBootstrapOptions === "function"
    ) {
      const app = await this.$get("app");
      const appOptions = await app.getOptions();
      const options = await this.getOptions();
      const ruleOptions = await pluginConnection.methods.uniqueProfilePropertyRuleBootstrapOptions(
        {
          app,
          appOptions,
          source: this,
          sourceOptions: options,
          mappedColumn,
        }
      );

      await rule.setOptions(ruleOptions);
    }

    return rule;
  }
}

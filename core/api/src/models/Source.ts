import {
  Table,
  Column,
  AllowNull,
  BelongsTo,
  HasOne,
  HasMany,
  BeforeCreate,
  AfterDestroy,
  BeforeDestroy,
  ForeignKey,
} from "sequelize-typescript";
import { api } from "actionhero";
import { LoggedModel } from "../classes/loggedModel";
import { Schedule } from "./Schedule";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Option } from "./Option";
import { App } from "./App";
import { Run } from "./Run";
import { Profile } from "./Profile";
import { Mapping } from "./Mapping";
import { GrouparooPlugin, PluginConnection } from "../classes/plugin";
import { plugin } from "../modules/plugin";

export interface SimpleSourceOptions {
  [key: string]: string;
}

export interface SourceMapping {
  [key: string]: string;
}

@Table({ tableName: "sources", paranoid: false })
export class Source extends LoggedModel<Source> {
  guidPrefix() {
    return "src";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  appGuid: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  type: string;

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

  @BeforeCreate
  static async ensurePluginConnection(instance: Source) {
    const { plugin } = instance.getPlugin();
    if (!plugin) {
      throw new Error(
        `cannot find an import connection for a source of ${instance.type}`
      );
    }
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
  static async destroyAppOptions(instance: Source) {
    return Option.destroy({
      where: {
        ownerGuid: instance.guid,
      },
    });
  }

  async getOptions() {
    const optionsObject: SimpleSourceOptions = {};
    const options = await this.$get("_options");

    options.forEach((option) => {
      optionsObject[option.key] = option.value;
    });

    return optionsObject;
  }

  async setOptions(options: { [key: string]: string }) {
    if (Object.keys(options).length === 0) {
      return;
    }

    await this.validateOptions(options);

    const transaction = await api.sequelize.transaction();

    try {
      await Option.destroy({
        where: {
          ownerGuid: this.guid,
        },
        transaction,
      });

      const keys = Object.keys(options);
      for (const i in keys) {
        const key = keys[i];
        await Option.create(
          {
            ownerGuid: this.guid,
            ownerType: "source",
            key,
            value: options[key],
          },
          { transaction }
        );
      }

      this.changed("updatedAt", true);
      await this.save({ transaction });

      await transaction.commit();
    } catch {
      await transaction.rollback();
    }
  }

  async validateOptions(options: { [key: string]: string }) {
    const requiredOptions = this.getRequiredOptions();
    requiredOptions.forEach((requiredOption) => {
      if (!options[requiredOption]) {
        throw new Error(
          `${requiredOption} is required for a source of type ${this.type}`
        );
      }
    });

    const { pluginConnection } = this.getPlugin();
    const allOptions = pluginConnection.options.map((o) => o.key);
    for (const k in options) {
      if (allOptions.indexOf(k) < 0) {
        throw new Error(`${k} is not an option for a ${this.type} source`);
      }
    }
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
    const MappingObject: SourceMapping = {};
    const mappings = await this.$get("mappings");

    for (const i in mappings) {
      const mapping = mappings[i];
      const rule = await mapping.$get("profilePropertyRule");
      MappingObject[mapping.remoteKey] = rule.key;
    }

    return MappingObject;
  }

  async setMapping(mappings: SourceMapping) {
    const transaction = await api.sequelize.transaction();

    try {
      await Mapping.destroy({
        where: { ownerGuid: this.guid },
        transaction,
      });

      const keys = Object.keys(mappings);
      for (const i in keys) {
        const remoteKey = keys[i];
        const key = mappings[remoteKey];
        const profilePropertyRule = await ProfilePropertyRule.findOne({
          where: { key },
        });

        if (!profilePropertyRule) {
          throw new Error(`cannot find profile property rule ${key}`);
        }

        await Mapping.create(
          {
            ownerGuid: this.guid,
            ownerType: "source",
            profilePropertyRuleGuid: profilePropertyRule.guid,
            remoteKey,
          },
          { transaction }
        );
      }

      this.changed("updatedAt", true);
      await this.save({ transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async importProfileProperty(
    profile: Profile,
    profilePropertyRule: ProfilePropertyRule,
    profilePropertyRuleOptionsOverride?: { [key: string]: any }
  ) {
    if (profilePropertyRule.passive) {
      return;
    }

    const { pluginConnection } = this.getPlugin();
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

    return method(
      app,
      appOptions,
      this,
      sourceOptions,
      sourceMapping,
      profilePropertyRule,
      profilePropertyRuleOptionsOverride
        ? profilePropertyRuleOptionsOverride
        : profilePropertyRuleOptions,
      profile
    );
  }

  async sourceConnectionOptions() {
    const { pluginConnection } = this.getPlugin();
    const app = await this.$get("app");
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.sourceOptions) {
      return {};
    }

    return pluginConnection.methods.sourceOptions(app, appOptions);
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

    const { pluginConnection } = this.getPlugin();
    const app = await this.$get("app");
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.sourcePreview) {
      throw new Error(`cannot return a source preview for ${this.type}`);
    }

    return pluginConnection.methods.sourcePreview(
      app,
      appOptions,
      this,
      sourceOptions
    );
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
    const mapping = await this.getMapping();
    const { pluginConnection } = this.getPlugin();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      mapping,
      app: app ? await app.apiData() : null,
      scheduleAvailable: this.scheduleAvailable(),
      schedule: schedule ? await schedule.apiData() : null,
      options,
      connection: pluginConnection,
      profilePropertyRules: profilePropertyRules
        ? await Promise.all(profilePropertyRules.map((prp) => prp.apiData()))
        : [],
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  scheduleAvailable() {
    const { pluginConnection } = this.getPlugin();
    if (typeof pluginConnection?.methods?.profiles === "function") {
      return true;
    }
    return false;
  }

  async import(profile: Profile) {
    const hash = {};
    const queryResponses = {};
    const rules = await this.$get("profilePropertyRules");

    for (const i in rules) {
      const rule = rules[i];

      if (rule.passive) {
        continue;
      }

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

  getPlugin() {
    let match: {
      plugin: GrouparooPlugin;
      pluginConnection: PluginConnection;
    } = { plugin: null, pluginConnection: null };

    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections.forEach((pluginConnection) => {
          if (pluginConnection.name === this.type) {
            match = { plugin, pluginConnection };
          }
        });
      }
    });

    return match;
  }

  private getRequiredOptions() {
    const { pluginConnection } = this.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${this.type}`);
    }

    return pluginConnection.options.filter((o) => o.required).map((o) => o.key);
  }
}

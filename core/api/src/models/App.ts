import {
  Table,
  Column,
  AllowNull,
  BeforeSave,
  BeforeDestroy,
  AfterDestroy,
  HasMany,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Source } from "./Source";
import { Option } from "./Option";
import { GrouparooPlugin, PluginApp } from "../classes/plugin";
import { api, log } from "actionhero";

export interface AppOption {
  key: string;
  required: boolean;
  description?: string;
}

export interface SimpleAppOptions {
  [key: string]: string;
}

@Table({ tableName: "apps", paranoid: false })
export class App extends LoggedModel<App> {
  guidPrefix() {
    return "app";
  }

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  type: string;

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Source)
  sources: Array<Source>;

  @BeforeSave
  static async validateType(instance: App) {
    instance.getRequiredOptions();
  }

  @BeforeDestroy
  static async checkDependents(instance: App) {
    const sources = await Source.findAll({
      where: { appGuid: instance.guid },
    });
    if (sources.length > 0) {
      throw new Error(
        `cannot delete this app, source ${sources[0].guid} relies on it`
      );
    }
  }

  @AfterDestroy
  static async destroyAppOptions(instance: App) {
    return Option.destroy({
      where: {
        ownerGuid: instance.guid,
      },
    });
  }

  async test() {
    let result = false;
    let error;

    const { pluginApp } = this.getPlugin();
    if (!pluginApp) {
      throw new Error(`cannot find a pluginApp type of ${this.type}`);
    }

    log(`[ app ] testing app ${this.name} (${this.guid}, ${this.type})`);

    const appOptions = await this.getOptions();

    try {
      result = await pluginApp.test(this, appOptions);
    } catch (err) {
      error = err;
      result = false;
      log(`[ app ] testing app threw error: ${error}`);
    }

    log(`[ app ] app ${this.guid} (${this.type}) test result: ${result}`);
    return { result, error };
  }

  async getOptions() {
    const optionsObject: SimpleAppOptions = {};
    const options = await this.$get("_options");

    options.forEach((option) => {
      optionsObject[option.key] = option.value;
    });

    return optionsObject;
  }

  async setOptions(options: { [key: string]: string }) {
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
            ownerType: "app",
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
          `${requiredOption} is required for a app of type ${this.type}`
        );
      }
    });

    const { pluginApp } = this.getPlugin();
    const allOptions = pluginApp.options.map((o) => o.key);
    for (const k in options) {
      if (allOptions.indexOf(k) < 0) {
        throw new Error(`${k} is not an option for a ${this.type} app`);
      }
    }
  }

  async apiData() {
    const options = await this.getOptions();

    return {
      guid: this.guid,
      name: this.name,
      icon: this.getIcon(),
      type: this.type,
      options,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  getPlugin() {
    let match: {
      plugin: GrouparooPlugin;
      pluginApp: PluginApp;
    } = { plugin: null, pluginApp: null };

    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.apps) {
        plugin.apps.forEach((pluginApp) => {
          if (pluginApp.name === this.type) {
            match = { plugin, pluginApp };
          }
        });
      }
    });

    return match;
  }

  private getIcon() {
    return this.getPlugin()?.plugin?.icon;
  }

  private getRequiredOptions() {
    const { pluginApp } = this.getPlugin();

    if (!pluginApp) {
      throw new Error(`cannot find a pluginApp for type ${this.type}`);
    }

    return pluginApp.options.filter((o) => o.required).map((o) => o.key);
  }
}

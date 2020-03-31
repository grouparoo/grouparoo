import { GrouparooPlugin, PluginConnection } from "../classes/plugin";
import { api } from "actionhero";
import { LoggedModel } from "./../classes/loggedModel";
import { Column, HasMany, AfterDestroy } from "sequelize-typescript";
import { Option } from "../models/Option";

export interface SimpleOptions {
  [key: string]: string;
}

export abstract class ModelWithOptions<T> extends LoggedModel<T> {
  @Column
  type: string;

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @AfterDestroy
  static async destroyDestinationOptions(instance) {
    return Option.destroy({
      where: { ownerGuid: instance.guid },
    });
  }

  async getOptions() {
    const optionsObject: SimpleOptions = {};
    const options = await this.$get("_options");

    options.forEach((option) => {
      optionsObject[option.key] = option.value;
    });

    return optionsObject;
  }

  async setOptions(options: SimpleOptions) {
    const transaction = await api.sequelize.transaction();

    try {
      await this.validateOptions(options);

      await Option.destroy({
        where: { ownerGuid: this.guid },
        transaction,
      });

      const keys = Object.keys(options);
      for (const i in keys) {
        const key = keys[i];
        await Option.create(
          {
            ownerGuid: this.guid,
            ownerType: "destination",
            key,
            value: options[key],
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

  async validateOptions(options: { [key: string]: string }) {
    const requiredOptions = this.getRequiredOptions();
    requiredOptions.forEach((requiredOption) => {
      if (!options[requiredOption]) {
        throw new Error(
          `${requiredOption} is required for a destination of type ${this.type}`
        );
      }
    });

    const { pluginConnection } = this.getPlugin();
    const allOptions = pluginConnection.options.map((o) => o.key);
    for (const k in options) {
      if (allOptions.indexOf(k) < 0) {
        throw new Error(`${k} is not an option for a ${this.type} destination`);
      }
    }
  }

  private getRequiredOptions() {
    const { pluginConnection } = this.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${this.type}`);
    }

    return pluginConnection.options.filter((o) => o.required).map((o) => o.key);
  }
}

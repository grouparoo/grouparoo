import { api } from "actionhero";
import {
  GrouparooPlugin,
  PluginConnection,
  PluginApp,
} from "../classes/plugin";
import { Option } from "./../models/Option";
import { Source } from "./../models/Source";
import { Destination } from "./../models/Destination";
import { Schedule } from "./../models/Schedule";
import { ProfilePropertyRule } from "./../models/ProfilePropertyRule";
import { App } from "./../models/App";
import { LoggedModel } from "../classes/loggedModel";

function modelName(instance): string {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}

export namespace OptionHelper {
  export interface SimpleOptions {
    [key: string]: any;
  }

  export async function getOptions(
    instance: Source | Destination | Schedule | ProfilePropertyRule | App,
    sourceFromEnvironment = true
  ) {
    let optionsObject: SimpleOptions = {};
    const options = await Option.findAll({
      where: { ownerGuid: instance.guid },
    });

    options.forEach((option) => {
      optionsObject[option.key] = option.value;
    });

    if (sourceFromEnvironment) {
      optionsObject = sourceEnvironmentVariableOptions(instance, optionsObject);
    }

    return optionsObject;
  }

  export async function setOptions(
    instance: Source | Destination | Schedule | ProfilePropertyRule | App,
    options: SimpleOptions
  ) {
    await validateOptions(instance, options);
    const oldOptions = await getOptions(instance, false);
    let hasChanges = false;

    for (const i in oldOptions) {
      if (oldOptions[i] !== options[i]) {
        hasChanges = true;
      }
    }
    for (const i in options) {
      if (oldOptions[i] !== options[i]) {
        hasChanges = true;
      }
    }

    if (!hasChanges) return;

    const transaction = await api.sequelize.transaction();

    try {
      await Option.destroy({
        where: { ownerGuid: instance.guid },
        transaction,
      });

      const keys = Object.keys(options);
      for (const i in keys) {
        const key = keys[i];
        await Option.create(
          {
            ownerGuid: instance.guid,
            ownerType: modelName(instance),
            key,
            value: options[key],
          },
          { transaction }
        );
      }

      // @ts-ignore
      instance.changed("updatedAt", true);
      await LoggedModel.logUpdate(instance);
      // @ts-ignore
      await instance.save({ transaction, hooks: false });

      await transaction.commit();

      // if there's an afterSetMapping hook
      if (typeof instance["afterSetOptions"] === "function") {
        await instance["afterSetOptions"]();
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  export async function getPlugin(
    instance: Source | Destination | Schedule | ProfilePropertyRule | App
  ) {
    let match: {
      plugin: GrouparooPlugin;
      pluginConnection: PluginConnection;
      pluginApp: PluginApp;
    } = { plugin: null, pluginConnection: null, pluginApp: null };
    const type = await getInstanceType(instance);
    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.apps) {
        plugin.apps.forEach((pluginApp) => {
          if (pluginApp.name === type) {
            match.plugin = plugin;
            match.pluginApp = pluginApp;
          }
        });
      }

      if (plugin.connections) {
        plugin.connections.forEach((pluginConnection) => {
          if (pluginConnection.name === type) {
            match.plugin = plugin;
            match.pluginConnection = pluginConnection;
          }
        });
      }
    });

    return match;
  }

  export async function validateOptions(
    instance: Source | Destination | Schedule | ProfilePropertyRule | App,
    options: { [key: string]: string },
    allowEmpty = false
  ) {
    let requiredOptions: string[];
    let allOptions: string[];

    if (allowEmpty && Object.keys(options).length === 0) {
      return;
    }

    const type = await getInstanceType(instance);

    if (instance instanceof Source) {
      requiredOptions = await getRequiredConnectionOptions(instance);
      const { pluginConnection } = await getPlugin(instance);
      allOptions = pluginConnection.options.map((o) => o.key);
    } else if (instance instanceof Destination) {
      requiredOptions = await getRequiredConnectionOptions(instance);
      const { pluginConnection } = await getPlugin(instance);
      allOptions = pluginConnection.options.map((o) => o.key);
    } else if (instance instanceof Schedule) {
      requiredOptions = await getRequiredScheduleOptions(instance);
      const { pluginConnection } = await getPlugin(instance);
      allOptions = pluginConnection.scheduleOptions
        ? pluginConnection.scheduleOptions.map((o) => o.key)
        : [];
    } else if (instance instanceof ProfilePropertyRule) {
      requiredOptions = await getRequiredProfilePropertyRuleOptions(instance);
      const { pluginConnection } = await getPlugin(instance);
      allOptions = pluginConnection.profilePropertyRuleOptions
        ? pluginConnection.profilePropertyRuleOptions.map((o) => o.key)
        : [];
    } else if (instance instanceof App) {
      requiredOptions = await getRequiredAppOptions(instance);
      const { pluginApp } = await getPlugin(instance);
      allOptions = pluginApp.options.map((o) => o.key);
    } else {
      throw new Error(`cannot get required options`);
    }

    requiredOptions.forEach((requiredOption) => {
      if (!options[requiredOption]) {
        throw new Error(
          `${requiredOption} is required for a ${modelName(
            instance
          )} of type ${type} (${instance["name"] || instance["key"]}, ${
            instance.guid
          })`
        );
      }
    });

    for (const k in options) {
      if (allOptions.indexOf(k) < 0) {
        throw new Error(
          `${k} is not an option for a ${type} ${modelName(instance)} (${
            instance["name"] || instance["key"]
          }, ${instance.guid})`
        );
      }
    }
  }

  export async function getRequiredConnectionOptions(
    instance: Source | Destination
  ) {
    const { pluginConnection } = await getPlugin(instance);
    const type = await getInstanceType(instance);

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${type}`);
    }

    return pluginConnection.options.filter((o) => o.required).map((o) => o.key);
  }

  export async function getRequiredScheduleOptions(instance: Schedule) {
    const { pluginConnection } = await getPlugin(instance);
    const type = await getInstanceType(instance);

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${type}`);
    }

    if (!pluginConnection.scheduleOptions) {
      return [];
    }

    return pluginConnection.scheduleOptions
      .filter((o) => o.required)
      .map((o) => o.key);
  }

  export async function getRequiredProfilePropertyRuleOptions(
    instance: ProfilePropertyRule
  ) {
    const { pluginConnection } = await getPlugin(instance);
    const type = await getInstanceType(instance);

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${type}`);
    }

    if (!pluginConnection.profilePropertyRuleOptions) {
      return [];
    }

    return pluginConnection.profilePropertyRuleOptions
      .filter((o) => o.required)
      .map((o) => o.key);
  }

  export async function getRequiredAppOptions(instance: App) {
    const { pluginApp } = await getPlugin(instance);
    const type = await getInstanceType(instance);

    if (!pluginApp) throw new Error(`cannot find a pluginApp for type ${type}`);

    return pluginApp.options.filter((o) => o.required).map((o) => o.key);
  }

  async function getInstanceType(
    instance: Source | Destination | Schedule | ProfilePropertyRule | App
  ) {
    let type = instance["type"];

    if (!type || instance instanceof ProfilePropertyRule) {
      if (instance["sourceGuid"]) {
        const source = await Source.scope(null).findOne({
          where: { guid: instance["sourceGuid"] },
        });
        if (source) {
          type = source.type;
        }
      }
    }

    return type;
  }

  /**
   * Return the list of possible environment variable options for this type,
   * GROUPAROO_OPTION__APP__production-hubspot-api-key=abc123 returns production-hubspot-api-key
   */
  export function getEnvironmentVariableOptionsForTopic(topic: string) {
    const regexp = new RegExp(
      `^GROUPAROO_OPTION__${topic.toUpperCase()}__(.*)`
    );
    return Object.keys(process.env)
      .filter((k) => k.match(regexp))
      .map((k) => k.match(regexp)[1]);
  }

  /**
   * Load the value of an environment variable option from the environment
   */
  export function getEnvironmentVariableOption(type: string, key: string) {
    const fullKey = `GROUPAROO_OPTION__${type.toUpperCase()}__${key}`;
    const value = process.env[fullKey];
    if (!value)
      throw new Error(
        `cannot find environment variable for type=${type} and key=${key} (full key "${fullKey}")`
      );

    return value;
  }

  /**
   * Replace all values in a bundle of SimpleOptions with those values loaded from the ENV
   */
  export function sourceEnvironmentVariableOptions(
    instance: Source | Destination | Schedule | ProfilePropertyRule | App,
    options: SimpleOptions
  ) {
    const envOptionKeys = getEnvironmentVariableOptionsForTopic(
      modelName(instance)
    );

    for (const k in options) {
      if (envOptionKeys.includes(options[k]))
        options[k] = getEnvironmentVariableOption(
          modelName(instance),
          options[k]
        );
    }

    return options;
  }
}

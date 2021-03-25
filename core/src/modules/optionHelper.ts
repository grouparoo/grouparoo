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
import { Property } from "../models/Property";
import { App, AppOption } from "./../models/App";
import { LoggedModel } from "../classes/loggedModel";
import { LockableHelper } from "./lockableHelper";

function modelName(instance): string {
  let name = instance.constructor.name;
  name = name[0].toLowerCase() + name.substr(1);
  return name;
}

export namespace OptionHelper {
  export interface SimpleOptions {
    [key: string]: string | number | boolean;
  }

  export async function getOptions(
    instance: Source | Destination | Schedule | Property | App,
    sourceFromEnvironment = true,
    hidePasswords = false
  ) {
    if (sourceFromEnvironment === null || sourceFromEnvironment === undefined) {
      sourceFromEnvironment = true;
    }

    let optionsObject = await getDefaultOptionValues(instance);
    const options = await Option.findAll({
      where: { ownerId: instance.id },
    });

    const optionsToHide: string[] = [];
    if (instance instanceof App) {
      const appOptions = await instance.appOptions();
      const appOptionKeys = Object.keys(appOptions);

      appOptionKeys.forEach((appOptionKey) => {
        if (appOptions[appOptionKey].type == "password" && hidePasswords) {
          optionsToHide.push(appOptionKey);
        }
      });
    }

    options.forEach((option) => {
      if (optionsToHide.includes(option.key)) {
        optionsObject[option.key] = "******";
      } else {
        optionsObject[option.key] = option.typedValue();
      }
    });

    if (sourceFromEnvironment) {
      optionsObject = sourceEnvironmentVariableOptions(instance, optionsObject);
    }

    return optionsObject;
  }

  export async function setOptions(
    instance: Source | Destination | Schedule | Property | App,
    options: SimpleOptions
  ) {
    await validateOptions(instance, options, null);
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
    await LockableHelper.beforeUpdateOptions(instance, hasChanges);

    await Option.destroy({
      where: { ownerId: instance.id },
    });

    const keys = Object.keys(options);
    for (const i in keys) {
      const key = keys[i];
      await Option.create({
        ownerId: instance.id,
        ownerType: modelName(instance),
        key,
        value: options[key],
        type: typeof options[key],
      });
    }

    // @ts-ignore
    instance.changed("updatedAt", true);
    await LoggedModel.logUpdate(instance);
    // @ts-ignore
    await instance.save({ hooks: false });

    // if there's an afterSetMapping hook and we want to commit our changes
    if (typeof instance["afterSetOptions"] === "function") {
      await instance["afterSetOptions"](hasChanges);
    }
  }

  export async function getPlugin(
    instance: Source | Destination | Schedule | Property | App
  ) {
    const type = await getInstanceType(instance);
    return getPluginByType(type);
  }

  export function getPluginByType(type: string) {
    let match: {
      plugin: GrouparooPlugin;
      pluginConnection: PluginConnection;
      pluginApp: PluginApp;
    } = { plugin: null, pluginConnection: null, pluginApp: null };

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

    if (!match.plugin) {
      throw new Error(`Cannot find a "${type}" plugin.  Did you install it?`);
    }

    return match;
  }

  export async function validateOptions(
    instance: Source | Destination | Schedule | Property | App,
    options: SimpleOptions,
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
    } else if (instance instanceof Property) {
      requiredOptions = await getRequiredPropertyOptions(instance);
      const { pluginConnection } = await getPlugin(instance);
      allOptions = pluginConnection.propertyOptions
        ? pluginConnection.propertyOptions.map((o) => o.key)
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
            instance.id
          })`
        );
      }
    });

    for (const k in options) {
      if (allOptions.indexOf(k) < 0) {
        throw new Error(
          `${k} is not an option for a ${type} ${modelName(instance)} (${
            instance["name"] || instance["key"]
          }, ${instance.id})`
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

  export async function getRequiredPropertyOptions(instance: Property) {
    const { pluginConnection } = await getPlugin(instance);
    const type = await getInstanceType(instance);
    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${type}`);
    }

    if (!pluginConnection.propertyOptions) {
      return [];
    }

    return pluginConnection.propertyOptions
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
    instance: Source | Destination | Schedule | Property | App
  ) {
    let type = instance["type"];

    if (!type || instance instanceof Property) {
      if (instance["sourceId"]) {
        const source = await Source.scope(null).findOne({
          where: { id: instance["sourceId"] },
        });
        if (source) type = source.type;
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
    instance: Source | Destination | Schedule | Property | App,
    options: SimpleOptions
  ) {
    const envOptionKeys = getEnvironmentVariableOptionsForTopic(
      modelName(instance)
    );

    for (const k in options) {
      if (envOptionKeys.includes(options[k].toString()))
        options[k] = getEnvironmentVariableOption(
          modelName(instance),
          options[k].toString()
        );
    }

    return options;
  }

  async function getDefaultOptionValues(
    instance: Source | Destination | Schedule | Property | App
  ) {
    const plugin = await getPlugin(instance);

    let options: AppOption[] = [];
    if (instance instanceof App && plugin.pluginApp) {
      options = plugin.pluginApp.options;
    } else if (
      (instance instanceof Source || instance instanceof Destination) &&
      plugin.pluginConnection
    ) {
      options = plugin.pluginConnection.options;
    }

    const defaultOptions: SimpleOptions = {};
    for (const opt of options) {
      if (opt.defaultValue !== undefined) {
        defaultOptions[opt.key] = opt.defaultValue;
      }
    }

    return defaultOptions;
  }
}
